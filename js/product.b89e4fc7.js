(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["product"],{"15fd7":function(t,e,a){},"227e":function(t,e,a){"use strict";var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"container header"},[a("h1",{staticClass:"heading"},[t._t("default")],2),t.cart?a("router-link",{attrs:{to:"/cart"}},[a("v-button-icon",{attrs:{icon:"shopping-cart"}})],1):t._e(),t.search?a("router-link",{attrs:{to:"/search"}},[a("v-button-icon",{attrs:{icon:"search"}})],1):t._e()],1)},r=[],i=a("d4ec"),n=a("262e"),s=a("2caf"),o=a("9ab4"),u=a("1b40"),d=a("79c0"),p=function(t){Object(n["a"])(a,t);var e=Object(s["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);Object(o["a"])([Object(u["b"])({default:!1,required:!1,type:Boolean})],p.prototype,"cart",void 0),Object(o["a"])([Object(u["b"])({default:!1,required:!1,type:Boolean})],p.prototype,"search",void 0),p=Object(o["a"])([Object(u["a"])({components:{VButtonIcon:d["a"]}})],p);var l=p,b=l,f=(a("ca24"),a("2877")),h=Object(f["a"])(b,c,r,!1,null,"273a7fe4",null);e["a"]=h.exports},"45ef":function(t,e,a){},"48b2":function(t,e,a){"use strict";a("15fd7")},"7e38":function(t,e,a){"use strict";a.r(e);var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"frag",rawName:"v-frag"}]},[t.loading?[t._v(" Loading... ")]:[a("the-header",{attrs:{cart:"",search:""}},[t._v(t._s(t.product.company))]),a("section",{staticClass:"container product"},[a("h1",{staticClass:"title--mobile"},[t._v(t._s(t.product.productName))]),a("p",{staticClass:"price--mobile"},[t._v(t._s(t.price))]),a("div",{staticClass:"image__container"},[a("img",{staticClass:"image",attrs:{alt:t.product.productName,src:t.product.image}})]),a("div",{staticClass:"details"},[a("h1",{staticClass:"title--desktop"},[t._v(t._s(t.product.productName))]),a("p",{staticClass:"price--desktop"},[t._v(t._s(t.price))]),a("div",{staticClass:"quantity"},[a("label",{attrs:{for:"q-"+t.product.id}},[t._v("Quantity:")]),a("v-input",{attrs:{max:100,min:1,type:"number"},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}})],1),a("v-button",{on:{click:t.addProductToACart}},[t._v("Add to cart")]),a("p",{staticClass:"description"},[t._v(t._s(t.product.description))])],1)])]],2)},r=[],i=a("d4ec"),n=a("bee2"),s=a("262e"),o=a("2caf"),u=(a("b680"),a("fb6a"),a("7db0"),a("9ab4")),d=a("1b40"),p=a("51c5"),l=a("a65b"),b=a("227e"),f=function(t){Object(s["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.quantity=1,t}return Object(n["a"])(a,[{key:"addProductToACart",value:function(){this.$store.dispatch("addProductToACart",{product:this.product,quantity:this.quantity}),this.$router.back()}},{key:"loading",get:function(){return this.$store.getters.getProductLoading}},{key:"price",get:function(){return this.product?"$".concat((parseFloat(this.product.price.slice(1))*this.quantity).toFixed(2)):"".concat((0).toFixed(2))}},{key:"product",get:function(){var t,e=this;return null!==(t=this.products.find((function(t){return t.id===parseInt(e.$route.params.id)})))&&void 0!==t?t:null}},{key:"products",get:function(){return this.$store.getters.getProductItems}}]),a}(d["c"]);f=Object(u["a"])([Object(d["a"])({components:{VButton:p["a"],VInput:l["a"],TheHeader:b["a"]}})],f);var h=f,v=h,_=(a("48b2"),a("2877")),m=Object(_["a"])(v,c,r,!1,null,"3c4ebd91",null);e["default"]=m.exports},ca24:function(t,e,a){"use strict";a("45ef")}}]);
//# sourceMappingURL=product.b89e4fc7.js.map