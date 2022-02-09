import { ɵɵinject, NgZone, RendererFactory2, PLATFORM_ID, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject, merge, fromEvent, of, animationFrameScheduler } from 'rxjs';

function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
        return [];
    }
    // NOTE: 1 DOM access here
    const window = element.ownerDocument.defaultView;
    const css = window === null || window === void 0 ? void 0 : window.getComputedStyle(element, null);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return property ? css && css[property] : css;
}

const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * Determines if the browser is Internet Explorer
 */
// todo: valorkin fix and drop IE support :evil:
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
const isIE10 = isBrowser && !!(window.MSInputMethodContext && /MSIE 10/.test(navigator.userAgent));
function isIE(version) {
    if (version === 11) {
        return isIE11;
    }
    if (version === 10) {
        return isIE10;
    }
    return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 */
function getOffsetParent(element) {
    if (!element) {
        return document.documentElement;
    }
    const noOffsetParent = isIE(10) ? document.body : null;
    // NOTE: 1 DOM access here
    let offsetParent = element === null || element === void 0 ? void 0 : element.offsetParent;
    // Skip hidden elements which don't have an offsetParent
    let sibling = void 0;
    while (offsetParent === noOffsetParent
        && element.nextElementSibling
        && sibling !== element.nextElementSibling) {
        // todo: valorkin fix
        sibling = element.nextElementSibling;
        offsetParent = sibling.offsetParent;
    }
    const nodeName = offsetParent && offsetParent.nodeName;
    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
        return sibling ? sibling.ownerDocument.documentElement : document.documentElement;
    }
    // .offsetParent will return the closest TH, TD or TABLE in case
    if (offsetParent &&
        ['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 &&
        getStyleComputedProperty(offsetParent, 'position') === 'static') {
        return getOffsetParent(offsetParent);
    }
    return offsetParent;
}

// todo: valorkin fix
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isOffsetContainer(element) {
    const { nodeName } = element;
    if (nodeName === 'BODY') {
        return false;
    }
    return (nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element);
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 */
function getRoot(node) {
    if (node.parentNode !== null) {
        return getRoot(node.parentNode);
    }
    return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 */
function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
        return document.documentElement;
    }
    // Here we make sure to give as "start" the element that comes first in the DOM
    const order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    const start = order ? element1 : element2;
    const end = order ? element2 : element1;
    // Get common ancestor container
    const range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    // todo: valorkin fix
    const commonAncestorContainer = range.commonAncestorContainer;
    // Both nodes are inside #document
    if ((element1 !== commonAncestorContainer &&
        element2 !== commonAncestorContainer) ||
        start.contains(end)) {
        if (isOffsetContainer(commonAncestorContainer)) {
            return commonAncestorContainer;
        }
        return getOffsetParent(commonAncestorContainer);
    }
    // one of the nodes is inside shadowDOM, find which one
    const element1root = getRoot(element1);
    if (element1root.host) {
        return findCommonOffsetParent(element1root.host, element2);
    }
    else {
        return findCommonOffsetParent(element1, getRoot(element2).host);
    }
}

/**
 * Finds the first parent of an element that has a transformed property defined
 */
function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
        return document.documentElement;
    }
    let el = element.parentElement;
    while ((el === null || el === void 0 ? void 0 : el.parentElement) && getStyleComputedProperty(el, 'transform') === 'none') {
        el = el.parentElement;
    }
    return el || document.documentElement;
}

/**
 * Helper to detect borders of a given element
 */
function getBordersSize(styles, axis) {
    const sideA = axis === 'x' ? 'Left' : 'Top';
    const sideB = sideA === 'Left' ? 'Right' : 'Bottom';
    return (parseFloat(styles[`border${sideA}Width`]) +
        parseFloat(styles[`border${sideB}Width`]));
}

function getSize(axis, body, html, computedStyle) {
    const _body = body;
    const _html = html;
    const _computedStyle = computedStyle;
    return Math.max(_body[`offset${axis}`], _body[`scroll${axis}`], _html[`client${axis}`], _html[`offset${axis}`], _html[`scroll${axis}`], isIE(10)
        ? (parseInt(_html[`offset${axis}`], 10) +
            parseInt(_computedStyle[`margin${axis === 'Height' ? 'Top' : 'Left'}`], 10) +
            parseInt(_computedStyle[`margin${axis === 'Height' ? 'Bottom' : 'Right'}`], 10))
        : 0);
}
function getWindowSizes(document) {
    const body = document.body;
    const html = document.documentElement;
    const computedStyle = isIE(10) ? getComputedStyle(html) : void 0;
    return {
        height: getSize('Height', body, html, computedStyle),
        width: getSize('Width', body, html, computedStyle)
    };
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 */
function getScroll(element, side = 'top') {
    const upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    const nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
        const html = element.ownerDocument.documentElement;
        const scrollingElement = element.ownerDocument.scrollingElement || html;
        return scrollingElement[upperSide];
    }
    return element[upperSide];
}

function getClientRect(offsets) {
    return Object.assign(Object.assign({}, offsets), { right: (offsets.left || 0) + offsets.width, bottom: (offsets.top || 0) + offsets.height });
}

/**
 * Tells if a given input is a number
 */
function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(Number(n));
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isNumber(value) {
    return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
}

/**
 * Get bounding client rect of given element
 */
function getBoundingClientRect(element) {
    const rect = element.getBoundingClientRect();
    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
        if (isIE(10)) {
            const scrollTop = getScroll(element, 'top');
            const scrollLeft = getScroll(element, 'left');
            if (rect && isNumber(rect.top) && isNumber(rect.left) && isNumber(rect.bottom) && isNumber(rect.right)) {
                rect.top += scrollTop;
                rect.left += scrollLeft;
                rect.bottom += scrollTop;
                rect.right += scrollLeft;
            }
        }
    }
    catch (e) {
        return rect;
    }
    if (!(rect && isNumber(rect.top) && isNumber(rect.left) && isNumber(rect.bottom) && isNumber(rect.right))) {
        return rect;
    }
    const result = {
        left: rect.left,
        top: rect.top,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
    };
    // subtract scrollbar size from sizes
    const sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : undefined;
    const width = (sizes === null || sizes === void 0 ? void 0 : sizes.width) || element.clientWidth
        || isNumber(result.right) && isNumber(result.left) && result.right - result.left || 0;
    const height = (sizes === null || sizes === void 0 ? void 0 : sizes.height) || element.clientHeight
        || isNumber(result.bottom) && isNumber(result.top) && result.bottom - result.top || 0;
    let horizScrollbar = element.offsetWidth - width;
    let vertScrollbar = element.offsetHeight - height;
    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
        const styles = getStyleComputedProperty(element);
        horizScrollbar -= getBordersSize(styles, 'x');
        vertScrollbar -= getBordersSize(styles, 'y');
        result.width -= horizScrollbar;
        result.height -= vertScrollbar;
    }
    return getClientRect(result);
}

/**
 * Returns the parentNode or the host of the element
 */
// todo: valorkin fix
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getParentNode(element) {
    if (element.nodeName === 'HTML') {
        return element;
    }
    return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 */
// todo: valorkin fix
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
        return document.body;
    }
    switch (element.nodeName) {
        case 'HTML':
        case 'BODY':
            return element.ownerDocument.body;
        case '#document':
            return element.body;
        default:
    }
    // Firefox want us to check `-x` and `-y` variations as well
    const { overflow, overflowX, overflowY } = getStyleComputedProperty(element);
    if (/(auto|scroll|overlay)/.test(String(overflow) + String(overflowY) + String(overflowX))) {
        return element;
    }
    return getScrollParent(getParentNode(element));
}

/**
 * Sum or subtract the element scroll values (left and top) from a given rect object
 */
function includeScroll(rect, element, subtract = false) {
    const scrollTop = getScroll(element, 'top');
    const scrollLeft = getScroll(element, 'left');
    const modifier = subtract ? -1 : 1;
    if (isNumber(rect.top)) {
        rect.top += scrollTop * modifier;
    }
    if (isNumber(rect.bottom)) {
        rect.bottom += scrollTop * modifier;
    }
    if (isNumber(rect.left)) {
        rect.left += scrollLeft * modifier;
    }
    if (isNumber(rect.right)) {
        rect.right += scrollLeft * modifier;
    }
    return rect;
}

function getOffsetRectRelativeToArbitraryNode(children, parent, fixedPosition = false) {
    var _a, _b, _c, _d, _e, _f;
    const isIE10 = isIE(10);
    const isHTML = parent.nodeName === 'HTML';
    const childrenRect = getBoundingClientRect(children);
    const parentRect = getBoundingClientRect(parent);
    const scrollParent = getScrollParent(children);
    const styles = getStyleComputedProperty(parent);
    const borderTopWidth = parseFloat(styles.borderTopWidth);
    const borderLeftWidth = parseFloat(styles.borderLeftWidth);
    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
        parentRect.top = Math.max((_a = parentRect.top) !== null && _a !== void 0 ? _a : 0, 0);
        parentRect.left = Math.max((_b = parentRect.left) !== null && _b !== void 0 ? _b : 0, 0);
    }
    let offsets = getClientRect({
        top: ((_c = childrenRect.top) !== null && _c !== void 0 ? _c : 0) - ((_d = parentRect.top) !== null && _d !== void 0 ? _d : 0) - borderTopWidth,
        left: ((_e = childrenRect.left) !== null && _e !== void 0 ? _e : 0) - ((_f = parentRect.left) !== null && _f !== void 0 ? _f : 0) - borderLeftWidth,
        width: childrenRect.width,
        height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;
    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
        const marginTop = parseFloat(styles.marginTop);
        const marginLeft = parseFloat(styles.marginLeft);
        if (isNumber(offsets.top)) {
            offsets.top -= borderTopWidth - marginTop;
        }
        if (isNumber(offsets.bottom)) {
            offsets.bottom -= borderTopWidth - marginTop;
        }
        if (isNumber(offsets.left)) {
            offsets.left -= borderLeftWidth - marginLeft;
        }
        if (isNumber(offsets.right)) {
            offsets.right -= borderLeftWidth - marginLeft;
        }
        // Attach marginTop and marginLeft because in some circumstances we may need them
        offsets.marginTop = marginTop;
        offsets.marginLeft = marginLeft;
    }
    if (isIE10 && !fixedPosition
        ? parent.contains(scrollParent)
        : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
        offsets = includeScroll(offsets, parent);
    }
    return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element, excludeScroll = false) {
    const html = element.ownerDocument.documentElement;
    const relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    const width = Math.max(html.clientWidth, window.innerWidth || 0);
    const height = Math.max(html.clientHeight, window.innerHeight || 0);
    const scrollTop = !excludeScroll ? getScroll(html) : 0;
    const scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
    const offset = {
        top: scrollTop - Number(relativeOffset === null || relativeOffset === void 0 ? void 0 : relativeOffset.top) + Number(relativeOffset === null || relativeOffset === void 0 ? void 0 : relativeOffset.marginTop),
        left: scrollLeft - Number(relativeOffset === null || relativeOffset === void 0 ? void 0 : relativeOffset.left) + Number(relativeOffset === null || relativeOffset === void 0 ? void 0 : relativeOffset.marginLeft),
        width,
        height
    };
    return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 */
function isFixed(element) {
    const nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
        return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
        return true;
    }
    return isFixed(getParentNode(element));
}

function getBoundaries(target, host, padding = 0, boundariesElement, fixedPosition = false) {
    // NOTE: 1 DOM access here
    let boundaries = { top: 0, left: 0 };
    const offsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host);
    // Handle viewport case
    if (boundariesElement === 'viewport') {
        boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    }
    else {
        // Handle other cases based on DOM element used as boundaries
        let boundariesNode;
        if (boundariesElement === 'scrollParent') {
            boundariesNode = getScrollParent(getParentNode(host));
            if (boundariesNode.nodeName === 'BODY') {
                boundariesNode = target.ownerDocument.documentElement;
            }
        }
        else if (boundariesElement === 'window') {
            boundariesNode = target.ownerDocument.documentElement;
        }
        else {
            boundariesNode = boundariesElement;
        }
        const offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
        // In case of HTML, we need a different computation
        if (offsets && boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
            const { height, width } = getWindowSizes(target.ownerDocument);
            if (isNumber(boundaries.top) && isNumber(offsets.top) && isNumber(offsets.marginTop)) {
                boundaries.top += offsets.top - offsets.marginTop;
            }
            if (isNumber(boundaries.top)) {
                boundaries.bottom = Number(height) + Number(offsets.top);
            }
            if (isNumber(boundaries.left) && isNumber(offsets.left) && isNumber(offsets.marginLeft)) {
                boundaries.left += offsets.left - offsets.marginLeft;
            }
            if (isNumber(boundaries.top)) {
                boundaries.right = Number(width) + Number(offsets.left);
            }
        }
        else if (offsets) {
            // for all the other DOM elements, this one is good
            boundaries = offsets;
        }
    }
    // Add paddings
    if (isNumber(boundaries.left)) {
        boundaries.left += padding;
    }
    if (isNumber(boundaries.top)) {
        boundaries.top += padding;
    }
    if (isNumber(boundaries.right)) {
        boundaries.right -= padding;
    }
    if (isNumber(boundaries.bottom)) {
        boundaries.bottom -= padding;
    }
    return boundaries;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 */
function getArea({ width, height }) {
    return width * height;
}
function computeAutoPlacement(placement, refRect, target, host, allowedPositions = ['top', 'bottom', 'right', 'left'], boundariesElement = 'viewport', padding = 0) {
    var _a, _b, _c, _d;
    if (placement.indexOf('auto') === -1) {
        return placement;
    }
    const boundaries = getBoundaries(target, host, padding, boundariesElement);
    const rects = {
        top: {
            width: (_a = boundaries.width) !== null && _a !== void 0 ? _a : 0,
            height: refRect.top && boundaries.top ? refRect.top - boundaries.top : 0
        },
        right: {
            width: boundaries.right && refRect.right ? boundaries.right - refRect.right : 0,
            height: (_b = boundaries.height) !== null && _b !== void 0 ? _b : 0
        },
        bottom: {
            width: (_c = boundaries.width) !== null && _c !== void 0 ? _c : 0,
            height: boundaries.bottom && refRect.bottom ? boundaries.bottom - refRect.bottom : 0
        },
        left: {
            width: refRect.left && boundaries.left ? refRect.left - boundaries.left : 0,
            height: (_d = boundaries.height) !== null && _d !== void 0 ? _d : 0
        }
    };
    const sortedAreas = Object.keys(rects)
        .map((key) => (Object.assign(Object.assign({ key }, rects[key]), { area: getArea(rects[key]) })))
        .sort((a, b) => b.area - a.area);
    let filteredAreas = sortedAreas.filter(({ width, height }) => {
        return width >= target.clientWidth
            && height >= target.clientHeight;
    });
    filteredAreas = filteredAreas.filter((position) => {
        return allowedPositions
            .some((allowedPosition) => {
            return allowedPosition === position.key;
        });
    });
    const computedPlacement = filteredAreas.length > 0
        ? filteredAreas[0].key
        : sortedAreas[0].key;
    const variation = placement.split(' ')[1];
    // for tooltip on auto position
    target.className = target.className.replace(/bs-tooltip-auto/g, `bs-tooltip-${computedPlacement}`);
    return computedPlacement + (variation ? `-${variation}` : '');
}

function getOffsets(data) {
    var _a, _b, _c, _d;
    return {
        width: data.offsets.target.width,
        height: data.offsets.target.height,
        left: Math.floor((_a = data.offsets.target.left) !== null && _a !== void 0 ? _a : 0),
        top: Math.round((_b = data.offsets.target.top) !== null && _b !== void 0 ? _b : 0),
        bottom: Math.round((_c = data.offsets.target.bottom) !== null && _c !== void 0 ? _c : 0),
        right: Math.floor((_d = data.offsets.target.right) !== null && _d !== void 0 ? _d : 0)
    };
}

/**
 * Get the opposite placement of the given one
 */
function getOppositePlacement(placement) {
    const hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, matched => hash[matched]);
}

/**
 * Get the opposite placement variation of the given one
 */
function getOppositeVariation(variation) {
    if (variation === 'right') {
        return 'left';
    }
    else if (variation === 'left') {
        return 'right';
    }
    return variation;
}

const parse = (value, def = 0) => value ? parseFloat(value) : def;
function getOuterSizes(element) {
    const window = element.ownerDocument.defaultView;
    const styles = window === null || window === void 0 ? void 0 : window.getComputedStyle(element);
    const x = parse(styles === null || styles === void 0 ? void 0 : styles.marginTop) + parse(styles === null || styles === void 0 ? void 0 : styles.marginBottom);
    const y = parse(styles === null || styles === void 0 ? void 0 : styles.marginLeft) + parse(styles === null || styles === void 0 ? void 0 : styles.marginRight);
    return {
        width: Number(element.offsetWidth) + y,
        height: Number(element.offsetHeight) + x
    };
}

/**
 * Get offsets to the reference element
 */
function getReferenceOffsets(target, host, fixedPosition) {
    const commonOffsetParent = fixedPosition
        ? getFixedPositionOffsetParent(target)
        : findCommonOffsetParent(target, host);
    return getOffsetRectRelativeToArbitraryNode(host, commonOffsetParent, fixedPosition);
}

/**
 * Get offsets to the target
 */
function getTargetOffsets(target, hostOffsets, position) {
    var _a, _b, _c;
    const placement = position.split(' ')[0];
    // Get target node sizes
    const targetRect = getOuterSizes(target);
    // Add position, width and height to our offsets object
    const targetOffsets = {
        width: targetRect.width,
        height: targetRect.height
    };
    // depending by the target placement we have to compute its offsets slightly differently
    const isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    const mainSide = isHoriz ? 'top' : 'left';
    const secondarySide = isHoriz ? 'left' : 'top';
    const measurement = isHoriz ? 'height' : 'width';
    const secondaryMeasurement = !isHoriz ? 'height' : 'width';
    targetOffsets[mainSide] =
        ((_a = hostOffsets[mainSide]) !== null && _a !== void 0 ? _a : 0) +
            hostOffsets[measurement] / 2 -
            targetRect[measurement] / 2;
    targetOffsets[secondarySide] = placement === secondarySide
        ? ((_b = hostOffsets[secondarySide]) !== null && _b !== void 0 ? _b : 0) - targetRect[secondaryMeasurement]
        : (_c = hostOffsets[getOppositePlacement(secondarySide)]) !== null && _c !== void 0 ? _c : 0;
    return targetOffsets;
}

function isModifierEnabled(options, modifierName) {
    var _a;
    return !!((_a = options.modifiers[modifierName]) === null || _a === void 0 ? void 0 : _a.enabled);
}

function updateContainerClass(data, renderer) {
    const target = data.instance.target;
    let containerClass = target.className;
    if (data.placementAuto) {
        containerClass = containerClass.replace(/bs-popover-auto/g, `bs-popover-${data.placement}`);
        containerClass = containerClass.replace(/bs-tooltip-auto/g, `bs-tooltip-${data.placement}`);
        containerClass = containerClass.replace(/\sauto/g, ` ${data.placement}`);
        if (containerClass.indexOf('popover') !== -1 && containerClass.indexOf('popover-auto') === -1) {
            containerClass += ' popover-auto';
        }
        if (containerClass.indexOf('tooltip') !== -1 && containerClass.indexOf('tooltip-auto') === -1) {
            containerClass += ' tooltip-auto';
        }
    }
    containerClass = containerClass.replace(/left|right|top|bottom/g, `${data.placement.split(' ')[0]}`);
    if (renderer) {
        renderer.setAttribute(target, 'class', containerClass);
        return;
    }
    target.className = containerClass;
}

function setStyles(element, styles, renderer) {
    if (!element || !styles) {
        return;
    }
    Object.keys(styles).forEach((prop) => {
        let unit = '';
        // add unit if the value is numeric and is one of the following
        if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 &&
            isNumeric(styles[prop])) {
            unit = 'px';
        }
        if (renderer) {
            renderer.setStyle(element, prop, `${String(styles[prop])}${unit}`);
            return;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        element.style[prop] = String(styles[prop]) + unit;
    });
}

function arrow(data) {
    var _a, _b, _c, _d, _e, _f;
    let targetOffsets = data.offsets.target;
    // if arrowElement is a string, suppose it's a CSS selector
    const arrowElement = data.instance.target.querySelector('.arrow');
    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
        return data;
    }
    const isVertical = ['left', 'right'].indexOf(data.placement.split(' ')[0]) !== -1;
    const len = isVertical ? 'height' : 'width';
    const sideCapitalized = isVertical ? 'Top' : 'Left';
    const side = sideCapitalized.toLowerCase();
    const altSide = isVertical ? 'left' : 'top';
    const opSide = isVertical ? 'bottom' : 'right';
    const arrowElementSize = getOuterSizes(arrowElement)[len];
    const placementVariation = data.placement.split(' ')[1];
    // top/left side
    if (((_a = data.offsets.host[opSide]) !== null && _a !== void 0 ? _a : 0) - arrowElementSize < ((_b = targetOffsets[side]) !== null && _b !== void 0 ? _b : 0)) {
        (targetOffsets)[side] -=
            ((_c = targetOffsets[side]) !== null && _c !== void 0 ? _c : 0) - (((_d = data.offsets.host[opSide]) !== null && _d !== void 0 ? _d : 0) - arrowElementSize);
    }
    // bottom/right side
    if (Number((data).offsets.host[side]) + Number(arrowElementSize) > ((_e = targetOffsets[opSide]) !== null && _e !== void 0 ? _e : 0)) {
        (targetOffsets)[side] +=
            Number((data).offsets.host[side]) + Number(arrowElementSize) - Number((targetOffsets)[opSide]);
    }
    targetOffsets = getClientRect(targetOffsets);
    // Compute the sideValue using the updated target offsets
    // take target margin in account because we don't have this info available
    const css = getStyleComputedProperty(data.instance.target);
    const targetMarginSide = parseFloat(css[`margin${sideCapitalized}`]);
    const targetBorderSide = parseFloat(css[`border${sideCapitalized}Width`]);
    // compute center of the target
    let center;
    if (!placementVariation) {
        center = Number((data).offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
    }
    else {
        const targetBorderRadius = parseFloat(css.borderRadius);
        const targetSideArrowOffset = Number(targetMarginSide + targetBorderSide + targetBorderRadius);
        center = side === placementVariation ?
            Number((data).offsets.host[side]) + targetSideArrowOffset :
            Number((data).offsets.host[side]) + Number(data.offsets.host[len] - targetSideArrowOffset);
    }
    let sideValue = center - ((_f = targetOffsets[side]) !== null && _f !== void 0 ? _f : 0) - targetMarginSide - targetBorderSide;
    // prevent arrowElement from being placed not contiguously to its target
    sideValue = Math.max(Math.min(targetOffsets[len] - arrowElementSize, sideValue), 0);
    data.offsets.arrow = {
        [side]: Math.round(sideValue),
        [altSide]: '' // make sure to unset any eventual altSide value from the DOM node
    };
    data.instance.arrow = arrowElement;
    return data;
}

function flip(data) {
    data.offsets.target = getClientRect(data.offsets.target);
    if (!isModifierEnabled(data.options, 'flip')) {
        data.offsets.target = Object.assign(Object.assign({}, data.offsets.target), getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        return data;
    }
    const boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    'viewport', false // positionFixed
    );
    let placement = data.placement.split(' ')[0];
    let variation = data.placement.split(' ')[1] || '';
    const offsetsHost = data.offsets.host;
    const target = data.instance.target;
    const host = data.instance.host;
    const adaptivePosition = computeAutoPlacement('auto', offsetsHost, target, host, data.options.allowedPositions);
    const flipOrder = [placement, adaptivePosition];
    flipOrder.forEach((step, index) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        if (placement !== step || flipOrder.length === index + 1) {
            return;
        }
        placement = data.placement.split(' ')[0];
        // using floor because the host offsets may contain decimals we are not going to consider here
        const overlapsRef = (placement === 'left' &&
            Math.floor((_a = data.offsets.target.right) !== null && _a !== void 0 ? _a : 0) > Math.floor((_b = data.offsets.host.left) !== null && _b !== void 0 ? _b : 0)) ||
            (placement === 'right' &&
                Math.floor((_c = data.offsets.target.left) !== null && _c !== void 0 ? _c : 0) < Math.floor((_d = data.offsets.host.right) !== null && _d !== void 0 ? _d : 0)) ||
            (placement === 'top' &&
                Math.floor((_e = data.offsets.target.bottom) !== null && _e !== void 0 ? _e : 0) > Math.floor((_f = data.offsets.host.top) !== null && _f !== void 0 ? _f : 0)) ||
            (placement === 'bottom' &&
                Math.floor((_g = data.offsets.target.top) !== null && _g !== void 0 ? _g : 0) < Math.floor((_h = data.offsets.host.bottom) !== null && _h !== void 0 ? _h : 0));
        const overflowsLeft = Math.floor((_j = data.offsets.target.left) !== null && _j !== void 0 ? _j : 0) < Math.floor((_k = boundaries.left) !== null && _k !== void 0 ? _k : 0);
        const overflowsRight = Math.floor((_l = data.offsets.target.right) !== null && _l !== void 0 ? _l : 0) > Math.floor((_m = boundaries.right) !== null && _m !== void 0 ? _m : 0);
        const overflowsTop = Math.floor((_o = data.offsets.target.top) !== null && _o !== void 0 ? _o : 0) < Math.floor((_p = boundaries.top) !== null && _p !== void 0 ? _p : 0);
        const overflowsBottom = Math.floor((_q = data.offsets.target.bottom) !== null && _q !== void 0 ? _q : 0) > Math.floor((_r = boundaries.bottom) !== null && _r !== void 0 ? _r : 0);
        const overflowsBoundaries = (placement === 'left' && overflowsLeft) ||
            (placement === 'right' && overflowsRight) ||
            (placement === 'top' && overflowsTop) ||
            (placement === 'bottom' && overflowsBottom);
        // flip the variation if required
        const isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        const flippedVariation = ((isVertical && variation === 'left' && overflowsLeft) ||
            (isVertical && variation === 'right' && overflowsRight) ||
            (!isVertical && variation === 'left' && overflowsTop) ||
            (!isVertical && variation === 'right' && overflowsBottom));
        if (overlapsRef || overflowsBoundaries || flippedVariation) {
            if (overlapsRef || overflowsBoundaries) {
                placement = flipOrder[index + 1];
            }
            if (flippedVariation) {
                variation = getOppositeVariation(variation);
            }
            data.placement = placement + (variation ? ` ${variation}` : '');
            data.offsets.target = Object.assign(Object.assign({}, data.offsets.target), getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        }
    });
    return data;
}

function initData(targetElement, hostElement, position, options) {
    if (!targetElement || !hostElement) {
        return;
    }
    const hostElPosition = getReferenceOffsets(targetElement, hostElement);
    if (!position.match(/^(auto)*\s*(left|right|top|bottom)*$/)
        && !position.match(/^(left|right|top|bottom)*(?: (left|right|top|bottom))?\s*(start|end)*$/)) {
        position = 'auto';
    }
    const placementAuto = !!position.match(/auto/g);
    // support old placements 'auto left|right|top|bottom'
    let placement = position.match(/auto\s(left|right|top|bottom)/)
        ? position.split(' ')[1] || 'auto'
        : position;
    // Normalize placements that have identical main placement and variation ("right right" => "right").
    const matches = placement.match(/^(left|right|top|bottom)* ?(?!\1)(left|right|top|bottom)?/);
    if (matches) {
        placement = matches[1] + (matches[2] ? ` ${matches[2]}` : '');
    }
    // "left right", "top bottom" etc. placements also considered incorrect.
    if (['left right', 'right left', 'top bottom', 'bottom top'].indexOf(placement) !== -1) {
        placement = 'auto';
    }
    const targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
    placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement, options ? options.allowedPositions : undefined);
    return {
        options: options || { modifiers: {} },
        instance: {
            target: targetElement,
            host: hostElement,
            arrow: void 0
        },
        offsets: {
            target: targetOffset,
            host: hostElPosition,
            arrow: void 0
        },
        positionFixed: false,
        placement,
        placementAuto
    };
}

function preventOverflow(data) {
    var _a;
    if (!isModifierEnabled(data.options, 'preventOverflow')) {
        return data;
    }
    // NOTE: DOM access here
    // resets the target Offsets's position so that the document size can be calculated excluding
    // the size of the targetOffsets element itself
    const transformProp = 'transform';
    const targetStyles = data.instance.target.style; // assignment to help minification
    const { top, left, [transformProp]: transform } = targetStyles;
    targetStyles.top = '';
    targetStyles.left = '';
    targetStyles[transformProp] = '';
    const boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    ((_a = data.options.modifiers.preventOverflow) === null || _a === void 0 ? void 0 : _a.boundariesElement) || 'scrollParent', false // positionFixed
    );
    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    targetStyles.top = top;
    targetStyles.left = left;
    targetStyles[transformProp] = transform;
    const order = ['left', 'right', 'top', 'bottom'];
    const check = {
        primary(placement) {
            var _a, _b, _c, _d;
            let value = data.offsets.target[placement];
            // options.escapeWithReference
            if (((_a = data.offsets.target[placement]) !== null && _a !== void 0 ? _a : 0) < ((_b = boundaries[placement]) !== null && _b !== void 0 ? _b : 0)) {
                value = Math.max((_c = data.offsets.target[placement]) !== null && _c !== void 0 ? _c : 0, (_d = boundaries[placement]) !== null && _d !== void 0 ? _d : 0);
            }
            return { [placement]: value };
        },
        secondary(placement) {
            var _a, _b, _c, _d;
            const mainSide = placement === 'right' ? 'left' : 'top';
            let value = data.offsets.target[mainSide];
            // escapeWithReference
            if (((_a = data.offsets.target[placement]) !== null && _a !== void 0 ? _a : 0) < ((_b = boundaries[placement]) !== null && _b !== void 0 ? _b : 0)) {
                value = Math.min((_c = data.offsets.target[mainSide]) !== null && _c !== void 0 ? _c : 0, ((_d = boundaries[placement]) !== null && _d !== void 0 ? _d : 0) -
                    (placement === 'right' ? data.offsets.target.width : data.offsets.target.height));
            }
            return { [mainSide]: value };
        }
    };
    order.forEach((placement) => {
        const side = ['left', 'top'].indexOf(placement) !== -1 ? check['primary'] : check['secondary'];
        data.offsets.target = Object.assign(Object.assign({}, data.offsets.target), side(placement));
    });
    return data;
}

function shift(data) {
    var _a;
    const placement = data.placement;
    const basePlacement = placement.split(' ')[0];
    const shiftVariation = placement.split(' ')[1];
    if (shiftVariation) {
        const { host, target } = data.offsets;
        const isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        const side = isVertical ? 'left' : 'top';
        const measurement = isVertical ? 'width' : 'height';
        const shiftOffsets = {
            start: { [side]: host[side] },
            end: {
                [side]: ((_a = host[side]) !== null && _a !== void 0 ? _a : 0) + host[measurement] - target[measurement]
            }
        };
        data.offsets.target = Object.assign(Object.assign({}, target), {
            [side]: (side === shiftVariation ? shiftOffsets.start[side] : shiftOffsets.end[side])
        });
    }
    return data;
}

class Positioning {
    position(hostElement, targetElement /*, round = true*/) {
        return this.offset(hostElement, targetElement /*, false*/);
    }
    offset(hostElement, targetElement /*, round = true*/) {
        return getReferenceOffsets(targetElement, hostElement);
    }
    positionElements(hostElement, targetElement, position, appendToBody, options) {
        const chainOfModifiers = [flip, shift, preventOverflow, arrow];
        const data = initData(targetElement, hostElement, position, options);
        if (!data) {
            return;
        }
        return chainOfModifiers.reduce((modifiedData, modifier) => modifier(modifiedData), data);
    }
}
const positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
    const data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
    if (!data) {
        return;
    }
    const offsets = getOffsets(data);
    setStyles(targetElement, {
        'will-change': 'transform',
        top: '0px',
        left: '0px',
        transform: `translate3d(${offsets.left}px, ${offsets.top}px, 0px)`
    }, renderer);
    if (data.instance.arrow) {
        setStyles(data.instance.arrow, data.offsets.arrow, renderer);
    }
    updateContainerClass(data, renderer);
}

class PositioningService {
    constructor(ngZone, rendererFactory, platformId) {
        this.update$$ = new Subject();
        this.positionElements = new Map();
        this.isDisabled = false;
        if (isPlatformBrowser(platformId)) {
            ngZone.runOutsideAngular(() => {
                this.triggerEvent$ = merge(fromEvent(window, 'scroll', { passive: true }), fromEvent(window, 'resize', { passive: true }), of(0, animationFrameScheduler), this.update$$);
                this.triggerEvent$.subscribe(() => {
                    if (this.isDisabled) {
                        return;
                    }
                    this.positionElements
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .forEach((positionElement) => {
                        positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, this.options, rendererFactory.createRenderer(null, null));
                    });
                });
            });
        }
    }
    position(options) {
        this.addPositionElement(options);
    }
    get event$() {
        return this.triggerEvent$;
    }
    disable() {
        this.isDisabled = true;
    }
    enable() {
        this.isDisabled = false;
    }
    addPositionElement(options) {
        this.positionElements.set(_getHtmlElement(options.element), options);
    }
    calcPosition() {
        this.update$$.next();
    }
    deletePositionElement(elRef) {
        this.positionElements.delete(_getHtmlElement(elRef));
    }
    setOptions(options) {
        this.options = options;
    }
}
PositioningService.ɵfac = function PositioningService_Factory(t) { return new (t || PositioningService)(ɵɵinject(NgZone), ɵɵinject(RendererFactory2), ɵɵinject(PLATFORM_ID)); };
PositioningService.ɵprov = ɵɵdefineInjectable({ token: PositioningService, factory: PositioningService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PositioningService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: NgZone }, { type: RendererFactory2 }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, null); })();
function _getHtmlElement(element) {
    // it means that we got a selector
    if (typeof element === 'string') {
        return document.querySelector(element);
    }
    if (element instanceof ElementRef) {
        return element.nativeElement;
    }
    return element !== null && element !== void 0 ? element : null;
}

/**
 * Generated bundle index. Do not edit.
 */

export { Positioning, PositioningService, positionElements };
//# sourceMappingURL=ngx-bootstrap-positioning.js.map