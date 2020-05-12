$(function(){
	var a=1;
	var b=1;
	$('.btn-country').click(function(){
		if(a==1){
			$('.addresslet').hide()
			$('.maprit').hide()
			a=0;
		}else{
			$('.addresslet').show()
			$('.maprit').show()
			a=1;
		}
	})
	//填写信息效果
	$('.information').focus(function(){
		$(this).css({
			'box-shadow':'0 0 3px #bbb',
			'border':'solid 2px red'
		});
	});
	$('.information').blur(function(){
		$(this).css({
			'box-shadow':'none',
			'border':'solid 1px #000',
			'background':'#F3A8B9'
		});
	});
	
		$('.names').click(function(){
			if(b==1){
				$('.yanzheng').show();
				b=0;
			}
		})
		$('.quedi').click(function(){
			if(b==0){
				$('.yanzheng').hide();
				$('.names').focus();
				b=0;
			}
		})
	$('#forward').click(function(){
		if($('#usname').val()==""||$('#yearmoudy').val()=="" || $('#times').val()=="" || $('#province').val()==""|| $('#city').val()==""|| $('#store').val()==""){
			alert('填写信息不能为空！！！');
		}else{
			alert('预约成功！！')
		}
	});
});