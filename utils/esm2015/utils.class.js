import { window } from './facade/browser';
export class Utils {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static reflow(element) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ((bs) => bs)(element.offsetHeight);
    }
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static getStyles(elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        let view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = window;
        }
        return view.getComputedStyle(elem);
    }
}
//# sourceMappingURL=utils.class.js.map