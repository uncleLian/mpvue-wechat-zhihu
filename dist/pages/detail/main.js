require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(111);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_53a2d190_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(114);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(112)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_53a2d190_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/detail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-53a2d190", Component.options)
  } else {
    hotAPI.reload("data-v-53a2d190", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 112:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(27);
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
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            id: '',
            json: '',
            extra: '',
            loading: false
        };
    },
    mounted: function mounted() {
        this.id = this.$root.$mp.query.id;
        this.getArticleDetail();
        this.getArticleExtra();
    },

    methods: {
        getArticleDetail: function getArticleDetail() {
            var _this = this;

            this.loading = 'loading';
            Object(__WEBPACK_IMPORTED_MODULE_0__api__["a" /* getArticleDetail */])(this.id).then(function (res) {
                if (res) {
                    res.body = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* formatHTML */])(res.body);
                    _this.json = res;
                    _this.loading = false;
                } else {
                    _this.loading = 'nothing';
                }
            }).catch(function () {
                _this.loading = 'error';
            });
        },
        getArticleExtra: function getArticleExtra() {
            var _this2 = this;

            Object(__WEBPACK_IMPORTED_MODULE_0__api__["b" /* getArticleExtra */])(this.id).then(function (res) {
                if (res) {
                    _this2.extra = res;
                }
            });
        },

        // 跳转至评论页
        url: function url() {
            wx.navigateTo({
                url: '/pages/comment/main?id=' + this.id
            });
        }
    }
});

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "detail"
    }
  }, [(_vm.json) ? _c('div', {
    staticClass: "detail-container"
  }, [(_vm.json.image) ? _c('div', {
    staticClass: "detail-cover"
  }, [_c('img', {
    staticClass: "detail-image",
    attrs: {
      "src": _vm.json.image,
      "mode": "widthFix"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "detail-title"
  }, [_vm._v(_vm._s(_vm.json.title))]), _vm._v(" "), _c('div', {
    staticClass: "cover-mask"
  }), _vm._v(" "), _c('div', {
    staticClass: "cover-mask-black"
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "detail-content"
  }, [_c('rich-text', {
    attrs: {
      "nodes": _vm.json.body,
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), (_vm.extra) ? _c('div', {
    staticClass: "detail-tool"
  }, [_c('div', {
    staticClass: "tool-item popularity"
  }, [_c('div', {
    staticClass: "item-icon my-icon-vote-up"
  }), _vm._v(" "), _c('div', {
    staticClass: "item-value"
  }, [_vm._v("赞同 " + _vm._s(_vm.extra.popularity || 0))])]), _vm._v(" "), _c('div', {
    staticClass: "tool-item comments",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.url
    }
  }, [_c('div', {
    staticClass: "item-icon my-icon-comments"
  }), _vm._v(" "), _c('div', {
    staticClass: "item-value comments"
  }, [_vm._v("评论 " + _vm._s(_vm.extra.comments || 0))])])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('my-loading', {
    attrs: {
      "loading": _vm.loading,
      "reload": _vm.getArticleDetail,
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
     require("vue-hot-reload-api").rerender("data-v-53a2d190", esExports)
  }
}

/***/ })

},[110]);
//# sourceMappingURL=main.js.map