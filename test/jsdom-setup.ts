import { JSDOM } from "jsdom";

const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = jsdom;

function copyProps(src: any, target: any) {
  const props = Object.getOwnPropertyNames(src)
    .filter((prop) => typeof target[prop] === "undefined")
    .reduce(
      (result, prop) => ({
        ...result,
        [prop]: Object.getOwnPropertyDescriptor(src, prop)
      }),
      {}
    );
  Object.defineProperties(target, props);
}

(global as any).window = window;
(global as any).document = window.document;
(global as any).navigator = {
  userAgent: "node.js"
};
(global as any).requestAnimationFrame = (callback: any) => {
  return setTimeout(callback, 0);
};
(global as any).cancelAnimationFrame = (id: any) => {
  clearTimeout(id);
};
copyProps(window, global);
