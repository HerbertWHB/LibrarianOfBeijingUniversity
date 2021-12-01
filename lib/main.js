"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

var _vue = _interopRequireWildcard(require("vue"));

var _quasar = require("quasar");

var _zhCN = _interopRequireDefault(require("quasar/lang/zh-CN"));

require("@quasar/extras/material-icons/material-icons.css");

require("quasar/src/css/index.sass");

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router/router.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// FILE: main.js
//Import language (actually i dont know what will happened)
// Import icon libraries
// Import Quasar css
// Assumes your root component is App.vue
// and placed in same folder as main.js
//导入vueRouter
const myApp = (0, _vue.createApp)(_App.default);
myApp.use(_quasar.Quasar, {
  plugins: {},
  // import Quasar plugins and add here
  router: _router.default,
  lang: _zhCN.default
});
myApp.mount('#app');