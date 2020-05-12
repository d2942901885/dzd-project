<template>
  <div class="shouye">
   <!-- <h1>{{ msg }}</h1> -->
	<header class="tops">
		<div class="address">
			<div class="add"></div>
			<div class="ress">重庆市酉阳县土家族苗族自治县城南街道</div>
		</div>
		<div class="lingsheng"></div>
	</header>
	<main class="zhuti">
		<div class="inpt">
		<!-- 	<img src="../assets/imgs/sousuo.png" alt=""> -->
			<input class="inp" type="text" placeholder="登山步小吃烧烤">
			<div class="ss">
				<span>烧烤</span>
				<span>奶茶</span>
				<span>烧烤外卖</span>
				<span>德克士</span>
				<span>烤鱼</span>
			</div>
		</div>
		<div class="box">
				<ul class="imgslist">
					<li  class="item" style="display: block;"><a href=""><img src="../assets/imgs/a2.jpg" alt=""></a></li>
					<li class="item"><a href=""><img src="../assets/imgs/a3.jpg" alt=""></a></li>
					<li class="item"><a href=""><img src="../assets/imgs/a6.jpg" alt=""></a></li>
					<li class="item"><a href=""><img src="../assets/imgs/a4.jpg" alt=""></a></li>
					<li class="item"><a href=""><img src="../assets/imgs/a1.jpg" alt=""></a></li>
				</ul>
				<ul class="circlr">
					<li  class="cir" style="background: rgba(255,255,255,.5);border-color: rgba(81,81,81,.6);"></li>
					<li class="cir"></li>
					<li class="cir"></li>
					<li class="cir"></li>
					<li class="cir"></li>
				</ul>
		</div>
		<div class="items" >
			<ul>
				<li><router-link to=""><img src="../assets/imgs/a1.png" alt="">美食</router-link></li>
				<li><router-link to=""><img src="../assets/imgs/b2.png" alt="">美团</router-link></li>
				<li><router-link to=""><img src="../assets/imgs/b3.png" alt="">生鲜</router-link></li>
				<li><router-link to=""><img src="../assets/imgs/b4.png" alt="">美团</router-link></li>
				<li><router-link to=""><img src="../assets/imgs/b5.png" alt="">快食</router-link></li>
				<li><router-link to=""><img src="../assets/imgs/b6.png" alt="">甜点</router-link></li>
				<li><router-link to=""><img src="../assets/imgs/b7.png" alt="">家常菜</router-link></li>
				<li><router-link to=""><img src="../assets/imgs/b8.png" alt="">小吃馆</router-link></li>
				<li><router-link to=""><img src="../assets/imgs/b9.png" alt="">鲜花</router-link></li>
				<li><router-link to=""><img src="../assets/imgs/b10.png" alt="">品牌</router-link></li>
			</ul>
		</div>
		<div class="fj">
			<h3>附近商家</h3>
			<div class="le"></div>
			<ul class="nav">
				<li>综合排序∨</li>
				<li>销量最高</li>
				<li>距离最近</li>
				<li>筛选<img src="../assets/imgs/saixuan.png" alt=""></li>
			</ul>
			<div class="le"></div>
		</div>
		<div class="wrap" >
			<ul>
				<li v-for="wrap in wrap">
					<router-link :to="{name:'waimai',params:{name:wrap.name}}">
						<img :src="wrap.path" alt="">
						<div class="text">
							<p class="name">{{wrap.name}}</p>
							<p class="xiaosuo">{{wrap.xiaosuo}}</p>
							<p class="peisong">{{wrap.peisong}}</p>
						</div>
					</router-link>
				</li>
				
			
			</ul>
		</div>
		<h4>没有更多商家了</h4>
	</main>
  </div>
</template>

<script>
	import shouye from '../assets/js/shouye.js';
export default {
  name: 'shouye',
  data () {
    return {
      wrap:[
		  {
			  path:require('@/assets/imgs/b2.png'),
			  name:'水煮猪',
			  xiaosuo:'100份',
			  peisong:'起送￥260元，配送0￥',
		  },
		  {
		  			   path:require('@/assets/imgs/b3.png'),
		  			  name:'烤甘蔗',
		  			  xiaosuo:'100份',
		  			  peisong:'起送￥210元，配送0￥',
		  },
		  {
		  			   path:require('@/assets/imgs/b4.png'),
		  			  name:'炒米饭',
		  			  xiaosuo:'100份',
		  			  peisong:'起送￥220元，配送0￥',
		  },
		  {
		  			   path:require('@/assets/imgs/b4.png'),
		  			  name:'小鸡炖蘑菇',
		  			  xiaosuo:'10份',
		  			  peisong:'起送￥20元，配送0￥',
		  }
		  
	  ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	@import "../assets/css/shouye.less";
	
</style>
