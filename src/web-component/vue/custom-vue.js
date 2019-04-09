'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/__webpack_require__.r = function (exports) {
    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
    /******/Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/__webpack_require__.t = function (value, mode) {
    /******/if (mode & 1) value = __webpack_require__(value);
    /******/if (mode & 8) return value;
    /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && value.__esModule) return value;
    /******/var ns = Object.create(null);
    /******/__webpack_require__.r(ns);
    /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    } /******/return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = "5a74");
  /******/
})(
/************************************************************************/
/******/{

  /***/"0066":
  /***/function _(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag

    // load the styles
    var content = __webpack_require__("b665");
    if (typeof content === 'string') content = [[module.i, content, '']];
    if (content.locals) module.exports = content.locals;
    // add CSS to Shadow Root
    var add = __webpack_require__("35d6").default;
    module.exports.__inject__ = function (shadowRoot) {
      add("d0b3cb18", content, shadowRoot);
    };

    /***/
  },

  /***/"1996":
  /***/function _(module, exports, __webpack_require__) {

    // style-loader: Adds some css to the DOM by adding a <style> tag

    // load the styles
    var content = __webpack_require__("4360");
    if (typeof content === 'string') content = [[module.i, content, '']];
    if (content.locals) module.exports = content.locals;
    // add CSS to Shadow Root
    var add = __webpack_require__("35d6").default;
    module.exports.__inject__ = function (shadowRoot) {
      add("0ae69321", content, shadowRoot);
    };

    /***/
  },

  /***/"2350":
  /***/function _(module, exports) {

    /*
    	MIT License http://www.opensource.org/licenses/mit-license.php
    	Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    module.exports = function (useSourceMap) {
      var list = [];

      // return the list of modules as css string
      list.toString = function toString() {
        return this.map(function (item) {
          var content = cssWithMappingToString(item, useSourceMap);
          if (item[2]) {
            return "@media " + item[2] + "{" + content + "}";
          } else {
            return content;
          }
        }).join("");
      };

      // import a list of modules into the list
      list.i = function (modules, mediaQuery) {
        if (typeof modules === "string") modules = [[null, modules, ""]];
        var alreadyImportedModules = {};
        for (var i = 0; i < this.length; i++) {
          var id = this[i][0];
          if (typeof id === "number") alreadyImportedModules[id] = true;
        }
        for (i = 0; i < modules.length; i++) {
          var item = modules[i];
          // skip already imported module
          // this implementation is not 100% perfect for weird media query combinations
          //  when a module is imported multiple times with different media queries.
          //  I hope this will never occur (Hey this way we have smaller bundles)
          if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
            if (mediaQuery && !item[2]) {
              item[2] = mediaQuery;
            } else if (mediaQuery) {
              item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
            }
            list.push(item);
          }
        }
      };
      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      var content = item[1] || '';
      var cssMapping = item[3];
      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
          return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
        });

        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
      }

      return [content].join('\n');
    }

    // Adapted from convert-source-map (MIT)
    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

      return '/*# ' + data + ' */';
    }

    /***/
  },

  /***/"35d6":
  /***/function d6(module, __webpack_exports__, __webpack_require__) {

    "use strict";

    __webpack_require__.r(__webpack_exports__);

    // CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
    /**
     * Translates the list format produced by css-loader into something
     * easier to manipulate.
     */
    function listToStyles(parentId, list) {
      var styles = [];
      var newStyles = {};
      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          id: parentId + ':' + i,
          css: css,
          media: media,
          sourceMap: sourceMap
        };
        if (!newStyles[id]) {
          styles.push(newStyles[id] = { id: id, parts: [part] });
        } else {
          newStyles[id].parts.push(part);
        }
      }
      return styles;
    }

    // CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js
    /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "default", function () {
      return addStylesToShadowDOM;
    });

    function addStylesToShadowDOM(parentId, list, shadowRoot) {
      var styles = listToStyles(parentId, list);
      addStyles(styles, shadowRoot);
    }

    /*
    type StyleObject = {
      id: number;
      parts: Array<StyleObjectPart>
    }
    
    type StyleObjectPart = {
      css: string;
      media: string;
      sourceMap: ?string
    }
    */

    function addStyles(styles /* Array<StyleObject> */, shadowRoot) {
      var injectedStyles = shadowRoot._injectedStyles || (shadowRoot._injectedStyles = {});
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var style = injectedStyles[item.id];
        if (!style) {
          for (var j = 0; j < item.parts.length; j++) {
            addStyle(item.parts[j], shadowRoot);
          }
          injectedStyles[item.id] = true;
        }
      }
    }

    function createStyleElement(shadowRoot) {
      var styleElement = document.createElement('style');
      styleElement.type = 'text/css';
      shadowRoot.appendChild(styleElement);
      return styleElement;
    }

    function addStyle(obj /* StyleObjectPart */, shadowRoot) {
      var styleElement = createStyleElement(shadowRoot);
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        styleElement.setAttribute('media', media);
      }

      if (sourceMap) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
        // http://stackoverflow.com/a/26603875
        css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
      }

      if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText = css;
      } else {
        while (styleElement.firstChild) {
          styleElement.removeChild(styleElement.firstChild);
        }
        styleElement.appendChild(document.createTextNode(css));
      }
    }

    /***/
  },

  /***/"4360":
  /***/function _(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__("2350")(false);
    // imports


    // module
    exports.push([module.i, "#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px}", ""]);

    // exports


    /***/
  },

  /***/"547d":
  /***/function d(module, __webpack_exports__, __webpack_require__) {

    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1996");
    /* harmony import */var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__) {
      if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    } /* harmony default export */__webpack_exports__["default"] = _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0___default.a;

    /***/
  },

  /***/"5a74":
  /***/function a74(module, __webpack_exports__, __webpack_require__) {

    "use strict";

    __webpack_require__.r(__webpack_exports__);

    // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
    // This file is imported into lib/wc client bundles.

    if (typeof window !== 'undefined') {
      var i;
      if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
        __webpack_require__.p = i[1]; // eslint-disable-line
      }
    }

    // Indicate to webpack that this file can be concatenated
    /* harmony default export */var setPublicPath = null;

    // EXTERNAL MODULE: external "Vue"
    var external_Vue_ = __webpack_require__("8bbf");
    var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

    // CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
    var camelizeRE = /-(\w)/g;
    var camelize = function camelize(str) {
      return str.replace(camelizeRE, function (_, c) {
        return c ? c.toUpperCase() : '';
      });
    };

    var hyphenateRE = /\B([A-Z])/g;
    var hyphenate = function hyphenate(str) {
      return str.replace(hyphenateRE, '-$1').toLowerCase();
    };

    function getInitialProps(propsList) {
      var res = {};
      propsList.forEach(function (key) {
        res[key] = undefined;
      });
      return res;
    }

    function injectHook(options, key, hook) {
      options[key] = [].concat(options[key] || []);
      options[key].unshift(hook);
    }

    function callHooks(vm, hook) {
      if (vm) {
        var hooks = vm.$options[hook] || [];
        hooks.forEach(function (hook) {
          hook.call(vm);
        });
      }
    }

    function createCustomEvent(name, args) {
      return new CustomEvent(name, {
        bubbles: false,
        cancelable: false,
        detail: args
      });
    }

    var isBoolean = function isBoolean(val) {
      return (/function Boolean/.test(String(val))
      );
    };
    var isNumber = function isNumber(val) {
      return (/function Number/.test(String(val))
      );
    };

    function convertAttributeValue(value, name) {
      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          type = _ref.type;

      if (isBoolean(type)) {
        if (value === 'true' || value === 'false') {
          return value === 'true';
        }
        if (value === '' || value === name) {
          return true;
        }
        return value != null;
      } else if (isNumber(type)) {
        var parsed = parseFloat(value, 10);
        return isNaN(parsed) ? value : parsed;
      } else {
        return value;
      }
    }

    function toVNodes(h, children) {
      var res = [];
      for (var _i2 = 0, l = children.length; _i2 < l; _i2++) {
        res.push(toVNode(h, children[_i2]));
      }
      return res;
    }

    function toVNode(h, node) {
      if (node.nodeType === 3) {
        return node.data.trim() ? node.data : null;
      } else if (node.nodeType === 1) {
        var data = {
          attrs: getAttributes(node),
          domProps: {
            innerHTML: node.innerHTML
          }
        };
        if (data.attrs.slot) {
          data.slot = data.attrs.slot;
          delete data.attrs.slot;
        }
        return h(node.tagName, data);
      } else {
        return null;
      }
    }

    function getAttributes(node) {
      var res = {};
      for (var _i3 = 0, l = node.attributes.length; _i3 < l; _i3++) {
        var attr = node.attributes[_i3];
        res[attr.nodeName] = attr.nodeValue;
      }
      return res;
    }

    function wrap(Vue, Component) {
      var isAsync = typeof Component === 'function' && !Component.cid;
      var isInitialized = false;
      var hyphenatedPropsList = void 0;
      var camelizedPropsList = void 0;
      var camelizedPropsMap = void 0;

      function initialize(Component) {
        if (isInitialized) return;

        var options = typeof Component === 'function' ? Component.options : Component;

        // extract props info
        var propsList = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
        hyphenatedPropsList = propsList.map(hyphenate);
        camelizedPropsList = propsList.map(camelize);
        var originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
        camelizedPropsMap = camelizedPropsList.reduce(function (map, key, i) {
          map[key] = originalPropsAsObject[propsList[i]];
          return map;
        }, {});

        // proxy $emit to native DOM events
        injectHook(options, 'beforeCreate', function () {
          var _this2 = this;

          var emit = this.$emit;
          this.$emit = function (name) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            _this2.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
            return emit.call.apply(emit, [_this2, name].concat(args));
          };
        });

        injectHook(options, 'created', function () {
          var _this3 = this;

          // sync default props values to wrapper on created
          camelizedPropsList.forEach(function (key) {
            _this3.$root.props[key] = _this3[key];
          });
        });

        // proxy props as Element properties
        camelizedPropsList.forEach(function (key) {
          Object.defineProperty(CustomElement.prototype, key, {
            get: function get() {
              return this._wrapper.props[key];
            },
            set: function set(newVal) {
              this._wrapper.props[key] = newVal;
            },

            enumerable: false,
            configurable: true
          });
        });

        isInitialized = true;
      }

      function syncAttribute(el, key) {
        var camelized = camelize(key);
        var value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
        el._wrapper.props[camelized] = convertAttributeValue(value, key, camelizedPropsMap[camelized]);
      }

      var CustomElement = function (_HTMLElement) {
        _inherits(CustomElement, _HTMLElement);

        function CustomElement() {
          _classCallCheck(this, CustomElement);

          var _this4 = _possibleConstructorReturn(this, (CustomElement.__proto__ || Object.getPrototypeOf(CustomElement)).call(this));

          _this4.attachShadow({ mode: 'open' });

          var wrapper = _this4._wrapper = new Vue({
            name: 'shadow-root',
            customElement: _this4,
            shadowRoot: _this4.shadowRoot,
            data: function data() {
              return {
                props: {},
                slotChildren: []
              };
            },
            render: function render(h) {
              return h(Component, {
                ref: 'inner',
                props: this.props
              }, this.slotChildren);
            }
          });

          // Use MutationObserver to react to future attribute & slot content change
          var observer = new MutationObserver(function (mutations) {
            var hasChildrenChange = false;
            for (var _i4 = 0; _i4 < mutations.length; _i4++) {
              var m = mutations[_i4];
              if (isInitialized && m.type === 'attributes' && m.target === _this4) {
                syncAttribute(_this4, m.attributeName);
              } else {
                hasChildrenChange = true;
              }
            }
            if (hasChildrenChange) {
              wrapper.slotChildren = Object.freeze(toVNodes(wrapper.$createElement, _this4.childNodes));
            }
          });
          observer.observe(_this4, {
            childList: true,
            subtree: true,
            characterData: true,
            attributes: true
          });
          return _this4;
        }

        _createClass(CustomElement, [{
          key: 'connectedCallback',
          value: function connectedCallback() {
            var _this5 = this;

            var wrapper = this._wrapper;
            if (!wrapper._isMounted) {
              // initialize attributes
              var syncInitialAttributes = function syncInitialAttributes() {
                wrapper.props = getInitialProps(camelizedPropsList);
                hyphenatedPropsList.forEach(function (key) {
                  syncAttribute(_this5, key);
                });
              };

              if (isInitialized) {
                syncInitialAttributes();
              } else {
                // async & unresolved
                Component().then(function (resolved) {
                  if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
                    resolved = resolved.default;
                  }
                  initialize(resolved);
                  syncInitialAttributes();
                });
              }
              // initialize children
              wrapper.slotChildren = Object.freeze(toVNodes(wrapper.$createElement, this.childNodes));
              wrapper.$mount();
              this.shadowRoot.appendChild(wrapper.$el);
            } else {
              callHooks(this.vueComponent, 'activated');
            }
          }
        }, {
          key: 'disconnectedCallback',
          value: function disconnectedCallback() {
            callHooks(this.vueComponent, 'deactivated');
          }
        }, {
          key: 'vueComponent',
          get: function get() {
            return this._wrapper.$refs.inner;
          }
        }]);

        return CustomElement;
      }(HTMLElement);

      if (!isAsync) {
        initialize(Component);
      }

      return CustomElement;
    }

    /* harmony default export */var vue_wc_wrapper = wrap;

    // EXTERNAL MODULE: ./node_modules/css-loader/lib/css-base.js
    var css_base = __webpack_require__("2350");

    // EXTERNAL MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
    var addStylesShadow = __webpack_require__("35d6");

    // CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
    /* globals __VUE_SSR_CONTEXT__ */

    // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
    // This module is a runtime utility for cleaner component module output and will
    // be included in the final webpack user bundle.

    function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, /* server only */
    shadowMode /* vue-cli only */
    ) {
      // Vue.extend constructor export interop
      var options = typeof scriptExports === 'function' ? scriptExports.options : scriptExports;

      // render functions
      if (render) {
        options.render = render;
        options.staticRenderFns = staticRenderFns;
        options._compiled = true;
      }

      // functional template
      if (functionalTemplate) {
        options.functional = true;
      }

      // scopedId
      if (scopeId) {
        options._scopeId = 'data-v-' + scopeId;
      }

      var hook;
      if (moduleIdentifier) {
        // server build
        hook = function hook(context) {
          // 2.3 injection
          context = context || // cached call
          this.$vnode && this.$vnode.ssrContext || // stateful
          this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
          // 2.2 with runInNewContext: true
          if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
            context = __VUE_SSR_CONTEXT__;
          }
          // inject component styles
          if (injectStyles) {
            injectStyles.call(this, context);
          }
          // register component module identifier for async chunk inferrence
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
      } else if (injectStyles) {
        hook = shadowMode ? function () {
          injectStyles.call(this, this.$root.$options.shadowRoot);
        } : injectStyles;
      }

      if (hook) {
        if (options.functional) {
          // for template-only hot-reload because in that case the render fn doesn't
          // go through the normalizer
          options._injectStyles = hook;
          // register for functioal component in vue file
          var originalRender = options.render;
          options.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = options.beforeCreate;
          options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }

      return {
        exports: scriptExports,
        options: options
      };
    }

    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"452ac3ed-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=5654b030&shadow
    var render = function render() {
      var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { attrs: { "id": "app" } }, [_c('img', { attrs: { "alt": "Vue logo", "src": __webpack_require__("cf05") } }), _c('HelloWorld', { attrs: { "msg": "Welcome to Your Vue.js + TypeScript App" } })], 1);
    };
    var staticRenderFns = [];

    // CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=5654b030&shadow

    // CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };
      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
      }return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if ((typeof Reflect === 'undefined' ? 'undefined' : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = { label: 0, sent: function sent() {
          if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
          f,
          y,
          t,
          g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:case 1:
                t = op;break;
              case 4:
                _.label++;return { value: op[1], done: false };
              case 5:
                _.label++;y = op[1];op = [0];continue;
              case 7:
                op = _.ops.pop();_.trys.pop();continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];t = op;break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];_.ops.push(op);break;
                }
                if (t[2]) _.ops.pop();
                _.trys.pop();continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];y = 0;
          } finally {
            f = t = 0;
          }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = { error: error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }return ar;
    }

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({ value: v, done: d });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    };

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : { default: mod };
    }

    // EXTERNAL MODULE: ./node_modules/vue-class-component/dist/vue-class-component.common.js
    var vue_class_component_common = __webpack_require__("65d9");
    var vue_class_component_common_default = /*#__PURE__*/__webpack_require__.n(vue_class_component_common);

    // CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
    /** vue-property-decorator verson 7.3.0 MIT LICENSE copyright 2018 kaorun343 */

    /**
     * decorator of an inject
     * @param from key
     * @return PropertyDecorator
     */
    function Inject(options) {
      return Object(vue_class_component_common["createDecorator"])(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
          componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
          componentOptions.inject[key] = options || key;
        }
      });
    }
    /**
     * decorator of a provide
     * @param key key
     * @return PropertyDecorator | void
     */
    function Provide(key) {
      return Object(vue_class_component_common["createDecorator"])(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (typeof provide !== 'function' || !provide.managed) {
          var original_1 = componentOptions.provide;
          provide = componentOptions.provide = function () {
            var rv = Object.create((typeof original_1 === 'function' ? original_1.call(this) : original_1) || null);
            for (var i in provide.managed) {
              rv[provide.managed[i]] = this[i];
            }return rv;
          };
          provide.managed = {};
        }
        provide.managed[k] = key || k;
      });
    }
    /**
     * decorator of model
     * @param  event event name
     * @param options options
     * @return PropertyDecorator
     */
    function Model(event, options) {
      if (options === void 0) {
        options = {};
      }
      return Object(vue_class_component_common["createDecorator"])(function (componentOptions, k) {
        (componentOptions.props || (componentOptions.props = {}))[k] = options;
        componentOptions.model = { prop: k, event: event || k };
      });
    }
    /**
     * decorator of a prop
     * @param  options the options for the prop
     * @return PropertyDecorator | void
     */
    function Prop(options) {
      if (options === void 0) {
        options = {};
      }
      return Object(vue_class_component_common["createDecorator"])(function (componentOptions, k) {
        (componentOptions.props || (componentOptions.props = {}))[k] = options;
      });
    }
    /**
     * decorator of a watch function
     * @param  path the path or the expression to observe
     * @param  WatchOption
     * @return MethodDecorator
     */
    function Watch(path, options) {
      if (options === void 0) {
        options = {};
      }
      var _a = options.deep,
          deep = _a === void 0 ? false : _a,
          _b = options.immediate,
          immediate = _b === void 0 ? false : _b;
      return Object(vue_class_component_common["createDecorator"])(function (componentOptions, handler) {
        if (_typeof(componentOptions.watch) !== 'object') {
          componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (_typeof(watch[path]) === 'object' && !Array.isArray(watch[path])) {
          watch[path] = [watch[path]];
        } else if (typeof watch[path] === 'undefined') {
          watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
      });
    }
    // Code copied from Vue/src/shared/util.js
    var vue_property_decorator_hyphenateRE = /\B([A-Z])/g;
    var vue_property_decorator_hyphenate = function vue_property_decorator_hyphenate(str) {
      return str.replace(vue_property_decorator_hyphenateRE, '-$1').toLowerCase();
    };
    /**
     * decorator of an event-emitter function
     * @param  event The name of the event
     * @return MethodDecorator
     */
    function Emit(event) {
      return function (_target, key, descriptor) {
        key = vue_property_decorator_hyphenate(key);
        var original = descriptor.value;
        descriptor.value = function emitter() {
          var _this = this;
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var emit = function emit(returnValue) {
            if (returnValue !== undefined) args.unshift(returnValue);
            _this.$emit.apply(_this, [event || key].concat(args));
          };
          var returnValue = original.apply(this, args);
          if (isPromise(returnValue)) {
            returnValue.then(function (returnValue) {
              emit(returnValue);
            });
          } else {
            emit(returnValue);
          }
        };
      };
    }
    function isPromise(obj) {
      return obj instanceof Promise || obj && typeof obj.then === 'function';
    }

    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"452ac3ed-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HelloWorld.vue?vue&type=template&id=a38c91a8&scoped=true&
    var HelloWorldvue_type_template_id_a38c91a8_scoped_true_render = function HelloWorldvue_type_template_id_a38c91a8_scoped_true_render() {
      var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "hello" }, [_c('h1', [_vm._v(_vm._s(_vm.msg))]), _vm._m(0), _c('h3', [_vm._v("Installed CLI Plugins")]), _vm._m(1), _c('h3', [_vm._v("Essential Links")]), _vm._m(2), _c('h3', [_vm._v("Ecosystem")]), _vm._m(3)]);
    };
    var HelloWorldvue_type_template_id_a38c91a8_scoped_true_staticRenderFns = [function () {
      var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('p', [_vm._v("\n    For a guide and recipes on how to configure / customize this project,"), _c('br'), _vm._v("\n    check out the\n    "), _c('a', { attrs: { "href": "https://cli.vuejs.org", "target": "_blank", "rel": "noopener" } }, [_vm._v("vue-cli documentation")]), _vm._v(".\n  ")]);
    }, function () {
      var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('ul', [_c('li', [_c('a', { attrs: { "href": "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel", "target": "_blank", "rel": "noopener" } }, [_vm._v("babel")])]), _c('li', [_c('a', { attrs: { "href": "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript", "target": "_blank", "rel": "noopener" } }, [_vm._v("typescript")])])]);
    }, function () {
      var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('ul', [_c('li', [_c('a', { attrs: { "href": "https://vuejs.org", "target": "_blank", "rel": "noopener" } }, [_vm._v("Core Docs")])]), _c('li', [_c('a', { attrs: { "href": "https://forum.vuejs.org", "target": "_blank", "rel": "noopener" } }, [_vm._v("Forum")])]), _c('li', [_c('a', { attrs: { "href": "https://chat.vuejs.org", "target": "_blank", "rel": "noopener" } }, [_vm._v("Community Chat")])]), _c('li', [_c('a', { attrs: { "href": "https://twitter.com/vuejs", "target": "_blank", "rel": "noopener" } }, [_vm._v("Twitter")])]), _c('li', [_c('a', { attrs: { "href": "https://news.vuejs.org", "target": "_blank", "rel": "noopener" } }, [_vm._v("News")])])]);
    }, function () {
      var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('ul', [_c('li', [_c('a', { attrs: { "href": "https://router.vuejs.org", "target": "_blank", "rel": "noopener" } }, [_vm._v("vue-router")])]), _c('li', [_c('a', { attrs: { "href": "https://vuex.vuejs.org", "target": "_blank", "rel": "noopener" } }, [_vm._v("vuex")])]), _c('li', [_c('a', { attrs: { "href": "https://github.com/vuejs/vue-devtools#vue-devtools", "target": "_blank", "rel": "noopener" } }, [_vm._v("vue-devtools")])]), _c('li', [_c('a', { attrs: { "href": "https://vue-loader.vuejs.org", "target": "_blank", "rel": "noopener" } }, [_vm._v("vue-loader")])]), _c('li', [_c('a', { attrs: { "href": "https://github.com/vuejs/awesome-vue", "target": "_blank", "rel": "noopener" } }, [_vm._v("awesome-vue")])])]);
    }];

    // CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=template&id=a38c91a8&scoped=true&

    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HelloWorld.vue?vue&type=script&lang=ts&


    var HelloWorldvue_type_script_lang_ts_HelloWorld = function (_external_Vue_default) {
      _inherits(HelloWorld, _external_Vue_default);

      function HelloWorld() {
        _classCallCheck(this, HelloWorld);

        return _possibleConstructorReturn(this, (HelloWorld.__proto__ || Object.getPrototypeOf(HelloWorld)).apply(this, arguments));
      }

      return HelloWorld;
    }(external_Vue_default.a);

    __decorate([Prop()], HelloWorldvue_type_script_lang_ts_HelloWorld.prototype, "msg", void 0);

    HelloWorldvue_type_script_lang_ts_HelloWorld = __decorate([vue_class_component_common_default.a], HelloWorldvue_type_script_lang_ts_HelloWorld);
    /* harmony default export */var HelloWorldvue_type_script_lang_ts_ = HelloWorldvue_type_script_lang_ts_HelloWorld;
    // CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=script&lang=ts&
    /* harmony default export */var components_HelloWorldvue_type_script_lang_ts_ = HelloWorldvue_type_script_lang_ts_;
    // CONCATENATED MODULE: ./src/components/HelloWorld.vue


    function injectStyles(context) {

      var style0 = __webpack_require__("aea4");
      if (style0.__inject__) style0.__inject__(context);
    }

    /* normalize component */

    var component = normalizeComponent(components_HelloWorldvue_type_script_lang_ts_, HelloWorldvue_type_template_id_a38c91a8_scoped_true_render, HelloWorldvue_type_template_id_a38c91a8_scoped_true_staticRenderFns, false, injectStyles, "a38c91a8", null, true);

    /* harmony default export */var components_HelloWorld = component.exports;
    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=ts&shadow


    var Appvue_type_script_lang_ts_shadow_App =
    /** @class */
    function (_super) {
      __extends(App, _super);

      function App() {
        var _this = _super.call(this) || this;

        var a = function a() {
          console.log("测试编译");
        };

        a();
        return _this;
      }

      App = __decorate([vue_class_component_common_default()({
        components: {
          HelloWorld: components_HelloWorld
        }
      })], App);
      return App;
    }(external_Vue_default.a);

    /* harmony default export */var Appvue_type_script_lang_ts_shadow = Appvue_type_script_lang_ts_shadow_App;
    // CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=ts&shadow
    /* harmony default export */var src_Appvue_type_script_lang_ts_shadow = Appvue_type_script_lang_ts_shadow;
    // CONCATENATED MODULE: ./src/App.vue?shadow


    function Appshadow_injectStyles(context) {

      var style0 = __webpack_require__("547d");
      if (style0.__inject__) style0.__inject__(context);
    }

    /* normalize component */

    var Appshadow_component = normalizeComponent(src_Appvue_type_script_lang_ts_shadow, render, staticRenderFns, false, Appshadow_injectStyles, null, null, true);

    /* harmony default export */var Appshadow = Appshadow_component.exports;
    // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js


    // runtime shared by every component chunk


    window.customElements.define('custom-vue', vue_wc_wrapper(external_Vue_default.a, Appshadow));

    /***/
  },

  /***/"65d9":
  /***/function d9(module, exports, __webpack_require__) {

    "use strict";
    /**
      * vue-class-component v6.3.2
      * (c) 2015-present Evan You
      * @license MIT
      */

    Object.defineProperty(exports, '__esModule', { value: true });

    function _interopDefault(ex) {
      return ex && (typeof ex === 'undefined' ? 'undefined' : _typeof(ex)) === 'object' && 'default' in ex ? ex['default'] : ex;
    }

    var Vue = _interopDefault(__webpack_require__("8bbf"));

    var reflectionIsSupported = typeof Reflect !== 'undefined' && Reflect.defineMetadata;
    function copyReflectionMetadata(to, from) {
      forwardMetadata(to, from);
      Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
        forwardMetadata(to.prototype, from.prototype, key);
      });
      Object.getOwnPropertyNames(from).forEach(function (key) {
        forwardMetadata(to, from, key);
      });
    }
    function forwardMetadata(to, from, propertyKey) {
      var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
      metaKeys.forEach(function (metaKey) {
        var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);
        if (propertyKey) {
          Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
        } else {
          Reflect.defineMetadata(metaKey, metadata, to);
        }
      });
    }

    var fakeArray = { __proto__: [] };
    var hasProto = fakeArray instanceof Array;
    function createDecorator(factory) {
      return function (target, key, index) {
        var Ctor = typeof target === 'function' ? target : target.constructor;
        if (!Ctor.__decorators__) {
          Ctor.__decorators__ = [];
        }
        if (typeof index !== 'number') {
          index = undefined;
        }
        Ctor.__decorators__.push(function (options) {
          return factory(options, key, index);
        });
      };
    }
    function mixins() {
      var Ctors = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        Ctors[_i] = arguments[_i];
      }
      return Vue.extend({ mixins: Ctors });
    }
    function isPrimitive(value) {
      var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
      return value == null || type !== 'object' && type !== 'function';
    }
    function warn(message) {
      if (typeof console !== 'undefined') {
        console.warn('[vue-class-component] ' + message);
      }
    }

    function collectDataFromConstructor(vm, Component) {
      // override _init to prevent to init as Vue instance
      var originalInit = Component.prototype._init;
      Component.prototype._init = function () {
        var _this = this;
        // proxy to actual vm
        var keys = Object.getOwnPropertyNames(vm);
        // 2.2.0 compat (props are no longer exposed as self properties)
        if (vm.$options.props) {
          for (var key in vm.$options.props) {
            if (!vm.hasOwnProperty(key)) {
              keys.push(key);
            }
          }
        }
        keys.forEach(function (key) {
          if (key.charAt(0) !== '_') {
            Object.defineProperty(_this, key, {
              get: function get() {
                return vm[key];
              },
              set: function set(value) {
                vm[key] = value;
              },
              configurable: true
            });
          }
        });
      };
      // should be acquired class property values
      var data = new Component();
      // restore original _init to avoid memory leak (#209)
      Component.prototype._init = originalInit;
      // create plain data object
      var plainData = {};
      Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
          plainData[key] = data[key];
        }
      });
      if (false) {}
      return plainData;
    }

    var $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured' // 2.5
    ];
    function componentFactory(Component, options) {
      if (options === void 0) {
        options = {};
      }
      options.name = options.name || Component._componentTag || Component.name;
      // prototype props.
      var proto = Component.prototype;
      Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
          return;
        }
        // hooks
        if ($internalHooks.indexOf(key) > -1) {
          options[key] = proto[key];
          return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (descriptor.value !== void 0) {
          // methods
          if (typeof descriptor.value === 'function') {
            (options.methods || (options.methods = {}))[key] = descriptor.value;
          } else {
            // typescript decorated data
            (options.mixins || (options.mixins = [])).push({
              data: function data() {
                var _a;
                return _a = {}, _a[key] = descriptor.value, _a;
              }
            });
          }
        } else if (descriptor.get || descriptor.set) {
          // computed properties
          (options.computed || (options.computed = {}))[key] = {
            get: descriptor.get,
            set: descriptor.set
          };
        }
      });
      (options.mixins || (options.mixins = [])).push({
        data: function data() {
          return collectDataFromConstructor(this, Component);
        }
      });
      // decorate options
      var decorators = Component.__decorators__;
      if (decorators) {
        decorators.forEach(function (fn) {
          return fn(options);
        });
        delete Component.__decorators__;
      }
      // find super
      var superProto = Object.getPrototypeOf(Component.prototype);
      var Super = superProto instanceof Vue ? superProto.constructor : Vue;
      var Extended = Super.extend(options);
      forwardStaticMembers(Extended, Component, Super);
      if (reflectionIsSupported) {
        copyReflectionMetadata(Extended, Component);
      }
      return Extended;
    }
    var reservedPropertyNames = [
    // Unique id
    'cid',
    // Super Vue constructor
    'super',
    // Component options that will be used by the component
    'options', 'superOptions', 'extendOptions', 'sealedOptions',
    // Private assets
    'component', 'directive', 'filter'];
    function forwardStaticMembers(Extended, Original, Super) {
      // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
      Object.getOwnPropertyNames(Original).forEach(function (key) {
        // `prototype` should not be overwritten
        if (key === 'prototype') {
          return;
        }
        // Some browsers does not allow reconfigure built-in properties
        var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);
        if (extendedDescriptor && !extendedDescriptor.configurable) {
          return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(Original, key);
        // If the user agent does not support `__proto__` or its family (IE <= 10),
        // the sub class properties may be inherited properties from the super class in TypeScript.
        // We need to exclude such properties to prevent to overwrite
        // the component options object which stored on the extended constructor (See #192).
        // If the value is a referenced value (object or function),
        // we can check equality of them and exclude it if they have the same reference.
        // If it is a primitive value, it will be forwarded for safety.
        if (!hasProto) {
          // Only `cid` is explicitly exluded from property forwarding
          // because we cannot detect whether it is a inherited property or not
          // on the no `__proto__` environment even though the property is reserved.
          if (key === 'cid') {
            return;
          }
          var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);
          if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
            return;
          }
        }
        // Warn if the users manually declare reserved properties
        if (false) {}
        Object.defineProperty(Extended, key, descriptor);
      });
    }

    function Component(options) {
      if (typeof options === 'function') {
        return componentFactory(options);
      }
      return function (Component) {
        return componentFactory(Component, options);
      };
    }
    Component.registerHooks = function registerHooks(keys) {
      $internalHooks.push.apply($internalHooks, keys);
    };

    exports.default = Component;
    exports.createDecorator = createDecorator;
    exports.mixins = mixins;

    /***/
  },

  /***/"8bbf":
  /***/function bbf(module, exports) {

    module.exports = Vue;

    /***/
  },

  /***/"aea4":
  /***/function aea4(module, __webpack_exports__, __webpack_require__) {

    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_a38c91a8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0066");
    /* harmony import */var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_a38c91a8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_a38c91a8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_a38c91a8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) {
      if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {
        __webpack_require__.d(__webpack_exports__, key, function () {
          return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_a38c91a8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
        });
      })(__WEBPACK_IMPORT_KEY__);
    } /* harmony default export */__webpack_exports__["default"] = _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_a38c91a8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a;

    /***/
  },

  /***/"b665":
  /***/function b665(module, exports, __webpack_require__) {

    exports = module.exports = __webpack_require__("2350")(false);
    // imports


    // module
    exports.push([module.i, "h3[data-v-a38c91a8]{margin:40px 0 0}ul[data-v-a38c91a8]{list-style-type:none;padding:0}li[data-v-a38c91a8]{display:inline-block;margin:0 10px}a[data-v-a38c91a8]{color:#42b983}", ""]);

    // exports


    /***/
  },

  /***/"cf05":
  /***/function cf05(module, exports, __webpack_require__) {

    module.exports = __webpack_require__.p + "img/logo.82b9c7a5.png";

    /***/
  }

  /******/ });
//# sourceMappingURL=custom-vue.js.map