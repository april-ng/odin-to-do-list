/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* ============================================================\n   CSS VARIABLES\n   ============================================================ */\n:root {\n  /* Divider */\n  --divider: rgba(145, 158, 171, 0.2);\n\n  /* Text */\n  --text-primary: #1e252d;\n  --text-secondary: #667380;\n\n  /* Action */\n  --action-active: #637381;\n  --action-hovered-bg: rgba(99, 115, 129, 0.08);\n  --action-disabled-bgcolor: rgba(145, 158, 171, 0.2);\n  --action-disabled: rgba(145, 158, 171, 0.8);\n\n  /* Primary */\n  --primary-main: #3b8de7;\n\n  /* Success */\n  --success-main: #5ec16a;\n  --success-hovered-bg: rgba(94, 193, 106, 0.08);\n\n  /* Chip */\n  --chip-default-bg: rgba(145, 158, 171, 0.08);\n  --chip-low-bg: rgba(142, 51, 255, 0.16);\n  --chip-low-text: #5119b7;\n  --chip-medium-bg: rgba(255, 171, 0, 0.16);\n  --chip-medium-text: #b76e00;\n  --chip-high-bg: rgba(255, 86, 48, 0.16);\n  --chip-high-text: #b71d18;\n\n  /* Global inherit (sidebar) */\n  --global-inherit-hovered-bg: #5119b7;\n  --global-inherit-active-bg: #1c252e;\n  --global-inherit-default: #ffffff;\n\n  /* Error */\n  --error-main: #ff5630;\n  --error-dark: #b71d18;\n\n  /* Modal backdrop */\n  --backdrop: rgba(0, 0, 0, 0.64);\n\n  /* Layout */\n  --sidebar-width: 240px;\n  --navbar-height: 64px;\n}\n\n/* ============================================================\n   RESET & BASE\n   ============================================================ */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Inter\", sans-serif;\n  font-size: 14px;\n  color: var(--text-primary);\n  background-color: #f4f6f8;\n  height: 100vh;\n  overflow: hidden;\n}\n\n/* ============================================================\n   LAYOUT\n   ============================================================ */\n#app {\n  display: flex;\n  flex-direction: row;\n  height: 100vh;\n}\n\n#sidebar {\n  width: var(--sidebar-width);\n  min-width: var(--sidebar-width);\n  height: 100vh;\n  background-color: var(--global-inherit-active-bg);\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n}\n\n#right-panel {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  overflow: hidden;\n}\n\n#main-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 40px 48px;\n  background-color: #f4f6f8;\n}\n\n/* ============================================================\n   NAVBAR\n   ============================================================ */\n#navbar {\n  height: var(--navbar-height);\n  min-height: var(--navbar-height);\n  background-color: #fff;\n  border-bottom: 1px solid var(--divider);\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0 24px;\n}\n\n.navbar-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.user-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n\n.user-name {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n\n/* ============================================================\n   SIDEBAR\n   ============================================================ */\n.sidebar-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 20px 16px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  margin-bottom: 8px;\n}\n\n.app-logo {\n  width: 32px;\n  height: 32px;\n  background-color: var(--primary-main);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n\n.company-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--global-inherit-default);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.sidebar-section-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.4);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  padding: 8px 16px 4px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.sidebar-section-label button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.4);\n  display: flex;\n  align-items: center;\n  padding: 2px;\n  border-radius: 4px;\n  transition:\n    background-color 0.15s,\n    color 0.15s;\n}\n\n.sidebar-section-label button:hover {\n  background-color: var(--action-hovered-bg);\n  color: var(--global-inherit-default);\n}\n\n/* ============================================================\n   NAV ITEM\n   ============================================================ */\n.nav-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 6px 8px 6px 16px;\n  border-radius: 8px;\n  margin: 1px 8px;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.7);\n  transition:\n    background-color 0.15s,\n    color 0.15s;\n  user-select: none;\n}\n\n.nav-item:hover {\n  background-color: var(--action-hovered-bg);\n  color: var(--global-inherit-default);\n}\n\n.nav-item:hover .nav-item-actions {\n  opacity: 1;\n}\n\n.nav-item.active {\n  background-color: var(--action-hovered-bg);\n  color: var(--global-inherit-default);\n}\n\n.nav-item-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  min-width: 0;\n}\n\n.nav-item-left .nav-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--primary-main);\n  flex-shrink: 0;\n}\n\n.nav-item-left span {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.nav-item-actions {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  opacity: 0;\n  transition: opacity 0.15s;\n  flex-shrink: 0;\n}\n\n.nav-item-actions button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.5);\n  display: flex;\n  align-items: center;\n  padding: 3px;\n  border-radius: 4px;\n  transition:\n    background-color 0.15s,\n    color 0.15s;\n}\n\n.nav-item-actions button:hover {\n  background-color: var(--action-hovered-bg);\n  color: var(--global-inherit-default);\n}\n\n.nav-item-actions .material-icons {\n  font-size: 16px;\n}\n\n/* ============================================================\n   TASK CARD\n   ============================================================ */\n.task-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 16px;\n  background-color: #fff;\n  border-bottom: 1px solid var(--divider);\n  transition: background-color 0.15s;\n}\n\n.task-card:first-child {\n  border-radius: 8px 8px 0 0;\n}\n\n.task-card:last-of-type {\n  border-radius: 0 0 8px 8px;\n  border-bottom: none;\n}\n\n.task-card:only-of-type {\n  border-radius: 8px;\n  border-bottom: none;\n}\n\n.task-card:hover {\n  background-color: #fafafa;\n}\n\n.task-card:hover .task-actions {\n  opacity: 1;\n}\n\n.task-complete-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  margin-top: 1px;\n  color: var(--action-active);\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  transition: color 0.15s;\n  border-radius: 50%;\n}\n\n.task-complete-btn:hover {\n  color: var(--success-main);\n  background-color: var(--success-hovered-bg);\n}\n\n.task-complete-btn.completed {\n  color: var(--success-main);\n}\n\n.task-body {\n  flex: 1;\n  min-width: 0;\n}\n\n.task-name {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--text-primary);\n  margin-bottom: 2px;\n}\n\n.task-description {\n  font-size: 13px;\n  color: var(--text-secondary);\n  margin-bottom: 8px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.task-meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.task-date {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n\n.task-date .material-icons {\n  font-size: 14px;\n}\n\n/* ============================================================\n   CHIP\n   ============================================================ */\n.chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 2px 8px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 600;\n  background-color: var(--chip-default-bg);\n  color: var(--text-secondary);\n}\n\n.chip.low {\n  background-color: var(--chip-low-bg);\n  color: var(--chip-low-text);\n}\n\n.chip.medium {\n  background-color: var(--chip-medium-bg);\n  color: var(--chip-medium-text);\n}\n\n.chip.high {\n  background-color: var(--chip-high-bg);\n  color: var(--chip-high-text);\n}\n\n/* ============================================================\n   TASK ACTIONS\n   ============================================================ */\n.task-actions {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  opacity: 0;\n  transition: opacity 0.15s;\n  flex-shrink: 0;\n}\n\n.task-actions button {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--action-active);\n  display: flex;\n  align-items: center;\n  padding: 4px;\n  border-radius: 6px;\n  transition:\n    background-color 0.15s,\n    color 0.15s;\n}\n\n.task-actions button:hover {\n  background-color: var(--action-hovered-bg);\n}\n\n.task-actions button.delete:hover {\n  color: var(--error-main);\n}\n\n.task-actions .material-icons {\n  font-size: 18px;\n}\n\n/* ============================================================\n   ADD TASK BUTTON\n   ============================================================ */\n.add-task-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n  padding: 8px 12px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-secondary);\n  font-size: 14px;\n  font-family: \"Inter\", sans-serif;\n  border-radius: 8px;\n  transition:\n    background-color 0.15s,\n    color 0.15s;\n}\n\n.add-task-btn:hover {\n  background-color: var(--action-hovered-bg);\n  color: var(--text-primary);\n}\n\n.add-task-btn .material-icons {\n  font-size: 20px;\n}\n\n/* ============================================================\n   MODAL\n   ============================================================ */\n#modal-overlay {\n  position: fixed;\n  inset: 0;\n  background-color: var(--backdrop);\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#modal-overlay.hidden {\n  display: none;\n}\n\n.modal {\n  background-color: #fff;\n  border-radius: 16px;\n  padding: 32px;\n  width: 480px;\n  max-width: calc(100vw - 32px);\n  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.2);\n}\n\n.modal-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 24px;\n}\n\n/* ============================================================\n   FORM ELEMENTS\n   ============================================================ */\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 16px;\n}\n\n.form-group label {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--text-secondary);\n}\n\n.form-group input,\n.form-group textarea {\n  font-family: \"Inter\", sans-serif;\n  font-size: 14px;\n  color: var(--text-primary);\n  background-color: #fff;\n  border: 1px solid var(--divider);\n  border-radius: 8px;\n  padding: 10px 12px;\n  outline: none;\n  transition: border-color 0.15s;\n  width: 100%;\n}\n\n.form-group input:focus,\n.form-group textarea:focus {\n  border-color: var(--primary-main);\n}\n\n.form-group textarea {\n  resize: vertical;\n  min-height: 80px;\n}\n\n.radio-group {\n  display: flex;\n  gap: 12px;\n}\n\n.radio-option {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.radio-option input[type=\"radio\"] {\n  accent-color: var(--primary-main);\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n\n.radio-option.low {\n  color: var(--chip-low-text);\n}\n.radio-option.medium {\n  color: var(--chip-medium-text);\n}\n.radio-option.high {\n  color: var(--chip-high-text);\n}\n\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 24px;\n}\n\n/* ============================================================\n   BUTTONS\n   ============================================================ */\n.btn {\n  font-family: \"Inter\", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 8px 20px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  transition:\n    opacity 0.15s,\n    background-color 0.15s;\n}\n\n.btn:disabled {\n  background-color: var(--action-disabled-bgcolor);\n  color: var(--action-disabled);\n  cursor: not-allowed;\n}\n\n.btn-primary {\n  background-color: var(--primary-main);\n  color: #fff;\n}\n\n.btn-primary:hover:not(:disabled) {\n  opacity: 0.88;\n}\n\n.btn-secondary {\n  background-color: var(--action-hovered-bg);\n  color: var(--text-primary);\n}\n\n.btn-secondary:hover:not(:disabled) {\n  background-color: rgba(99, 115, 129, 0.16);\n}\n\n.btn-danger {\n  background-color: var(--chip-high-bg);\n  color: var(--error-dark);\n}\n\n.btn-danger:hover:not(:disabled) {\n  background-color: rgba(255, 86, 48, 0.24);\n}\n\n/* ============================================================\n   EMPTY STATE\n   ============================================================ */\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 64px 24px;\n  color: var(--text-secondary);\n  text-align: center;\n  gap: 8px;\n}\n\n.empty-state .material-icons {\n  font-size: 48px;\n  opacity: 0.3;\n  margin-bottom: 8px;\n}\n\n.empty-state p {\n  font-size: 14px;\n}\n\n/* ============================================================\n   LIST TITLE\n   ============================================================ */\n.list-title {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 24px;\n}\n\n/* ============================================================\n   SCROLLBAR\n   ============================================================ */\n::-webkit-scrollbar {\n  width: 6px;\n}\n\n::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: var(--divider);\n  border-radius: 3px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

"use strict";
eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

"use strict";
eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

"use strict";
eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

"use strict";
eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

"use strict";
eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/components/Sidebar.js"
/*!***********************************!*\
  !*** ./src/components/Sidebar.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _models_AppState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/AppState.js */ \"./src/models/AppState.js\");\n\n\n// ─── Helper: create a material icon ──────────────────────\nfunction createIcon(name) {\n  const icon = document.createElement(\"span\");\n  icon.classList.add(\"material-icons\");\n  icon.textContent = name;\n  return icon;\n}\n\n// ─── Render a single nav item ─────────────────────────────\nfunction createNavItem(\n  list,\n  activeListId,\n  onListSelect,\n  onEditList,\n  onDeleteList,\n) {\n  const item = document.createElement(\"div\");\n  item.classList.add(\"nav-item\");\n  if (list.id === activeListId) item.classList.add(\"active\");\n\n  // Left side: dot + name\n  const left = document.createElement(\"div\");\n  left.classList.add(\"nav-item-left\");\n\n  const dot = document.createElement(\"span\");\n  dot.classList.add(\"nav-dot\");\n\n  const name = document.createElement(\"span\");\n  name.textContent = list.name;\n\n  left.appendChild(dot);\n  left.appendChild(name);\n\n  // Right side: edit + delete buttons\n  const actions = document.createElement(\"div\");\n  actions.classList.add(\"nav-item-actions\");\n\n  const editBtn = document.createElement(\"button\");\n  editBtn.setAttribute(\"aria-label\", \"Edit list\");\n  editBtn.appendChild(createIcon(\"edit\"));\n\n  const deleteBtn = document.createElement(\"button\");\n  deleteBtn.setAttribute(\"aria-label\", \"Delete list\");\n  deleteBtn.appendChild(createIcon(\"delete\"));\n\n  editBtn.addEventListener(\"click\", (e) => {\n    e.stopPropagation();\n    onEditList(list);\n  });\n\n  deleteBtn.addEventListener(\"click\", (e) => {\n    e.stopPropagation();\n    onDeleteList(list.id);\n  });\n\n  actions.appendChild(editBtn);\n  actions.appendChild(deleteBtn);\n\n  item.addEventListener(\"click\", () => onListSelect(list.id));\n\n  item.appendChild(left);\n  item.appendChild(actions);\n\n  return item;\n}\n\n// ─── Main render function ─────────────────────────────────\nfunction render(\n  activeListId,\n  onListSelect,\n  onAddList,\n  onEditList,\n  onDeleteList,\n) {\n  const sidebar = document.getElementById(\"sidebar\");\n  sidebar.innerHTML = \"\";\n\n  // Section header\n  const sectionLabel = document.createElement(\"div\");\n  sectionLabel.classList.add(\"sidebar-section-label\");\n\n  const labelText = document.createElement(\"span\");\n  labelText.textContent = \"LIST\";\n\n  const addBtn = document.createElement(\"button\");\n  addBtn.setAttribute(\"aria-label\", \"Add list\");\n  addBtn.appendChild(createIcon(\"add\"));\n  addBtn.addEventListener(\"click\", onAddList);\n\n  sectionLabel.appendChild(labelText);\n  sectionLabel.appendChild(addBtn);\n  sidebar.appendChild(sectionLabel);\n\n  // Nav items\n  _models_AppState_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].lists.forEach((list) => {\n    const item = createNavItem(\n      list,\n      activeListId,\n      onListSelect,\n      onEditList,\n      onDeleteList,\n    );\n    sidebar.appendChild(item);\n  });\n}\n\n\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/components/Sidebar.js?\n}");

/***/ },

/***/ "./src/defaultData.js"
/*!****************************!*\
  !*** ./src/defaultData.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultLists: () => (/* binding */ defaultLists),\n/* harmony export */   defaultTasks: () => (/* binding */ defaultTasks)\n/* harmony export */ });\nconst defaultLists = [\n  { id: \"list-work\", name: \"Work\" },\n  { id: \"list-personal\", name: \"Personal\" },\n  { id: \"list-travel\", name: \"Travel\" },\n];\n\nconst defaultTasks = [\n  // Work\n  {\n    id: \"task-1\",\n    name: \"Prepare Q3 report\",\n    description: \"Review last quarter metrics and compile slides\",\n    dueDate: \"2026-06-03\",\n    priority: \"high\",\n    listId: \"list-work\",\n    completed: false,\n  },\n  {\n    id: \"task-2\",\n    name: \"Schedule team standup\",\n    description: \"Set up recurring 9am meeting on calendar\",\n    dueDate: \"2026-05-23\",\n    priority: \"medium\",\n    listId: \"list-work\",\n    completed: false,\n  },\n  {\n    id: \"task-3\",\n    name: \"Reply to client proposal\",\n    description: \"Send feedback on the revised contract draft\",\n    dueDate: \"2026-05-21\",\n    priority: \"high\",\n    listId: \"list-work\",\n    completed: false,\n  },\n\n  // Personal\n  {\n    id: \"task-4\",\n    name: \"Book dentist appointment\",\n    description: \"Annual checkup, call Dr. Park's office\",\n    dueDate: \"2026-06-15\",\n    priority: \"low\",\n    listId: \"list-personal\",\n    completed: false,\n  },\n  {\n    id: \"task-5\",\n    name: \"Renew gym membership\",\n    description: \"Monthly plan expires at end of May\",\n    dueDate: \"2026-05-31\",\n    priority: \"medium\",\n    listId: \"list-personal\",\n    completed: false,\n  },\n  {\n    id: \"task-6\",\n    name: \"Buy birthday gift for mom\",\n    description: \"She likes candles and cookbooks\",\n    dueDate: \"2026-06-08\",\n    priority: \"high\",\n    listId: \"list-personal\",\n    completed: false,\n  },\n\n  // Travel\n  {\n    id: \"task-7\",\n    name: \"Research Lisbon hotels\",\n    description: \"Look for places near Alfama, budget ~$150/night\",\n    dueDate: \"2026-06-20\",\n    priority: \"low\",\n    listId: \"list-travel\",\n    completed: false,\n  },\n  {\n    id: \"task-8\",\n    name: \"Check visa requirements\",\n    description: \"Confirm entry rules for Portugal\",\n    dueDate: \"2026-06-01\",\n    priority: \"medium\",\n    listId: \"list-travel\",\n    completed: false,\n  },\n  {\n    id: \"task-9\",\n    name: \"Book airport transfer\",\n    description: \"Flight lands at 11pm, need pickup\",\n    dueDate: \"2026-06-18\",\n    priority: \"low\",\n    listId: \"list-travel\",\n    completed: false,\n  },\n];\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/defaultData.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _models_AppState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/AppState.js */ \"./src/models/AppState.js\");\n/* harmony import */ var _components_Sidebar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Sidebar.js */ \"./src/components/Sidebar.js\");\n\n\n\n\n// keep track of which list is currently selected\nlet activeListId = null;\n\nfunction renderSidebar() {\n  _components_Sidebar_js__WEBPACK_IMPORTED_MODULE_2__.render(\n    activeListId,\n    // WHEN a list is clicked\n    (listId) => {\n      activeListId = listId;\n      renderSidebar();\n    },\n    // WHEN \"+\" is clicked\n    () => console.log(\"add list clicked\"),\n    // WHEN edit is clicked\n    (list) => console.log(\"edit list clicked\", list),\n    // WHEN delete is clicked\n    (listId) => console.log(\"delete list clicked\", listId),\n  );\n}\n\n// Boot the app\n_models_AppState_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\nrenderSidebar();\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/index.js?\n}");

/***/ },

/***/ "./src/models/AppState.js"
/*!********************************!*\
  !*** ./src/models/AppState.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.js */ \"./src/models/List.js\");\n/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_List_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.js */ \"./src/models/Task.js\");\n/* harmony import */ var _defaultData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultData.js */ \"./src/defaultData.js\");\n\n\n\n\nconst AppState = {\n  lists: [],\n  tasks: [],\n\n  // ─── Boot ─────────────────────────────────────────────\n  init() {\n    const saved = localStorage.getItem(\"appState\");\n    if (saved) {\n      const parsed = JSON.parse(saved);\n      this.lists = parsed.lists.map((_List_js__WEBPACK_IMPORTED_MODULE_0___default().fromJSON));\n      this.tasks = parsed.tasks.map(_Task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fromJSON);\n    } else {\n      this.lists = _defaultData_js__WEBPACK_IMPORTED_MODULE_2__.defaultLists.map((_List_js__WEBPACK_IMPORTED_MODULE_0___default().fromJSON));\n      this.tasks = _defaultData_js__WEBPACK_IMPORTED_MODULE_2__.defaultTasks.map(_Task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fromJSON);\n      this.save();\n    }\n  },\n\n  // ─── Persist ──────────────────────────────────────────\n  save() {\n    localStorage.setItem(\n      \"appState\",\n      JSON.stringify({\n        lists: this.lists,\n        tasks: this.tasks,\n      }),\n    );\n  },\n\n  // ─── List operations ──────────────────────────────────\n  addList(name) {\n    const list = new (_List_js__WEBPACK_IMPORTED_MODULE_0___default())({ name });\n    this.lists.push(list);\n    this.save();\n    return list;\n  },\n\n  updateList(id, name) {\n    const list = this.lists.find((l) => l.id === id);\n    if (list) {\n      list.name = name;\n      this.save();\n    }\n  },\n\n  deleteList(id) {\n    this.lists = this.lists.filter((l) => l.id !== id);\n    this.tasks = this.tasks.filter((t) => t.listId !== id);\n    this.save();\n  },\n\n  // ─── Task operations ──────────────────────────────────\n  addTask(data) {\n    const task = new _Task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](data);\n    this.tasks.push(task);\n    this.save();\n    return task;\n  },\n\n  updateTask(id, changes) {\n    const task = this.tasks.find((t) => t.id === id);\n    if (task) {\n      Object.assign(task, changes);\n      this.save();\n    }\n  },\n\n  deleteTask(id) {\n    this.tasks = this.tasks.filter((t) => t.id !== id);\n    this.save();\n  },\n\n  // ─── Helpers ──────────────────────────────────────────\n  getTasksByList(listId) {\n    return this.tasks.filter((t) => t.listId === listId);\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppState);\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/models/AppState.js?\n}");

/***/ },

/***/ "./src/models/List.js"
/*!****************************!*\
  !*** ./src/models/List.js ***!
  \****************************/
() {

eval("{\n\n//# sourceURL=webpack://odin-to-do-list/./src/models/List.js?\n}");

/***/ },

/***/ "./src/models/Task.js"
/*!****************************!*\
  !*** ./src/models/Task.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor({\n    id,\n    name,\n    description = \"\",\n    dueDate = \"\",\n    priority = \"low\",\n    listId,\n    completed = false,\n  }) {\n    this.id = id ?? crypto.randomUUID();\n    this.name = name;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.listId = listId;\n    this.completed = completed;\n  }\n\n  static fromJSON(data) {\n    return new Task(data);\n  }\n}\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/models/Task.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;