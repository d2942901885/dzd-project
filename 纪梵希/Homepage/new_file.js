$(function(){
	$('.qy').click(function(){
		$('.region').css('display','block',)
		return false;
	})
	$('.err').click(function(){
		$('.region').css('display','none')
		return false;
	})
	
	$('.YY').click(function(){
		$('.Language').css('display','block')
		return false;
	})
	$('.lan').click(function(){
		$('.Language').css('display','none')
		return false;
	})
	$('.logs').click(function(){
		$('.logss').css('opacity','1')
		return false;
	})
	$('.denglv1').click(function(){
		$('.logss').css('opacity','0')
		return false;
	})
})
//轮播图
$(function(){
	 $('#Toright').hover(function(){
		 $('#toleft').hide()
	 },function(){
		 $('#toleft').show()
	 })
	 $('#toleft').hover(function(){
		 $('#Toright').hide()
	 },function(){
		 $('#Toright').show()
	 })
})
var t;
var index = 0;
//自动播放
t = setInterval(play,2000)

function play(){
	index++;
	if(index > 3){
		index = 0;
	}
	$('.Carousel .cirs li').eq(index).css({
		'background':'rgba(255,255,255,0.4)',
		'border':'1px solid rgba(255,255,255,0.5)'
	}).siblings().css({
		'background':'rgba(0,0,0,0.4)',
		'border':''
	})
	$('.lunbo a').eq(index).fadeIn(500).siblings().fadeOut(500);
};
//点击小方块,图片切换
$('.Carousel ul li').click(function(){
	$(this).css({
		'background':'rgba(255,255,255,0.4)',
		'border':'1px solid  rgba(255,255,255,0.5)' ,
	}).siblings().css({
		'background':'rgba(0,0,0,0.4)',
	})
	//获取图片与按钮一致
	var index = $(this).index();
	$('.lunbo a').eq(index).fadeIn(500).siblings().fadeOut(500);
});
//上一张下一张切换
$('#toleft').click(function(){
	index--;
	if(index <= 0){
		index = 3;
	}
	$('.Carousel .cirs li').eq(index).css({
		'background':'rgba(255,255,255,0.4)',
		'border':'1px solid rgba(255,255,255,0.4)',
	}).sibling().css({
		'background':'rgba(0,0,0,0.4)'
	})
	$('.lunbo a').eq(index).fadeIn(500).siblings().fadeOut(500);
});
$('Toright').click(function(){
	index++;
	if(index > 3){
		index = 0
	}
	$('.Carousel .cirs li').eq(index).css({
		'background':'rgba(255,255,255,0.4)',
		'border':'1px solid rgba(255,255,255,0.4)',
	}).sibling().css({
		'background':'rgba(0,0,0,0.4)'
	})
	$('.lunbo a').eq(index).fadeIn(500).siblings().fadeOut(500);
});
$("#toleft,#toright").hover(function() {
        $(this).css({
            "color": "black"
        })
    },
    function() {
        $(this).css({
            "opacity": "0.3",
            "color": ""
        })
    })

