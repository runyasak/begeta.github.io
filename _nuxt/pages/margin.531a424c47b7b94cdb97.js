webpackJsonp([14],{"4bhj":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mjUD"),r=a("LqMQ"),s=a("VU/8")(i.a,r.a,!1,null,null,null);s.options.__file="pages/margin.vue",e.default=s.exports},L26m:function(t,e,a){"use strict";var i=a("p5hY"),r=a("gOg8"),s=!1;var n=function(t){s||a("MYkw")},o=a("VU/8")(i.a,r.a,!1,n,"data-v-644ccde4",null);o.options.__file="components/TableAtomic.vue",e.a=o.exports},LqMQ:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pd-10px"},[a("h1",[t._v("Margin")]),a("div",[t._v("เป็น Atomic Class ที่ใช้จัดการ Margin ประกอบด้วย")]),a("ui",[a("li",[t._v("Margin")]),a("li",[t._v("Margin Top")]),a("li",[t._v("Margin Bottom")]),a("li",[t._v("Margin Left")]),a("li",[t._v("Margin Right")]),a("li",[t._v("Margin Vertical")]),a("li",[t._v("Margin Horizontal")])]),a("h3",[t._v("Property")]),a("table-atomic",{attrs:{data:t.property,type:"property"}}),a("h3",[t._v("Value")]),a("table-atomic",{attrs:{data:t.value,type:"value"}}),t._m(0),a("responsive"),t._m(1)],1)};i._withStripped=!0;var r={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Responsive "),e("span",{staticClass:"cl-success"},[this._v("YES")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Hover "),e("span",{staticClass:"cl-danger"},[this._v("NO")])])}]};e.a=r},Lwyv:function(t,e,a){"use strict";var i=a("SdWF"),r=a("kxtF"),s=a("VU/8")(i.a,r.a,!1,null,null,null);s.options.__file="components/Responsive.vue",e.a=s.exports},MYkw:function(t,e,a){var i=a("T0XP");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("603ce41e",i,!1,{sourceMap:!1})},SdWF:function(t,e,a){"use strict";var i=a("L26m");e.a={components:{TableAtomic:i.a},data:function(){return{responsive_data:[["Class","mobile","tablet","tablet-only","desktop","desktop-only","widescreen"],["Breakpoints","up to 768px","from 769px","769px to 1023px","from 1024px","1024px to 1215px","from 1216px"]]}}}},T0XP:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".is-bd-top[data-v-644ccde4]{border-top:1px solid #dbdbdb}.is-bd-right[data-v-644ccde4]{border-right:1px solid #dbdbdb}.is-bd-bottom[data-v-644ccde4]{border-bottom:1px solid #dbdbdb}.is-bd-left[data-v-644ccde4]{border-left:1px solid #dbdbdb}.cl-777[data-v-644ccde4]{color:#777}.tag[data-v-644ccde4]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;padding:5px 10px}.property[data-v-644ccde4]{background-color:#0050ff;color:#fff}.value[data-v-644ccde4]{background-color:#23d160;color:#fff}.responsive[data-v-644ccde4]{background-color:#f5f5f5}",""])},gOg8:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mg-5px is-bd-bottom w-90pct"},t._l(t.data[0],function(e,i){return a("div",{key:i,staticClass:"dp-flex f-drt-row flex-1"},t._l(t.length,function(e,r){return a("div",{key:r,staticClass:"dp-flex w-100pct f-drt-column pd-10px is-bd-top is-bd-right jtf-ct-center",class:{"is-bd-left":0===r}},[t.isColorCode(t.data[r][i])?a("div",[a("div",{staticClass:"f-left w-30px h-30px bd-w-1px bd-st-solid bd-cl-light bd-rd-4px",style:{backgroundColor:t.data[r][i]}}),a("div",{staticClass:"f-left pd-t-5px pd-l-10px",class:{"f-w-bold cl-black":0===i,"cl-777":0!==i}},[t._v(t._s(t.data[r][i]))])]):a("span",{class:{"f-w-bold cl-black":0===i,"cl-777":0!==i}},[""!==t.type&&0!==i&&0===r?a("div",[a("div",{staticClass:"tag",class:t.type},[t._v("\n            "+t._s(t.data[r][i])+"\n         ")])]):a("div",[t._v("\n          "+t._s(t.data[r][i])+"\n        ")])])])}))}))};i._withStripped=!0;var r={render:i,staticRenderFns:[]};e.a=r},kxtF:function(t,e,a){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("table-atomic",{attrs:{data:this.responsive_data,type:"responsive"}})],1)};i._withStripped=!0;var r={render:i,staticRenderFns:[]};e.a=r},mjUD:function(t,e,a){"use strict";var i=a("L26m"),r=a("Lwyv");e.a={components:{TableAtomic:i.a,Responsive:r.a},data:function(){return{property:[["Class","mg-[value]-[responsive]","mg-t-[value]-[responsive]","mg-bt-[value]-[responsive]","mg-l-[value]-[responsive]","mg-r-[value]-[responsive]","mg-vtc-[value]-[responsive]","mg-hrzt-[value]-[responsive]"],["Property","margin","margin-top","margin-bottom","margin-left","margin-right","margin-top และ margin-bottom","margin-left และ margin-right"]],value:[["Class","auto","0px 1px 2px 3px 4px 5px 6px 7px 8px 9px 10px 12px 14px 15px 20px 25px 30px 50px 60px 90px 80px 90px 100px"],["Value Description",'ใช้สำหรับ "auto"',"0px 1px 2px 3px 4px 5px 6px 7px 8px 9px 10px 12px 14px 15px 20px 25px 30px 50px 60px 90px 80px 90px 100px"]]}}}},p5hY:function(t,e,a){"use strict";e.a={props:{data:{type:Array},type:{type:String,default:""}},computed:{length:function(){return Array(this.data.length).fill(0)}},methods:{isColorCode:function(t){return new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$").test(t)}}}}});