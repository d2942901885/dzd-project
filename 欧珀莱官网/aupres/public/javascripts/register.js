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
	$('#username').blur(function(){
		var username = $(this).val()
		 var pattern = /^13\d{9}$|^15[0-35-79]\d{8}$|^18[05-9]\d{8}$/;
		if(pattern.test(username)){
			//符合规范
			// $(this).parent().next().hide();
			$.ajax({
				url:'/register/selectUser',
				type:'post',
				data:{
					name:username
				},
				success:(data)=>{
					console.log(data)
					if(data == 'true'){
						$(this).css({'color':'#ccc'});
						$(this).parent().next().hide();
						
					}else{
						$(this).css({'color':'red'});
						$(this).parent().next().find('span').html('用户名已经被注册')
						$(this).parent().next().show();
					}
				},
				error:function(err){
					if(err) return console.error(err);
				}
			})
		}else{
			//不符合规范
			$(this).parent().next().show();
		}
	})








	
	$('#repass').blur(function(){
			// 获取两次输入的密码
			var pass = $('#pass').val()
			var repass = $('#repass').val();
			
			// 验证两次输入的密码是否一致
			if(pass == repass){
				var pattern = /^\w{6,12}$/;
				// 验证密码是否符合正则表达式
				if(pattern.test(pass)){
					// 去除所有的报错信息
					$('#pass').css({'color':'#ccc'});
					$('#pass').parent().next().hide();
					$(this).css({'color':'#ccc'});
					$(this).parent().next().hide();
				}else{
					$('#pass').parent().next().find('span').html('输入的密码格式错误')
					$('#pass').parent().next().show();
				}
			}else{
				$(this).parent().next().find('span').html('两次输入的密码不一致')
				$(this).parent().next().show();
			}
			
		})
		$('#form').submit(function(){
			if(true){
				return true;
			}else{
				return false;
			}
		})
})
