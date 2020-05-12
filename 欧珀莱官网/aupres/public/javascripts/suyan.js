$(function(){
	//导航栏搜索按钮点击搜索
	$('.findimg').click(function(){
		$('.navfinds').show()
		$('.findimg').hide()
	})
	$('.close').click(function(){
		$('.navfinds').hide()
		$('.findimg').show()
	})
	//导航栏左侧点击更多
	$('.navtw-close').click(function(){
		$('.daohl-more').hide()
		$('.navtw-close').hide()
		$('.navtw-more').show()
	})
	$('.navtw-more').click(function(){
		$('.daohl-more').show()
		$('.navtw-close').show()
		$('.navtw-more').hide()
	})
	//导航栏搜索
	$('.user-find').click(function(){
		$('.us-search').show();
		$('.user-find').hide();
		$('.find-close').show();
	})
	$('.find-close').click(function(){
		$('.us-search').hide();
		$('.user-find').show();
		$('.find-close').hide();
	})
	//用户登录
	$('.user-resert').click(function(){
		$('.userinfos').show();
		$('.user-resert').hide();
		$('.resert-close').show();
	})
	$('.resert-close').click(function(){
		$('.userinfos').hide();
		$('.user-resert').show();
		$('.resert-close').hide();
	})
})



// var $nav = document.getElementsByClassName('xnav')[0];
// console.log($nav);
// window.onscroll = function(){
// 	var scrollTops = document.documentElement.scrollTop;
// 	// console.log(scrollTop);
// 	var endTops = $nav.offsetTop+$nav.offsetHeight;
// 	console.log(endTops);
// 	if(scrollTops>=endTops){
// 		$nav.style.position='fixed';
// 		$nav.style.top = '0';
// 		$nav.style.left = '0';
// 		$nav.style.background = '#FCFAFA';
// 		$nav.style.zIndex = '999';
// 		$nav.style.width = '100%';
// 	}else{
// 		$nav.style.position = 'absolute';
// 		$nav.style.background = 'transparent';
// 	}
// }
var $navs = document.getElementsByClassName('navv')[0];
console.log($navs);
window.onscroll = function(){
	var scrollTop = document.documentElement.scrollTop;
	// console.log(scrollTop);
	var endTop = $navs.offsetTop+$navs.offsetHeight;
	if(scrollTop>=endTop){
		$navs.style.position='fixed';
		$navs.style.top = '0';
		$navs.style.left = '0';
		$navs.style.background = '#FCFAFA';
		$navs.style.zIndex = '999';
	}else{
		$navs.style.position = 'absolute';
		$navs.style.background = 'transparent';
	}
}