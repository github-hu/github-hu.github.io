require(['config'],function(){
	require(['jquery','layer'],function($,layer){
		layer.config({
		    path: 'js/plug/layer/'
		  });
		$('.foot').load('load.html .footer-about');
		$('input').focus(function(){
			$(this).css({
				'border-color':'blue'
			})
		}).blur(function(){
			$(this).css({
				'border-color':'rgb(222,222,222)'
			});
		});
		// event.preventDefault();
		// 注册处理
		var  regStatus = {
			phone:false,
			psw:false,
			repsw:false,
			check:false

		}
		var phoneInput = $('#reguser'),
			pswInput = $('#regpass'),
			rePsw=$('#re_pass'),
			regBtn=$('.regbtn'),
			checktrue= $('.checkbox');
		var regPhone = /^1[3578]\d{9}$/;
		phoneInput.on('blur',function(){
			var phone = phoneInput.val();
			regStatus.phone = true;
			if (!regPhone.test(phone)) {
				$('.phone-err').html('您输入的手机号码格式错误，请重新输入!');
				regStatus.phone = false;
				return;
			}/*else{
				$('.phone-err').html('可以使用');
			}*/
			$.ajax({
				url:'http://datainfo.duapp.com/shopdata/userinfo.php',
				data:{
					status:'login',
					userID:phone
				},
				//dataType: 'jsonp',
				success:function(result){
					console.log(result);
					switch(result){
						case '0':	
						$('.phone-err').html('用户名可用');
						regStatus.phone = true;
						break;
						default:
						$('.phone-err').html('用户名不可用或非法字符');
						regStatus.phone = true;
						break;
					}
					/*if (result) {
						$('.phone-err').html('用户名可用');
					}else{
						$('.phone-err').html('用户名存在');
						regStatus.phone =  false;
					}*/
				}
			})
		});
		var regPsw = /^[\w!@#$%^*_+]{6,16}$/;
		pswInput.on('input',function(){
			var psw = pswInput.val();
			regStatus.psw = true;
			if (!regPsw.test(psw)) {
				$('.pwd-err').html('密码不合法（6-16）位数字字母组合');
				regStatus.psw = false;
				return;
			}else{
				$('.pwd-err').html('密码可用');
			}

		});
		rePsw.on('blur',function(){
			var psw = pswInput.val();
			var reword = rePsw.val();
			regStatus.repsw = true;
			if (psw != reword) {
				$('.repwd-err').html('两次密码不一样');
				regStatus.repsw = false;
				return;
			}
		});
		checktrue.prop('checked',true)
		regStatus.check = checktrue.prop('checked');

		checktrue.click(function(){
	    regStatus.check = checktrue.prop('checked');
        
		if (!regStatus.check) {
			regBtn.css({
				"background":"#ccc"	
			});
	
				return;
		}else{
			regBtn.css({
				"background":"red"	
			});
		}
		});
		regBtn.click(function(){
		
			for(var i in regStatus){
				console.log(regStatus[i]);
				if(!regStatus[i]){
					alert('部分数据不合法');
					return;
				}
			}
			$.ajax({
				type:'post',
				url:'http://datainfo.duapp.com/shopdata/userinfo.php',
				data:{
					status:'register',
					userID:phoneInput.val(),
					password:pswInput.val()
				},
				//dataType:"jsonp",
				success:function(result){
					console.log(result);
					switch(result){
						case '0':
						layer.alert('用户名重名');
						break;
						case '1':
						alert('注册成功');
						layer.alert('注册成功');
						location.href = "login.html";
						break;
						case'2':
						layer.alert('网络问题');
						break;
					}
					
					
					
					/*if (result) {
						location.href="login.html";
					}else{
						alert('注册失败');
					}*/
				}
			});
		});
		


	})
})