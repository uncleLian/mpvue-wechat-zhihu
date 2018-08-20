require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "comment"
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
      "scrolltolower": _vm.getShortCommentMore
    }
  }, [_c('comment-list', {
    attrs: {
      "json": _vm.comments,
      "bottomLoading": _vm.bottomLoading,
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('my-loading', {
    attrs: {
      "loading": _vm.loading,
      "reload": _vm.getShortComment,
      "mpcomid": '1'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-90da5854", esExports)
  }
}

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(71);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_90da5854_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(109);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(72)
}
var normalizeComponent = __webpack_require__(2)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_90da5854_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/comment/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-90da5854", Component.options)
  } else {
    hotAPI.reload("data-v-90da5854", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 72:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(27);

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
    data: function data() {
        return {
            winHeight: 0,
            id: '',
            comments: [],
            loading: false,
            bottomLoading: true
        };
    },
    mounted: function mounted() {
        this.id = this.$root.$mp.query.id;
        this.getSystemInfo();
        this.getShortComment();
    },

    methods: {
        getShortComment: function getShortComment() {
            var _this = this;

            this.loading = 'loading';
            Object(__WEBPACK_IMPORTED_MODULE_1__api__["f" /* getShortComment */])(this.id).then(function (res) {
                if (res && res.comments.length > 0) {
                    _this.loading = false;
                    res.comments.forEach(function (item) {
                        item.time = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* formatTime */])(item.time);
                    });
                    _this.comments = res.comments;
                } else {
                    _this.loading = 'nothing';
                }
            }).catch(function () {
                _this.loading = 'error';
            });
        },
        getShortCommentMore: function getShortCommentMore() {
            var _this2 = this;

            if (this.bottomLoading !== 'nothing' && this.bottomLoading !== 'error') {
                this.bottomLoading = 'loading';
                var lastId = this.comments[this.comments.length - 1].id;
                Object(__WEBPACK_IMPORTED_MODULE_1__api__["g" /* getShortCommentMore */])(this.id, lastId).then(function (res) {
                    if (res && res.comments.length > 0) {
                        var _comments;

                        _this2.bottomLoading = true;
                        res.comments.forEach(function (item) {
                            item.time = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* formatTime */])(item.time);
                        });
                        (_comments = _this2.comments).push.apply(_comments, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(res.comments));
                    } else {
                        _this2.bottomLoading = 'nothing';
                    }
                }).catch(function () {
                    _this2.bottomLoading = 'error';
                });
            }
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

/***/ })

},[70]);
//# sourceMappingURL=main.js.map