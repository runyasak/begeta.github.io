webpackJsonp([10],{L26m:function(t,e,a){"use strict";var i=a("p5hY"),p=a("gOg8"),s=!1;var d=function(t){s||a("MYkw")},n=a("VU/8")(i.a,p.a,!1,d,"data-v-644ccde4",null);n.options.__file="components/TableAtomic.vue",e.a=n.exports},Lwyv:function(t,e,a){"use strict";var i=a("SdWF"),p=a("kxtF"),s=a("VU/8")(i.a,p.a,!1,null,null,null);s.options.__file="components/Responsive.vue",e.a=s.exports},MYkw:function(t,e,a){var i=a("T0XP");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("603ce41e",i,!1,{sourceMap:!1})},SdWF:function(t,e,a){"use strict";var i=a("L26m");e.a={components:{TableAtomic:i.a},data:function(){return{responsive_data:[["Class","mobile","tablet","tablet-only","desktop","desktop-only","widescreen"],["Breakpoints","up to 768px","from 769px","769px to 1023px","from 1024px","1024px to 1215px","from 1216px"]]}}}},T0XP:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".is-bd-top[data-v-644ccde4]{border-top:1px solid #dbdbdb}.is-bd-right[data-v-644ccde4]{border-right:1px solid #dbdbdb}.is-bd-bottom[data-v-644ccde4]{border-bottom:1px solid #dbdbdb}.is-bd-left[data-v-644ccde4]{border-left:1px solid #dbdbdb}.cl-777[data-v-644ccde4]{color:#777}.tag[data-v-644ccde4]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;padding:5px 10px}.property[data-v-644ccde4]{background-color:#0050ff;color:#fff}.value[data-v-644ccde4]{background-color:#23d160;color:#fff}.responsive[data-v-644ccde4]{background-color:#f5f5f5}",""])},XQiI:function(t,e,a){"use strict";var i=a("L26m"),p=a("Lwyv");e.a={components:{TableAtomic:i.a,Responsive:p.a},data:function(){return{property:[["Class","pd-[value]-[responsive]","pd-t-[value]-[responsive]","pd-bt-[value]-[responsive]","pd-l-[value]-[responsive]","pd-r-[value]-[responsive]","pd-vtc-[value]-[responsive]","pd-hrzt-[value]-[responsive]"],["Property","padding","padding-top","padding-bottom","padding-left","padding-right","padding-top และ padding-bottom","padding-left และ padding-right"]],value:[["Class","auto","0px 1px 2px 3px 4px 5px 6px 7px 8px 9px 10px 12px 14px 15px 20px 25px 30px 50px 60px 90px 80px 90px 100px"],["Value Description",'ใช้สำหรับ "auto"',"0px 1px 2px 3px 4px 5px 6px 7px 8px 9px 10px 12px 14px 15px 20px 25px 30px 50px 60px 90px 80px 90px 100px"]]}}}},"ZR/Z":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pd-10px"},[a("h1",[t._v("Padding")]),a("div",[t._v("เป็น Atomic Class ที่ใช้จัดการ Padding ประกอบด้วย")]),a("ui",[a("li",[t._v("Padding")]),a("li",[t._v("Padding Top")]),a("li",[t._v("Padding Bottom")]),a("li",[t._v("Padding Left")]),a("li",[t._v("Padding Right")]),a("li",[t._v("Padding Vertical")]),a("li",[t._v("Padding Horizontal")])]),a("h3",[t._v("Property")]),a("table-atomic",{attrs:{data:t.property,type:"property"}}),a("h3",[t._v("Value")]),a("table-atomic",{attrs:{data:t.value,type:"value"}}),t._m(0),a("responsive"),t._m(1)],1)};i._withStripped=!0;var p={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Responsive "),e("span",{staticClass:"cl-success"},[this._v("YES")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Hover "),e("span",{staticClass:"cl-danger"},[this._v("NO")])])}]};e.a=p},gOg8:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mg-5px is-bd-bottom w-90pct"},t._l(t.data[0],function(e,i){return a("div",{key:i,staticClass:"dp-flex f-drt-row flex-1"},t._l(t.length,function(e,p){return a("div",{key:p,staticClass:"dp-flex w-100pct f-drt-column pd-10px is-bd-top is-bd-right jtf-ct-center",class:{"is-bd-left":0===p}},[t.isColorCode(t.data[p][i])?a("div",[a("div",{staticClass:"f-left w-30px h-30px bd-w-1px bd-st-solid bd-cl-light bd-rd-4px",style:{backgroundColor:t.data[p][i]}}),a("div",{staticClass:"f-left pd-t-5px pd-l-10px",class:{"f-w-bold cl-black":0===i,"cl-777":0!==i}},[t._v(t._s(t.data[p][i]))])]):a("span",{class:{"f-w-bold cl-black":0===i,"cl-777":0!==i}},[""!==t.type&&0!==i&&0===p?a("div",[a("div",{staticClass:"tag",class:t.type},[t._v("\n            "+t._s(t.data[p][i])+"\n         ")])]):a("div",[t._v("\n          "+t._s(t.data[p][i])+"\n        ")])])])}))}))};i._withStripped=!0;var p={render:i,staticRenderFns:[]};e.a=p},kxtF:function(t,e,a){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("table-atomic",{attrs:{data:this.responsive_data,type:"responsive"}})],1)};i._withStripped=!0;var p={render:i,staticRenderFns:[]};e.a=p},p5hY:function(t,e,a){"use strict";e.a={props:{data:{type:Array},type:{type:String,default:""}},computed:{length:function(){return Array(this.data.length).fill(0)}},methods:{isColorCode:function(t){return new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$").test(t)}}}},r1ki:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("XQiI"),p=a("ZR/Z"),s=a("VU/8")(i.a,p.a,!1,null,null,null);s.options.__file="pages/padding.vue",e.default=s.exports}});