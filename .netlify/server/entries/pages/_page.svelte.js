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
  default: () => Page
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../chunks/index.js");
var import_axios = __toESM(require("axios"));
var import_axios_retry = __toESM(require("axios-retry"));
const Welcome = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="${"font-serif font-bold text-3xl text-green-400 underline"}">Svelte boilerplate
</h1>`;
});
const MAX_RETIRES = 3;
(0, import_axios_retry.default)(import_axios.default, {
  retries: MAX_RETIRES,
  retryDelay: (retryCount) => retryCount * 1e3
});
const PublicIP = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `<div id="${"public-ip"}"><h2 class="${"text-xl font-bold text-blue-400"}">Your public IP Adddress</h2>
  ${`<span>Loading...</span>`}</div>`;
});
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"container mx-auto"}">${(0, import_chunks.v)(Welcome, "Welcome").$$render($$result, {}, {}, {})}

  <h2 class="${"text-xl font-bold text-blue-400"}">Features</h2>
  <ol class="${"list-decimal"}"><li>Tyescript</li>
    <li>CSS: TailwindCSS</li>
    <li><h3>Testing</h3>
      <ul class="${"list-disc"}"><li>Components: testing-library</li>
        <li>E2E: playwright</li></ul></li>
    <li>Lint</li></ol>

  <hr>
  ${(0, import_chunks.v)(PublicIP, "PublicIp").$$render($$result, {}, {}, {})}</section>`;
});
