$(function(){
	// 点击列表换背景颜色
	$('.b-Pro>div').click(function(){
		$(this).css('background','#f3a8b9').siblings().css('background','#f8f8f8');
		// $(this)s
	})
	// 点击图片进入details(详情)页
	// $('.pro-Img img').click(function(){
	// 	window.location.replace("http://localhost:3000/details");
	// })
})
// $(function(){
// 	// 点击列表换背景颜色
// 	$('.leading>p').click(function(){
// 		$(this).css('background','#f3a8b9').siblings().css('background','#f8f8f8');
// 	})
// 	//点击图标换主题
// 	$('.bgaimg').click(function(){
// 		$(this).parent().hide().siblings().show();
// 	})
// })
// function contentDownloads(id) {
//   var x = document.getElementById(id);
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }