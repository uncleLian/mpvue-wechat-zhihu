require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(116);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_18937189_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(123);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(117)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_18937189_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18937189", Component.options)
  } else {
    hotAPI.reload("data-v-18937189", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 117:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(27);


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
            tabsOption: ['最新消息', '主题日报'],
            activeIndex: 0,
            articles: [],
            bottomLoading: true,
            themes: []
        };
    },
    mounted: function mounted() {
        this.getSystemInfo();
        this.getLatestArticle();
    },

    methods: {
        // 最新消息
        getLatestArticle: function getLatestArticle() {
            var _this = this;

            Object(__WEBPACK_IMPORTED_MODULE_2__api__["e" /* getLatestArticle */])().then(function (res) {
                if (res) {
                    res.formatDate = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* formatDate */])(res.date);
                    _this.articles = [];
                    _this.articles.push(res);
                }
            });
        },

        // 过往消息
        getBeforeArticle: function getBeforeArticle() {
            var _this2 = this;

            if (this.bottomLoading !== 'nothing' && this.bottomLoading !== 'error') {
                this.bottomLoading = 'loading';
                var lastDate = this.articles[this.articles.length - 1].date;
                Object(__WEBPACK_IMPORTED_MODULE_2__api__["c" /* getBeforeArticle */])(lastDate).then(function (res) {
                    if (res) {
                        _this2.bottomLoading = true;
                        res.formatDate = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* formatDate */])(res.date);
                        _this2.articles.push(res);
                    } else {
                        _this2.bottomLoading = 'nothing';
                    }
                }).catch(function () {
                    _this2.bottomLoading = 'error';
                });
            }
        },

        // 主题列表
        getThemes: function getThemes() {
            var _this3 = this;

            Object(__WEBPACK_IMPORTED_MODULE_2__api__["i" /* getThemes */])().then(function (res) {
                _this3.themes = res.others;
            });
        },

        // 页面change
        pageChange: function pageChange(e) {
            this.activeIndex = e.mp.detail.current;
            if (this.activeIndex === 0 && this.articles.length === 0) {
                this.getLatestArticle();
            } else if (this.activeIndex === 1 && this.themes.length === 0) {
                this.getThemes();
            }
        },

        // 获取系统信息 => 设置滚动页面高度
        getSystemInfo: function getSystemInfo() {
            var _this4 = this;

            wx.getSystemInfo({
                success: function success(res) {
                    _this4.winHeight = res.windowHeight - 50;
                }
            });
        }
    },
    // 下拉刷新
    onPullDownRefresh: function onPullDownRefresh() {
        var _this5 = this;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (!(_this5.activeIndex === 0)) {
                                _context.next = 5;
                                break;
                            }

                            _context.next = 3;
                            return _this5.getLatestArticle();

                        case 3:
                            _context.next = 7;
                            break;

                        case 5:
                            _context.next = 7;
                            return _this5.getThemes();

                        case 7:
                            wx.stopPullDownRefresh();

                        case 8:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this5);
        }))();
    }
});

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "index"
    }
  }, [_c('div', {
    staticClass: "index-tabs"
  }, _vm._l((_vm.tabsOption), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "tabs-item",
      class: [_vm.activeIndex === index ? 'active' : ''],
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.activeIndex = index
        }
      }
    }, [_vm._v(_vm._s(item))])
  })), _vm._v(" "), _c('swiper', {
    staticClass: "index-swiper",
    attrs: {
      "current": _vm.activeIndex,
      "eventid": '2'
    },
    on: {
      "change": _vm.pageChange
    }
  }, [_c('swiper-item', {
    staticClass: "swiper-item",
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('scroll-view', {
    style: ({
      'height': _vm.winHeight + 'px'
    }),
    attrs: {
      "scroll-y": "",
      "eventid": '1'
    },
    on: {
      "scrolltolower": _vm.getBeforeArticle
    }
  }, [_vm._l((_vm.articles), function(item, index) {
    return _c('article-list', {
      key: index,
      attrs: {
        "json": item.stories,
        "date": item.formatDate,
        "mpcomid": '0-' + index
      }
    })
  }), _vm._v(" "), (_vm.articles.length > 0 && _vm.bottomLoading) ? _c('div', {
    staticClass: "list-bottomLoad"
  }, [(_vm.bottomLoading === 'loading') ? _c('div', {
    staticClass: "loading"
  }, [_vm._v("加载中...")]) : _vm._e(), _vm._v(" "), (_vm.bottomLoading === 'nothing') ? _c('div', {
    staticClass: "nothing"
  }, [_vm._v("刷完了，休息一下吧")]) : _vm._e(), _vm._v(" "), (_vm.bottomLoading === 'error') ? _c('div', {
    staticClass: "error"
  }, [_vm._v("出错了，刷新试试")]) : _vm._e()]) : _vm._e()], 2)], 1), _vm._v(" "), _c('swiper-item', {
    staticClass: "swiper-item",
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('scroll-view', {
    style: ({
      'height': _vm.winHeight + 'px'
    }),
    attrs: {
      "scroll-y": ""
    }
  }, [_c('theme-list', {
    attrs: {
      "json": _vm.themes,
      "mpcomid": '2'
    }
  })], 1)], 1)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-18937189", esExports)
  }
}

/***/ })

},[115]);
//# sourceMappingURL=main.js.map