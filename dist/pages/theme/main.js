require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(106);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6e359480_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(109);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(107)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6e359480_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/theme/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e359480", Component.options)
  } else {
    hotAPI.reload("data-v-6e359480", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 107:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_articleList__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(24);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    components: { articleList: __WEBPACK_IMPORTED_MODULE_1__components_articleList__["a" /* default */] },
    data: function data() {
        return {
            winHeight: 0,
            themeId: '',
            themeInfo: '',
            themeArticles: [],
            bottomLoading: 'loading'
        };
    },
    mounted: function mounted() {
        this.themeId = this.$root.$mp.query.id;
        this.getSystemInfo();
        this.getThemeArticle();
    },

    methods: {
        getThemeArticle: function getThemeArticle() {
            var _this = this;

            Object(__WEBPACK_IMPORTED_MODULE_2__api__["e" /* getThemeArticle */])(this.themeId).then(function (res) {
                if (res) {
                    _this.themeInfo = {
                        'image': res.image,
                        'name': res.name,
                        'description': res.description
                    };
                    _this.themeArticles = res.stories;
                }
            });
        },
        getBeforeThemeArticle: function getBeforeThemeArticle() {
            var _this2 = this;

            this.bottomLoading = 'loading';
            var lastId = this.themeArticles[this.themeArticles.length - 1].id;
            Object(__WEBPACK_IMPORTED_MODULE_2__api__["c" /* getBeforeThemeArticle */])(this.themeId, lastId).then(function (res) {
                console.log(res);
                if (res) {
                    var _themeArticles;

                    (_themeArticles = _this2.themeArticles).push.apply(_themeArticles, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(res.stories));
                } else {
                    _this2.bottomLoading = 'nothing';
                }
            }).catch(function () {
                _this2.bottomLoading = 'error';
            });
        },

        // 获取系统信息 => 设置滚动页面高度
        getSystemInfo: function getSystemInfo() {
            var _this3 = this;

            wx.getSystemInfo({
                success: function success(res) {
                    _this3.winHeight = res.windowHeight;
                }
            });
        }
    }
});

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "theme"
    }
  }, [_c('scroll-view', {
    style: ({
      'height': _vm.winHeight + 'px'
    }),
    attrs: {
      "scroll-y": "",
      "eventid": '0'
    },
    on: {
      "scrolltolower": _vm.getBeforeThemeArticle
    }
  }, [(_vm.themeInfo && _vm.themeInfo.image) ? _c('div', {
    staticClass: "theme-cover"
  }, [_c('img', {
    staticClass: "theme-image",
    attrs: {
      "src": _vm.themeInfo.image,
      "mode": "aspectFill"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "theme-title"
  }, [_c('div', {
    staticClass: "title-name"
  }, [_vm._v(_vm._s(_vm.themeInfo.name))]), _vm._v(" "), _c('div', {
    staticClass: "title-description"
  }, [_vm._v(_vm._s(_vm.themeInfo.description))])]), _vm._v(" "), _c('div', {
    staticClass: "cover-mask"
  }), _vm._v(" "), _c('div', {
    staticClass: "cover-mask-black"
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "theme-list"
  }, [_c('article-list', {
    attrs: {
      "json": _vm.themeArticles,
      "bottomLoading": _vm.bottomLoading,
      "mpcomid": '0'
    }
  })], 1)])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6e359480", esExports)
  }
}

/***/ })

},[105]);
//# sourceMappingURL=main.js.map