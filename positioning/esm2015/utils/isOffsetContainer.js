import { getOffsetParent } from './getOffsetParent';
// todo: valorkin fix
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isOffsetContainer(element) {
    const { nodeName } = element;
    if (nodeName === 'BODY') {
        return false;
    }
    return (nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element);
}
//# sourceMappingURL=isOffsetContainer.js.map