import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _662c9f8e = () => import('..\\src\\pages\\main.vue' /* webpackChunkName: "pages_main" */).then(m => m.default || m)
const _721cec08 = () => import('..\\src\\pages\\mainComponents\\right.vue' /* webpackChunkName: "pages_mainComponents_right" */).then(m => m.default || m)
const _7b82e7df = () => import('..\\src\\pages\\mainComponents\\footer.vue' /* webpackChunkName: "pages_mainComponents_footer" */).then(m => m.default || m)
const _064057e3 = () => import('..\\src\\pages\\mainComponents\\blogContent.vue' /* webpackChunkName: "pages_mainComponents_blogContent" */).then(m => m.default || m)
const _3e79b037 = () => import('..\\src\\pages\\detail\\detail.vue' /* webpackChunkName: "pages_detail_detail" */).then(m => m.default || m)
const _d44d465e = () => import('..\\src\\pages\\list\\list.vue' /* webpackChunkName: "pages_list_list" */).then(m => m.default || m)
const _7ea19f32 = () => import('..\\src\\pages\\mainComponents\\ad.vue' /* webpackChunkName: "pages_mainComponents_ad" */).then(m => m.default || m)
const _23308c66 = () => import('..\\src\\pages\\mainComponents\\blogHead.vue' /* webpackChunkName: "pages_mainComponents_blogHead" */).then(m => m.default || m)
const _5c8b174b = () => import('..\\src\\pages\\mainComponents\\left.vue' /* webpackChunkName: "pages_mainComponents_left" */).then(m => m.default || m)
const _70b5a3c9 = () => import('..\\src\\pages\\list\\list.vue' /* webpackChunkName: "" */).then(m => m.default || m)
const _26745a69 = () => import('..\\src\\pages\\detail\\detail.vue' /* webpackChunkName: "" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/main",
			component: _662c9f8e,
			name: "main"
		},
		{
			path: "/mainComponents/right",
			component: _721cec08,
			name: "mainComponents-right"
		},
		{
			path: "/mainComponents/footer",
			component: _7b82e7df,
			name: "mainComponents-footer"
		},
		{
			path: "/mainComponents/blogContent",
			component: _064057e3,
			name: "mainComponents-blogContent"
		},
		{
			path: "/detail/detail",
			component: _3e79b037,
			name: "detail-detail"
		},
		{
			path: "/list/list",
			component: _d44d465e,
			name: "list-list"
		},
		{
			path: "/mainComponents/ad",
			component: _7ea19f32,
			name: "mainComponents-ad"
		},
		{
			path: "/mainComponents/blogHead",
			component: _23308c66,
			name: "mainComponents-blogHead"
		},
		{
			path: "/mainComponents/left",
			component: _5c8b174b,
			name: "mainComponents-left"
		},
		{
			path: "/",
			component: _70b5a3c9,
			name: "index"
		},
		{
			path: "/detail/:id",
			component: _26745a69,
			name: "detail"
		}
    ],
    
    
    fallback: false
  })
}
