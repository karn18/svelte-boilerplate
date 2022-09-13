var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "app",
  assets: /* @__PURE__ */ new Set([".DS_Store", "favicon.png", "fonts/IBMPlexSansThai-Bold.ttf", "fonts/IBMPlexSansThai-Bold.woff2", "fonts/IBMPlexSansThai-Regular.ttf", "fonts/IBMPlexSansThai-Regular.woff2", "fonts/IBMPlexSansThaiLooped-Bold.ttf", "fonts/IBMPlexSansThaiLooped-Bold.woff2", "fonts/IBMPlexSansThaiLooped-Regular.ttf", "fonts/IBMPlexSansThaiLooped-Regular.woff2"]),
  mimeTypes: { ".png": "image/png", ".ttf": "font/ttf", ".woff2": "font/woff2" },
  _: {
    entry: { "file": "app/immutable/start-1d8cd807.js", "imports": ["app/immutable/start-1d8cd807.js", "app/immutable/chunks/index-c221238f.js", "app/immutable/chunks/singletons-aeacf5bb.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js")))
    ],
    routes: [
      {
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 2 },
        endpoint: null
      },
      {
        id: "about",
        pattern: /^\/about\/?$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 3 },
        endpoint: null
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
