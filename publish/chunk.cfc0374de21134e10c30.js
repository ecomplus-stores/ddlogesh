/*! For license information please see chunk.cfc0374de21134e10c30.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{265:function(e,i,t){var s=t(270);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,t(207).default)("089613ef",s,!0,{})},267:function(e,i,t){"use strict";i.a=(e,i)=>e.sort(((e,t)=>{if(e.app_id===t.app_id)return 0;const s=i.indexOf(e.app_id),a=i.indexOf(t.app_id);return s>-1?a>-1?s<a?-1:1:s>-1?-1:1:a>-1?1:0}))},269:function(e,i,t){"use strict";t(265)},270:function(e,i,t){(i=t(206)(!0)).push([e.i,".shipping-calculator__input{max-width:150px}.shipping-calculator__services{font-size:var(--font-size-sm);max-width:370px}.shipping-calculator__services .active{cursor:auto}.shipping-calculator__option{display:flex;justify-content:space-between;width:100%}.shipping-calculator__option>small{min-width:70px;text-align:right}@media(min-width:1200px){.shipping-calculator__option{display:block;position:relative}.shipping-calculator__option>small{position:absolute;right:-5px;top:-5px}}.shipping-calculator__free-from-value{margin-top:var(--spacer-2)}.shipping-calculator__free-from-value .progress{height:1.5rem;margin-top:var(--spacer-1)}.shipping-calculator__free-from-value .progress-bar{background-color:var(--info)}","",{version:3,sources:["ShippingCalculator.scss"],names:[],mappings:"AAAA,4BAA4B,eAAe,CAAC,+BAA+B,6BAA6B,CAAC,eAAe,CAAC,uCAAuC,WAAW,CAAC,6BAA6B,YAAY,CAAC,6BAA6B,CAAC,UAAU,CAAC,mCAAmC,cAAc,CAAC,gBAAgB,CAAC,yBAAyB,6BAA6B,aAAa,CAAC,iBAAiB,CAAC,mCAAmC,iBAAiB,CAAC,UAAU,CAAC,QAAQ,CAAC,CAAC,sCAAsC,0BAA0B,CAAC,gDAAgD,aAAa,CAAC,0BAA0B,CAAC,oDAAoD,4BAA4B",file:"ShippingCalculator.scss",sourcesContent:[".shipping-calculator__input{max-width:150px}.shipping-calculator__services{font-size:var(--font-size-sm);max-width:370px}.shipping-calculator__services .active{cursor:auto}.shipping-calculator__option{display:flex;justify-content:space-between;width:100%}.shipping-calculator__option>small{min-width:70px;text-align:right}@media(min-width:1200px){.shipping-calculator__option{display:block;position:relative}.shipping-calculator__option>small{position:absolute;right:-5px;top:-5px}}.shipping-calculator__free-from-value{margin-top:var(--spacer-2)}.shipping-calculator__free-from-value .progress{height:1.5rem;margin-top:var(--spacer-1)}.shipping-calculator__free-from-value .progress-bar{background-color:var(--info)}"]}]),e.exports=i},278:function(e,i,t){"use strict";t(43),t(14);var s=t(34),a=t(36),o=t(52),n=t(104),r=t(53),p=t(2),l=t(267),c=t(268),u=t.n(c),h=t(271);const d="object"==typeof window&&window.localStorage,g="shipping-to-zip",m=e=>{const i={};return["product_id","variation_id","sku","name","quantity","inventory","currency_id","currency_symbol","price","final_price","dimensions","weight"].forEach((t=>{void 0!==e[t]&&(i[t]=e[t])})),i};var f={name:"ShippingCalculator",components:{CleaveInput:u.a,ShippingLine:h.a},props:{zipCode:String,canSelectServices:Boolean,canInputZip:{type:Boolean,default:!0},countryCode:{type:String,default:a.$ecomConfig.get("country_code")},shippedItems:{type:Array,default:()=>[]},shippingResult:{type:Array,default:()=>[]},shippingData:{type:Object,default:()=>({})},shippingAppsSort:{type:Array,default:()=>window.ecomShippingApps||[]}},data:()=>({localZipCode:null,localShippedItems:[],amountSubtotal:null,shippingServices:[],selectedService:null,hasPaidOption:!1,freeFromValue:null,isScheduled:!1,retryTimer:null,isWaiting:!1,hasCalculated:!1}),computed:{i19add$1ToEarn:()=>Object(o.a)(s.i),i19calculateShipping:()=>Object(o.a)(s.C),i19zipCode:()=>Object(o.a)(s.se),i19freeShipping:()=>Object(o.a)(s.zb).toLowerCase(),cleaveOptions(){return"BR"===this.countryCode?{blocks:[5,3],delimiter:"-"}:{blocks:[30]}},freeFromPercentage(){return this.hasPaidOption&&this.amountSubtotal<this.freeFromValue?Math.round(100*this.amountSubtotal/this.freeFromValue):null},productionDeadline(){let e=0;return this.shippedItems.forEach((i=>{if(i.quantity&&i.production_time){const{days:t,cumulative:s}=i.production_time,a=s?t*i.quantity:t;a>e&&(e=a)}})),e}},methods:{formatMoney:n.a,updateZipCode(){this.$emit("update:zip-code",this.localZipCode)},parseShippingOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.freeFromValue=null,this.shippingServices=[],e.length&&(e.forEach((e=>{const{validated:i,error:t,response:s}=e;if(i&&!t){s.shipping_services.forEach((i=>{this.shippingServices.push({app_id:e.app_id,...i})}));const i=s.free_shipping_from_value;i&&(!this.freeFromValue||this.freeFromValue>i)&&(this.freeFromValue=i)}})),this.shippingServices.length?(this.shippingServices=this.shippingServices.sort(((e,i)=>{const t=e.shipping_line.total_price-i.shipping_line.total_price;return t<0?-1:t>0?1:e.shipping_line.delivery_time&&i.shipping_line.delivery_time&&e.shipping_line.delivery_time.days<i.shipping_line.delivery_time.days?-1:1})),this.setSelectedService(0),this.hasPaidOption=Boolean(this.shippingServices.find((e=>e.shipping_line.total_price||e.shipping_line.price))),Array.isArray(this.shippingAppsSort)&&this.shippingAppsSort.length&&(this.shippingServices=Object(l.a)(this.shippingServices,this.shippingAppsSort))):i?this.scheduleRetry():this.fetchShippingServices(!0))},scheduleRetry(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4;clearTimeout(this.retryTimer),this.retryTimer=setTimeout((()=>{this.localZipCode&&!this.shippingServices.length&&this.shippedItems.length&&this.fetchShippingServices(!0)}),e)},fetchShippingServices(e){this.isScheduled||(this.isScheduled=!0,setTimeout((()=>{this.isScheduled=!1;const{storeId:i}=this,t={...this.shippingData,to:{zip:this.localZipCode,...this.shippingData.to}};this.localShippedItems.length&&(t.items=this.localShippedItems,t.subtotal=this.amountSubtotal),this.isWaiting=!0,Object(p.c)({url:"/calculate_shipping.json",method:"POST",storeId:i,data:t}).then((i=>{let{data:t}=i;return this.parseShippingOptions(t.result,e)})).catch((i=>{e||this.scheduleRetry(4e3),console.error(i)})).finally((()=>{this.hasCalculated=!0,this.isWaiting=!1}))}),this.hasCalculated?150:50))},submitZipCode(){this.updateZipCode(),d&&d.setItem(g,this.localZipCode),this.fetchShippingServices()},setSelectedService(e){this.canSelectServices&&(this.$emit("select-service",this.shippingServices[e]),this.selectedService=e)}},watch:{shippedItems:{handler(){setTimeout((()=>{this.localShippedItems=this.shippedItems.map(m);const{amountSubtotal:e}=this;this.amountSubtotal=this.shippedItems.reduce(((e,i)=>e+Object(r.a)(i)*i.quantity),0),this.hasCalculated&&(this.canSelectServices||e!==this.amountSubtotal||!this.shippingServices.length&&!this.isWaiting)&&this.fetchShippingServices()}),50)},deep:!0,immediate:!0},localZipCode(e){"BR"===this.countryCode&&8===e.replace(/\D/g,"").length&&this.submitZipCode()},zipCode:{handler(e){e&&(this.localZipCode=e)},immediate:!0},shippingResult:{handler(e){e.length&&this.parseShippingOptions(e)},immediate:!0}},created(){if(!this.zipCode&&d){const e=d.getItem(g);e&&(this.localZipCode=e)}}},v=f,_=(t(269),t(61)),A=Object(_.a)(v,(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"shipping-calculator"},[e.canInputZip?t("form",{staticClass:"shipping-calculator__form",on:{submit:function(i){return i.preventDefault(),e.submitZipCode.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"shipping-calculator-zip"}},[e._v(" "+e._s(e.i19calculateShipping)+" ")]),t("div",{staticClass:"input-group"},[t("cleave-input",{staticClass:"form-control shipping-calculator__input",attrs:{type:"tel",id:"shipping-calculator-zip",placeholder:e.i19zipCode,"aria-label":e.i19zipCode,options:e.cleaveOptions},model:{value:e.localZipCode,callback:function(i){e.localZipCode=i},expression:"localZipCode"}}),t("div",{staticClass:"input-group-append"},[t("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit","aria-label":e.i19calculateShipping}},[t("i",{staticClass:"i-shipping-fast"})])])],1)])]):e._e(),t("div",{staticClass:"shipping-calculator__services"},[t("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp"}},[e.isWaiting?t("div",{key:"waiting",staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[t("span",{staticClass:"sr-only"},[e._v("Loading...")])]):t("div",{key:"services",staticClass:"list-group"},e._l(e.shippingServices,(function(i,s){return t(e.canSelectServices?"a":"div",{key:s,tag:"component",staticClass:"list-group-item",class:{"list-group-item-action":e.canSelectServices,active:e.canSelectServices&&e.selectedService===s},attrs:{href:e.canSelectServices&&"#"},on:{click:function(i){return i.preventDefault(),e.setSelectedService(s)}}},[t("span",{staticClass:"shipping-calculator__option"},[e._t("option",(function(){return[t("shipping-line",{attrs:{"shipping-line":i.shipping_line,"production-deadline":e.productionDeadline}}),t("small",[e._v(e._s(i.label))])]}),null,{service:i})],2)])})),1)]),t("transition",{attrs:{"enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},[e.freeFromPercentage?t("div",{staticClass:"shipping-calculator__free-from-value"},[e._t("free-from-value",(function(){return[t("span",[e._v(" "+e._s(e.i19add$1ToEarn.replace("$1",e.formatMoney(e.freeFromValue-e.amountSubtotal)))+" "),t("strong",[e._v(e._s(e.i19freeShipping))])]),e.freeFromPercentage>=33?t("div",{staticClass:"progress"},[t("div",{staticClass:"progress-bar progress-bar-striped",style:"width: "+e.freeFromPercentage+"%",attrs:{role:"progressbar","aria-valuenow":e.freeFromPercentage,"aria-valuemin":"0","aria-valuemax":"100"}},[t("span",[e._v(" "+e._s(e.i19freeShipping)+" "),t("i",{staticClass:"i-truck mx-1"}),t("strong",[e._v(e._s(e.freeFromPercentage)+"%")])])])]):e._e()]}),null,{amountSubtotal:e.amountSubtotal,freeFromValue:e.freeFromValue,freeFromPercentage:e.freeFromPercentage})],2):e._e()])],1)])}),[],!1,null,null,null);i.a=A.exports},279:function(e,i,t){"use strict";i.a=function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;for(;e.offsetParent;)i+=e.offsetTop,e=e.offsetParent;return window.scroll({top:i,behavior:"smooth"})}},403:function(e,i,t){"use strict";t.r(i);var s=t(44),a=t(106),o=t(303);i.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"product";const t=document.getElementById(i);if(t){const n=document.getElementById("".concat(i,"-dock")),r=Boolean(n),{storefront:p}=window;let l,c,u,h;p&&(l=p.getScopedSlots,c=p.context&&p.context.body,u=p.theme&&p.theme.product);const d=()=>{const e=document.getElementById("product-loading");e&&e.remove(),delete t.dataset.toRender};r&&(h=d);const{buyText:g,strHasQuantitySelector:m,strHasPromotionTimer:f,lowQuantityToWarn:v,maxVariationOptionsBtns:_}=e,A=(e,i)=>"_"===e?Boolean(u&&u[i]):!!e&&Boolean(e.trim());new s.a({render:s=>s(o.default,{attrs:{id:n?null:i},props:{...e.props,product:r&&c&&c.available&&Object(a.a)(c)?c:null,buyText:g,hasQuantitySelector:A(m,"hasQuantitySelector"),hasPromotionTimer:A(f,"hasPromotionTimer"),lowQuantityToWarn:v,maxVariationOptionsBtns:_,isSSR:r},on:{"update:product"(i){r||d(),e.$emit&&e.$emit("update:product",i)}},scopedSlots:Object.assign({buy:e.buy?function(){return s("span",{domProps:{innerHTML:e.buy}})}:void 0},"function"==typeof l?l(t,s,!n):{})}),mounted:h}).$mount(n||t)}}}},0,[30,31]]);
//# sourceMappingURL=chunk.cfc0374de21134e10c30.js.map