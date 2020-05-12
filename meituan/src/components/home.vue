<template>
  <div class="home">
	  <router-view></router-view>
   <!-- <h1>{{ msg }}</h1> -->
   <div class="footer">
	   <ul>
	   <!-- 	<li>
			<router-link :to="{name:'shouye'}" class="active">首页
						<img src="../assets/imgs/d1.png" alt="">
			</router-link>
		</li>
		<li><router-link :to="{name:'dingdan'}">订单</router-link></li>
		<li><router-link :to="{name:'wode'}">我的</router-link></li> -->
		<li v-for="tab in footer" @click="changecolor(tab)">
			<router-link :to="{name:tab.garget}" :class="{active:tab.isactive}">
				<div class="navss">
					<p class="navimg"><img :src="tab.path" alt=""></p>
					<p class="navtext">{{tab.name}}</p>
				</div>	
			</router-link>
		</li>
	   </ul>
	</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '首页', 
	  footer:[
		  {
			path:require('../assets/imgs/d1.png'),
			name:'首页',
			garget:'shouye',
			isactive:true	  
		  },
		  {
			path:require('@/assets/imgs/d2.png'),
		  	name:'定单',
		    garget:'dingdan',
			isactive:false	  
		  },
		  {
			path:require('@/assets/imgs/d6.png'),
		  	name:'我的',
			garget:'wode',
		    isactive:false	  
		  },
	  ]
    }
  },
	methods:{
		changecolor(obj){
			//console.log(obj );
			this.footer.forEach(function(val){
				val.isactive = false; 
			})
			obj.isactive = true;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	 @import "../assets/css/style.less";
</style>
