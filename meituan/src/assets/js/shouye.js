// //轮播图
var item = document.getElementsByClassName('item');
console.log(item);
var cir = document.getElementsByClassName('cir');
console.log(cir);
// var imgsLi = imgsList.getElementsByTagName('li');
// console.log(imgsLi);
var imgs = 0;
setInterval(function(){
	imgs++;
	if(imgs>=item.length){
		imgs=0;
	}
	item[imgs].style.display = 'block';
	for(var i=0;i<item.length;i++){
		item[i].style.display = 'none';
		cir[i].style.background = 'rgba(0,0,0,.6)';
		cir[i].style.borderColor = 'rgba(204,204,204,.6)';
	}
	item[imgs].style.display = 'block';
	cir[imgs].style.background = 'rgba(255,255,255,.6)';
	cir[imgs].style.borderColor = 'rgba(81,81,81,.6)';
},2000)

//吸顶导航
// var inpt =document.getElementsByClassName('inpt')[0];
// //var scrollTop = 0;
// console.log(inpt);
// window.onscroll=function(){
// 	//var scrollTop = document.documentElement.scrollTop;
// 	var scrollTop = document.documentElement.scrollTop ||document.body.scrollTop;
// 	console.log(scrollTop);
// 	 var endTop = inpt.offsetTop+inpt.offsetHeight;
// 	//console.log(endtop);
// 	if(scrollTop>=endTop){
// 		inpt.style.position='fixed';
// 		inpt.style.top ='0';
// 		inpt.style.left='0';
// 		inpt.style.zIndex = '999';
// 		// inpt.style.background='black';
// 	}else{
// 		inpt.style.position = 'static';
// 		inpt.style.top ='50px';
// 		//inpt.style.zIndex = '999';
// 		// inpt.style.background='transparent';
// 	}
// }



//  var tit = document.getElementsByClassName("inpt");
//  //alert(tit);
//  //占位符的位置
//  var rect = tit.getBoundingClientRect();//获得页面中导航条相对于浏览器视窗的位置
//  var inser = document.createElement("div");
//  tit.parentNode.replaceChild(inser,tit);
// inser.appendChild(tit);
//  inser.style.height = rect.height + "px";
 
//  //获取距离页面顶端的距离
//  var titleTop = tit.offsetTop;
//  //滚动事件
//  document.onscroll = function(){
//       //获取当前滚动的距离
//      var btop = document.body.scrollTop||document.documentElement.scrollTop;
//       //如果滚动距离大于导航条据顶部的距离
//       if(btop>titleTop){
//           //为导航条设置fix
//          tit.className = "clearfix fix";
//       }else{
//          //移除fixed
//           tit.className = "clearfix";
//      }
//   }


/* window.onload=function(){
	var inpt = document.getElementsByClassName('inpt');
		var times = null;
		var mov = false;
	window.onscroll = function(){
		var scrollTop = document.documentElement.scrollTop ||document.body.scrollTop;
		console.log(screenTop);
		if(screenTop > 200){
			if(mov){
				return 0;
			}
			mov = true;
			times = setInterval(function(){
				if(inpt.offsetTop == 0){
					clearInterval(times);
					mov = false;
				}else{
					inpt.style.top = inpt.offsetTop + 5 + 'px';
				}
			},30);
			//inpt.style.top = 0;
		}else{
			//隐藏
			//inpt.style.top = '-60px';
			if(mov){
				return 0;
			}
			mov = true;
			times = setInterval(function(){
				if(inpt.offsetTop == -180){
					clearInterval(times);
					mov = false;
				}else{
					inpt.style.top = inpt.offsetTop - 5 + 'px';
				}
			},30);
		}
	}
} */