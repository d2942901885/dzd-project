$(function(){
	$('.xiala .caidan').click(function(){
		$(this).find('.dang').slideToggle().parent().siblings().find('.dang').slideUp()
	})
})