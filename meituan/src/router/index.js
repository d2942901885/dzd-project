import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

import shouye from '@/components/shouye'
import dingdan from '@/components/dingdan'
import wode from '@/components/wode'

import waimai from '@/components/waimai'
import shangping from '@/components/shangping'
import wd from '@/components/wd'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
	  children:[
		  {
			  path:'',
			  name:'shouye',
			  component:shouye
		  },
		  {
		  	  path:'dingdan',
		  	  name:'dingdan',
		  	  component:dingdan
		  },
		  {
		  	  path:'wode',
		  	  name:'wode',
		  	  component:wode
		  },
	  ]
    },
	{
		path:'/waimai/:name',
		name:'waimai',
		component:waimai
	},
	{
		path:'/shangping/:name',
		name:'shangping',
		component:shangping
	},
	{
		path:'/wd/:name',
		name:'wd',
		component:wd
	},
  ]
})
