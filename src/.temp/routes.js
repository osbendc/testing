const c1 = () => import(/* webpackChunkName: "page--src--templates--product-vue" */ "/Users/osbendc/Desktop/Github/vinushut-vue/src/templates/Product.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--collection-vue" */ "/Users/osbendc/Desktop/Github/vinushut-vue/src/templates/Collection.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--cart-vue" */ "/Users/osbendc/Desktop/Github/vinushut-vue/src/pages/Cart.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--collections-vue" */ "/Users/osbendc/Desktop/Github/vinushut-vue/src/pages/Collections.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/osbendc/Desktop/Github/vinushut-vue/src/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/osbendc/Desktop/Github/vinushut-vue/src/pages/Index.vue")

export default [
  {
    path: "/product/:handle/",
    component: c1
  },
  {
    path: "/collection/:handle/",
    component: c2
  },
  {
    path: "/cart/",
    component: c3
  },
  {
    path: "/collections/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
