import { JSDOM } from "jsdom";
const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = jsdom;
function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
        .filter((prop) => typeof target[prop] === "undefined")
        .reduce((result, prop) => (Object.assign({}, result, { [prop]: Object.getOwnPropertyDescriptor(src, prop) })), {});
    Object.defineProperties(target, props);
}
global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: "node.js"
};
global.requestAnimationFrame = (callback) => {
    return setTimeout(callback, 0);
};
global.cancelAnimationFrame = (id) => {
    clearTimeout(id);
};
copyProps(window, global);
//# sourceMappingURL=jsdom-setup.js.map