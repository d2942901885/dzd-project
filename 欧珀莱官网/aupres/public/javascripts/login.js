$(function(){
	$('li').on('click',function(){
		$(this).addClass('actives');
		$(this).siblings().removeClass('actives');
		//console.log($(this).index());
		var index = $(this).index();
		$('.lu .a1').eq(index).show().siblings().hide();
	});
})
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
$(function(){
	$('.usename').blur(function(){
		var usename = $(this).val()
		 var pattern = /^13\d{9}$|^15[0-35-79]\d{8}$|^18[05-9]\d{8}$/;
		if(pattern.test(usename)){
			//符合规范
			$(this).parent().next().hide();
			
		}else{
			//不符合规范
			
			// $(this).parent().next().find('.cuo').html('用户名/密码不能为空');
			$(this).parent().next().show();
		}
	})
	$('#password').blur(function(){
		var usename = $(this).val()
		 var pattern = /^13\d{9}$|^15[0-35-79]\d{8}$|^18[05-9]\d{8}$/;
		if(pattern.test(usename)){
			//符合规范
			$(this).parent().next().hide();
		}else{
			//不符合规范
			
			// $(this).parent().next().find('.cuo').html('用户名/密码不能为空');
			// $(this).parent().next().show();
			alert('密码输入错误，如果你忘记密码可以选择短信快捷登录')
		}
	})
})