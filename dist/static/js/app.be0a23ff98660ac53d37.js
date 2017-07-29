webpackJsonp([1],{

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(96)
}
var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(75),
  /* template */
  __webpack_require__(103),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(98)
}
var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(76),
  /* template */
  __webpack_require__(105),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 103:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "left-nav"
  }, [_c('ul', [_c('li', [_c('i', {
    staticClass: "icon iconfont icon-liwu"
  }), _vm._v(" "), _c('div', [_vm._v("收银")])]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon iconfont icon-gouwudai"
  }), _vm._v(" "), _c('div', [_vm._v("商品")])]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon iconfont icon-dianpu"
  }), _vm._v(" "), _c('div', [_vm._v("店铺")])]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon iconfont icon-huiyuanqia"
  }), _vm._v(" "), _c('div', [_vm._v("会员")])]), _vm._v(" "), _c('li', [_c('i', {
    staticClass: "icon iconfont icon-shezhi"
  }), _vm._v(" "), _c('div', [_vm._v("设置")])])])])
}]}

/***/ }),

/***/ 104:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('leftNav'), _vm._v(" "), _c('Pos')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pos"
  }, [_c('el-row', [_c('el-col', {
    staticClass: "pos-order",
    attrs: {
      "span": 7,
      "id": "order-list"
    }
  }, [_c('el-tabs', [_c('el-tab-pane', {
    attrs: {
      "label": "点餐"
    }
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableData
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "goodsName",
      "label": "商品名称"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "count",
      "label": "数量",
      "width": "70"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "price",
      "label": "金额",
      "width": "70"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "100",
      "fixed": "right"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.reduceOrderList(scope.row)
            }
          }
        }, [_vm._v("删除")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "type": "text",
            "size": "small"
          },
          on: {
            "click": function($event) {
              _vm.addOrderList(scope.row)
            }
          }
        }, [_vm._v("增加")])]
      }
    }])
  })], 1), _vm._v(" "), _c('div', [_vm._v("\n               总数：" + _vm._s(_vm.totalCount) + "   总价：" + _vm._s(_vm.totalMoney) + " 元\n           ")]), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('el-button', {
    attrs: {
      "type": "warning"
    }
  }, [_vm._v("挂单")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "danger"
    },
    on: {
      "click": _vm.reduceAll
    }
  }, [_vm._v("删除")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "success"
    },
    on: {
      "click": _vm.checkOut
    }
  }, [_vm._v("结账")])], 1)], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "挂单"
    }
  }), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "外卖"
    }
  })], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 14
    }
  }, [_c('div', {
    staticClass: "goods"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("常用商品")]), _vm._v(" "), _c('div', {
    staticClass: "goods-list"
  }, [_c('ul', _vm._l((_vm.oftenGoods), function(item) {
    return _c('li', {
      key: item.id,
      on: {
        "click": function($event) {
          _vm.addOrderList(item)
        }
      }
    }, [_c('span', [_vm._v(_vm._s(item.goodsName))]), _vm._v(" "), _c('span', {
      staticClass: "o-price"
    }, [_vm._v("￥" + _vm._s(item.price))])])
  }))])]), _vm._v(" "), _c('div', {
    staticClass: "goods-type"
  }, [_c('el-tabs', [_c('el-tab-pane', {
    attrs: {
      "label": "汉堡"
    }
  }, [_c('div', [_c('ul', {
    staticClass: "cookList"
  }, _vm._l((_vm.type0Goods), function(list) {
    return _c('li', {
      key: list.id,
      on: {
        "click": function($event) {
          _vm.addOrderList(list)
        }
      }
    }, [_c('span', {
      staticClass: "foodImg"
    }, [_c('img', {
      attrs: {
        "src": list.goodsImg,
        "width": "100%"
      }
    })]), _vm._v(" "), _c('span', {
      staticClass: "foodName"
    }, [_vm._v(_vm._s(list.goodsName))]), _vm._v(" "), _c('span', {
      staticClass: "foodPrice"
    }, [_vm._v("￥" + _vm._s(list.price) + "元")])])
  }))])]), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "小食"
    }
  }, [_c('div', [_c('ul', {
    staticClass: "cookList"
  }, _vm._l((_vm.type0Goods1), function(list) {
    return _c('li', {
      key: list.id,
      on: {
        "click": function($event) {
          _vm.addOrderList(list)
        }
      }
    }, [_c('span', {
      staticClass: "foodImg"
    }, [_c('img', {
      attrs: {
        "src": list.goodsImg,
        "width": "100%"
      }
    })]), _vm._v(" "), _c('span', {
      staticClass: "foodName"
    }, [_vm._v(_vm._s(list.goodsName))]), _vm._v(" "), _c('span', {
      staticClass: "foodPrice"
    }, [_vm._v("￥" + _vm._s(list.price) + "元")])])
  }))])]), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "饮料"
    }
  }, [_c('div', [_c('ul', {
    staticClass: "cookList"
  }, _vm._l((_vm.type0Goods2), function(list) {
    return _c('li', {
      key: list.id,
      on: {
        "click": function($event) {
          _vm.addOrderList(list)
        }
      }
    }, [_c('span', {
      staticClass: "foodImg"
    }, [_c('img', {
      attrs: {
        "src": list.goodsImg,
        "width": "100%"
      }
    })]), _vm._v(" "), _c('span', {
      staticClass: "foodName"
    }, [_vm._v(_vm._s(list.goodsName))]), _vm._v(" "), _c('span', {
      staticClass: "foodPrice"
    }, [_vm._v("￥" + _vm._s(list.price) + "元")])])
  }))])]), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "套餐"
    }
  }, [_c('div', [_c('ul', {
    staticClass: "cookList"
  }, _vm._l((_vm.type0Goods3), function(list) {
    return _c('li', {
      key: list.id,
      on: {
        "click": function($event) {
          _vm.addOrderList(list)
        }
      }
    }, [_c('span', {
      staticClass: "foodImg"
    }, [_c('img', {
      attrs: {
        "src": list.goodsImg,
        "width": "100%"
      }
    })]), _vm._v(" "), _c('span', {
      staticClass: "foodName"
    }, [_vm._v(_vm._s(list.goodsName))]), _vm._v(" "), _c('span', {
      staticClass: "foodPrice"
    }, [_vm._v("￥" + _vm._s(list.price) + "元")])])
  }))])])], 1)], 1)])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(97)
}
var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(74),
  /* template */
  __webpack_require__(104),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_leftNav__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_leftNav___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_common_leftNav__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_page_pos__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_page_pos___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_page_pos__);
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  components: {
    leftNav: __WEBPACK_IMPORTED_MODULE_0__components_common_leftNav___default.a,
    Pos: __WEBPACK_IMPORTED_MODULE_1__components_page_pos___default.a
  }
});

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
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


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'pos',
    data() {
        return {
            tableData: [],
            tableData1: [],
            oftenGoods: [],
            type0Goods: [],
            type0Goods1: [],
            type0Goods2: [],
            type0Goods3: [],
            totalMoney: 0,
            totalCount: 0
        };
    },
    //在虚拟dom加载完成之后
    mounted: function () {
        let orderHeight = document.body.clientHeight;
        console.log(orderHeight);
        document.getElementById('order-list').style.height = orderHeight + 'px';
    },
    created() {
        //获取常用商品
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://jspang.com/DemoApi/oftenGoods.php').then(response => {
            // console.log( response );
            this.oftenGoods = response.data;
        }).catch(error => {
            console.log(error);
            alert('网路错误，不能访问');
        });
        //分类商品数据
        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('http://jspang.com/DemoApi/typeGoods.php').then(response => {
            // console.log( response );
            this.type0Goods = response.data[0];
            this.type0Goods1 = response.data[1];
            this.type0Goods2 = response.data[2];
            this.type0Goods3 = response.data[3];
        }).catch(error => {
            console.log(error);
            alert('网路错误，不能访问');
        });
    },
    methods: {
        addOrderList(goods) {

            this.totalMoney = 0;
            this.totalCount = 0;
            //商品是否已经存在于订单列表中
            let isHave = false;
            for (let i = 0; i < this.tableData.length; i++) {
                if (this.tableData[i].goodsId == goods.goodsId) {
                    isHave = true;
                }
            }
            //根据判断的值编写业务逻辑
            if (isHave) {
                let arr = this.tableData.filter(ele =>
                //过滤条件，返回
                ele.goodsId == goods.goodsId);
                arr[0].count++;
            } else {
                //在这里面添加
                //let newGoods = Object.assign(goods,{count:1})
                let newGoods = {
                    goodsId: goods.goodsId,
                    goodsName: goods.goodsName,
                    price: goods.price,
                    count: 1
                };
                this.tableData.push(newGoods);

                //this.$set(this.tableData,newGoods)

                console.log(this.tableData);
            }
            this.getAllMoney();
        },
        //删除商品
        reduceOrderList(goods) {
            this.tableData = this.tableData.filter(any => any.goodsId != goods.goodsId);
            this.getAllMoney();
        },
        //删除所有商品
        reduceAll() {
            this.tableData = [];
            this.getAllMoney();
        },
        //计算总数
        getAllMoney() {
            this.totalCount = 0;
            this.totalMoney = 0;
            if (this.tableData) {
                this.tableData.forEach(ele => {
                    this.totalCount += ele.count;
                    this.totalMoney = this.totalMoney + ele.price * ele.count;
                });
            }
        },
        //结账
        checkOut() {
            if (this.totalCount != 0) {
                this.tableData = [];
                this.getAllMoney();
                this.$message({
                    message: 'laallallallaalalala',
                    type: 'success'
                });
            } else {
                this.$message.error('不要再点击了');
            }
        }
    },

    watch: {
        tableData: {
            handler(a, b) {
                this.tableData = a;
                console.log(a, b);
            },
            deep: true
        }

    }
});

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui_lib_theme_default_index_css__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui_lib_theme_default_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_element_ui_lib_theme_default_index_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_element_ui___default.a);

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[77]);
//# sourceMappingURL=app.be0a23ff98660ac53d37.js.map