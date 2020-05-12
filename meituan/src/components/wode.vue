<template>
  <div class="wode">
   <!-- <h1>{{ msg }}</h1> -->
	<div class="touxiang">
		<div class="my"></div>
		<div class="names">af3412jkl3719rte3</div>
	</div>
	<div class="liebiao">
		<ul>
			<li v-for="liebiao in liebiao">
				<router-link :to="{name:'wd' ,params:{name:'liebiao'}}">
					<img :src="liebiao.path" alt="">
					<div class="title">
						<p class="btn">{{liebiao.btn}}</p>
						<p class="btm">{{liebiao.btm}}</p>
					</div>	
				</router-link>
			</li>		
		</ul>
	</div>
	<div class="main">
		<div class="kefu">客服电话：10109777</div>
		<p>服务时间：9:00-23:00</p>
	</div>
  </div> 
</template>

<script>
export default {
  name: 'wode',
  data () {
    return {
     // msg: 'three'
	 liebiao:[
	 	{
	 		 path:require('@/assets/imgs/w1.png'),
	 		btn:'美团红包',
	 		btm:'>'
	 	},
	 	{
	 		 path:require('@/assets/imgs/w2.png'),
	 		btn:'收货地址',
	 		btm:'>'
	 	},
	 	{
	 		path:require('@/assets/imgs/w3.png'),
	 		btn:'常见问题',
	 		btm:'>'
	 	},
	 	{
	 		 path:require('@/assets/imgs/w4.png'),
	 		btn:'美团协议说明',
	 		btm:'>'
	 	},
	 	{
	 		 path:require('@/assets/imgs/w5.png'),
	 		btn:'退出登录',
	 		btm:'>'
	 	},
	 ]
    }
	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
				@import "../assets/css/wode.less";
</style>
