webpackJsonp([17],{L26m:function(t,e,s){"use strict";var a=s("p5hY"),o=s("gOg8"),r=!1;var i=function(t){r||s("MYkw")},n=s("VU/8")(a.a,o.a,!1,i,"data-v-644ccde4",null);n.options.__file="components/TableAtomic.vue",e.a=n.exports},L72f:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pd-10px"},[s("h1",[t._v("Cursor")]),s("div",[t._v("เป็น Atomic Class ที่ใช้จัดการ Style ที่เกี่ยวกับ Cursor ประกอบด้วย")]),s("h3",[t._v("Property")]),s("table-atomic",{attrs:{data:t.property,type:"property"}}),s("h3",[t._v("Value")]),s("table-atomic",{attrs:{data:t.value,type:"value"}}),t._m(0),s("responsive"),t._m(1)],1)};a._withStripped=!0;var o={render:a,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Responsive "),e("span",{staticClass:"cl-success"},[this._v("YES")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Hover "),e("span",{staticClass:"cl-danger"},[this._v("NO")])])}]};e.a=o},Lwyv:function(t,e,s){"use strict";var a=s("SdWF"),o=s("kxtF"),r=s("VU/8")(a.a,o.a,!1,null,null,null);r.options.__file="components/Responsive.vue",e.a=r.exports},MYkw:function(t,e,s){var a=s("T0XP");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("603ce41e",a,!1,{sourceMap:!1})},SdWF:function(t,e,s){"use strict";var a=s("L26m");e.a={components:{TableAtomic:a.a},data:function(){return{responsive_data:[["Class","mobile","tablet","tablet-only","desktop","desktop-only","widescreen"],["Breakpoints","up to 768px","from 769px","769px to 1023px","from 1024px","1024px to 1215px","from 1216px"]]}}}},T0XP:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".is-bd-top[data-v-644ccde4]{border-top:1px solid #dbdbdb}.is-bd-right[data-v-644ccde4]{border-right:1px solid #dbdbdb}.is-bd-bottom[data-v-644ccde4]{border-bottom:1px solid #dbdbdb}.is-bd-left[data-v-644ccde4]{border-left:1px solid #dbdbdb}.cl-777[data-v-644ccde4]{color:#777}.tag[data-v-644ccde4]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;padding:5px 10px}.property[data-v-644ccde4]{background-color:#0050ff;color:#fff}.value[data-v-644ccde4]{background-color:#23d160;color:#fff}.responsive[data-v-644ccde4]{background-color:#f5f5f5}",""])},WCX0:function(t,e,s){"use strict";var a=s("L26m"),o=s("Lwyv");e.a={components:{TableAtomic:a.a,Responsive:o.a},data:function(){return{property:[["Class","cs-[value]-[responsive]"],["Property","cursor"]],value:[["Class","all-scroll","crosshair","default","text","help","move","not-allowed","none","pointer","progress","zoom-in","zoom-out"],["Value Description",'สำหรับ "all-scroll"','สำหรับ "crosshair"','สำหรับ "default"','สำหรับ "text"','สำหรับ "help"','สำหรับ "move"','สำหรับ "not-allowed"','สำหรับ "none"','สำหรับ "pointer"','สำหรับ "progress"','สำหรับ "zoom-in"','สำหรับ "zoom-out"']]}}}},"WfV/":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("WCX0"),o=s("L72f"),r=s("VU/8")(a.a,o.a,!1,null,null,null);r.options.__file="pages/cursor.vue",e.default=r.exports},gOg8:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mg-5px is-bd-bottom w-90pct"},t._l(t.data[0],function(e,a){return s("div",{key:a,staticClass:"dp-flex f-drt-row flex-1"},t._l(t.length,function(e,o){return s("div",{key:o,staticClass:"dp-flex w-100pct f-drt-column pd-10px is-bd-top is-bd-right jtf-ct-center",class:{"is-bd-left":0===o}},[t.isColorCode(t.data[o][a])?s("div",[s("div",{staticClass:"f-left w-30px h-30px bd-w-1px bd-st-solid bd-cl-light bd-rd-4px",style:{backgroundColor:t.data[o][a]}}),s("div",{staticClass:"f-left pd-t-5px pd-l-10px",class:{"f-w-bold cl-black":0===a,"cl-777":0!==a}},[t._v(t._s(t.data[o][a]))])]):s("span",{class:{"f-w-bold cl-black":0===a,"cl-777":0!==a}},[""!==t.type&&0!==a&&0===o?s("div",[s("div",{staticClass:"tag",class:t.type},[t._v("\n            "+t._s(t.data[o][a])+"\n         ")])]):s("div",[t._v("\n          "+t._s(t.data[o][a])+"\n        ")])])])}))}))};a._withStripped=!0;var o={render:a,staticRenderFns:[]};e.a=o},kxtF:function(t,e,s){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("table-atomic",{attrs:{data:this.responsive_data,type:"responsive"}})],1)};a._withStripped=!0;var o={render:a,staticRenderFns:[]};e.a=o},p5hY:function(t,e,s){"use strict";e.a={props:{data:{type:Array},type:{type:String,default:""}},computed:{length:function(){return Array(this.data.length).fill(0)}},methods:{isColorCode:function(t){return new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$").test(t)}}}}});