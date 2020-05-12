$(function(){
	$('#usname').blur(function(){
		var usname=$(this).val();
		console.log('usname:',usname)
		//异步请求数据库，看该预约的用户名是否已存在
		$.ajax({
			url:'/custom/user',
			type:'post',
			data:{
				name:usname
			},
			success:(data)=>{
				console.log(data)
				if(data=='true'){
					$(this).css({'border':'solid 1px #000'});
				}else {
					alert('您已经预约！！');
				}
			},
			error:function(err){
				if(err) return console.error(err)
			}
		});
	});
	//submit事件
	$('#form').submit(function(){
		if($('#usname').val()=="" ||$('#yearmoudy').val()=="" || $('#times').val()=="" || $('#province').val()==""|| $('#city').val()==""|| $('#store').val()==""){
			return false;
		}else{
			return true;
		}
	})
})