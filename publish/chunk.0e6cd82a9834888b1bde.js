(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{417:function(t,e,n){"use strict";n.r(e);var o=n(36),c=n(53);const a=o.$ecomConfig.get("currency")||"BRL",r=t=>{const e={currency:a,content_ids:[t.sku],content_name:t.name,value:Object(c.a)(t),content_type:"product"};return t.categories&&t.categories.length&&(e.content_category=t.category_tree||t.categories[0].name),e};var s=t=>{const e=window.storefront&&window.storefront.context;e&&"products"===e.resource&&t("ViewContent",r(e.body))},i=n(12),u=n(40),d=(t,e)=>{const n=window.storefrontApp&&window.storefrontApp.router;if(n){let o,c,r;const s=t=>{const{amount:e}=t||window.storefrontApp,n={value:e&&e.total||i.a.data&&i.a.data.subtotal||0,currency:a,contents:[],content_type:"product"};return i.a.data&&Array.isArray(i.a.data.items)&&i.a.data.items.forEach((t=>{let{sku:e,quantity:o}=t;n.contents.push({id:e,quantity:o})})),n},d=(e,n)=>{const a=s(),r={...a,checkout_step:e,checkout_option:n};e<=1||!o?(t("InitiateCheckout",a),t("Checkout",r,!0),o=!0):c||(t("CheckoutOption",r,!0),c=!0)},f=(n,o)=>{if(!r&&!0!==e.disablePurchase){let e,c;if(o)try{e=JSON.parse(o)}catch(t){e=null}c=e&&e.number?"".concat(e.number,":r").concat(parseInt(1e3*Math.random(),10)):n,t("Purchase",{...s(e),order_id:n,eventID:c}),r=!0,u.a.requestApi("/orders/".concat(n,"/metafields.json"),"POST",{namespace:"fb",field:"pixel",value:JSON.stringify({eventID:c,userAgent:navigator.userAgent})})}};let l;const p=t=>{let{name:e,params:n}=t;switch(e){case"cart":d(1,"Review Cart");break;case"checkout":d(2,"Confirm Purchase");break;case"confirmation":clearTimeout(l),n.json?f(n.id,decodeURIComponent(n.json)):l=setTimeout((()=>{f(n.id)}),1500)}};n.currentRoute&&p(n.currentRoute),n.afterEach(p)}},f=t=>{i.a.on("addItem",(e=>{let{item:n}=e;t("AddToCart",r(n))}))};e.default=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("function"==typeof window.fbq){const e=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t.debug&&console.log("fbq",e,n);const c=o?"trackCustom":"track";if(n.eventID){const t=n.eventID;delete n.eventID,window.fbq(c,e,n,{eventID:t})}else window.fbq(c,e,n)};s(e),d(e,t),f(e)}}}}]);