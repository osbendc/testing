(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{iyQ6:function(t,e,s){"use strict";s.r(e);s("TeQF");var n=s("p6sL"),o=s.n(n),i=(s("e43N"),s("aiyx"),{name:"Slider",components:{VueSlickCarousel:o.a},data:function(){return{settings:{dots:!0,arrows:!0,edgeFriction:.35,infinite:!1,speed:500,slidesToShow:1,slidesToScroll:1},imgs:["https://saboryestilo.com.mx/wp-content/uploads/2019/03/tipos-de-vinos-1200x720.jpg","https://novili.com.co/blog/wp-content/uploads/2018/05/vinosnobles-blog-cuerpo-del-vino-1-1170x786.jpg","https://saboryestilo.com.mx/wp-content/uploads/2019/03/tipos-de-vinos-1200x720.jpg"]}}}),a=(s("tRHB"),s("KHd+")),r={metaInfo:{title:"Home"},components:{Slider:Object(a.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("VueSlickCarousel",t._b({scopedSlots:t._u([{key:"prevArrow",fn:function(e){return[s("div",{staticClass:"custom-arrow"},[t._v("\n        test prev\n      ")])]}},{key:"nextArrow",fn:function(e){return[s("div",{staticClass:"custom-arrow"},[t._v("\n        test next\n      ")])]}}])},"VueSlickCarousel",t.settings,!1),t._l(t.imgs,(function(t){return s("div",{staticClass:"test"},[s("div",{staticClass:"test-img",style:{backgroundImage:"url("+t+")"}})])})),0)],1)}),[],!1,null,null,null).exports},computed:{featuredProducts:function(){return this.$page.allShopifyProduct.edges.filter((function(t){return!0===t.node.availableForSale}))}},methods:{selectProduct:function(t){this.$router.push({path:"/product/"+t.node.handle})}}},l=null,c=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",[s("Slider"),s("div",{staticClass:"hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16"},[s("div",{staticClass:"text-4xl font-bold w-full text-center"},[s("div",{staticClass:"leading-tight font-serif"},[s("a",{attrs:{href:"https://gridsomify.com",alt:"Gridsome Shopify",target:"_new"}},[t._v("\n            Test demo VINUSHOT\n          ")]),t._v(".\n        ")])])]),s("div",{staticClass:"flex flex-wrap mb-4 max-w-5xl mx-auto",attrs:{id:"products"}},t._l(t.featuredProducts,(function(e){var n=e.node;return s("div",{staticClass:"md:w-1/2 lg:w-1/3 w-full px-2",on:{click:function(e){return t.selectProduct({node:n})}}},[s("div",{staticClass:"mx-auto max-w-sm overflow-hiddenmx-auto cursor-pointer duration-500 transform hover:scale-110"},[s("div",{staticClass:"w-full rounded-xl h-64 bg-no-repeat bg-contain bg-bottom",style:{"background-image":"url("+n.images[0].src+")"}}),s("div",{staticClass:"px-6 pb-4 pt-8 mx-4 -mt-4 mb-4 relative rounded-xl bg-white opacity-75 hover:opacity-100"},[s("div",{staticClass:"font-bold text-xl mb-2"},[t._v(t._s(n.title))]),s("div",{staticClass:"flex text-sm"},[s("div",{staticClass:"w-2/3 font-bold"},[n.priceRange.minVariantPrice.amount?s("span",[t._v("\n                      Price : "+t._s(n.priceRange.minVariantPrice.amount)+"\n                    ")]):t._e()])])])])])})),0)],1)}),[],!1,null,null,null);"function"==typeof l&&l(c);e.default=c.exports},tRHB:function(t,e,s){"use strict";var n=s("zyAn");s.n(n).a},zyAn:function(t,e,s){}}]);