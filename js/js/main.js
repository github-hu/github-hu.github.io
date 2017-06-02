define(['jquery','template','floor','smallbanner','cookie'],function($,template,floor,b,cookie){
		$(function(){
		
		
		
		/*// 获取 cookie
		function getCookie(_name){
			var str = document.cookie;
			var arr = str.split("; ");
			var l = arr.length;
			var i = 0;
			var col;
			for(; i<l ; i++){
				col = arr[i].split("=");
				if( col[0] == _name ){
					return decodeURIComponent(col[1]);
				}
			}
			return"";
		}
		// 设置 cookie
		function setCookie(_name, _value, _date){
			if( _date ){
				var d=new Date();
				d.setDate(d.getDate()+_date);
				document.cookie = _name+"="+encodeURIComponent(_value)+"; path=/; expires="+d.toGMTString();
			}else{
				// 如果不设置失效时间，则时间为会话时间，所谓会话时间即打开浏览器到关闭浏览器的时间
				document.cookie = _name+"="+encodeURIComponent(_value)+"; path=/;";
			}
		}
		
		var str=JSON.parse(getCookie("userinfo"))*/
		
		
		
		
		
		
		/*------load foot head-------------------*/
		
		$('.foot').load('load.html .footer');
		/*------start head  js-------------------*/
		$('header').load('load.html .head',function(){
			var slide =$('.fr-slide');
			var str = $.cookie('userinfo') || '{}';
			var str = JSON.parse(str);
			$('#account').html(str.userID);
			$('#haha').html('欢迎您')
			slide.on('mouseenter',function(){
				$(this).find('.slide_gou')
				.css({
					'border-color': '#ccc',
				}).stop().slideDown(300)
				.end().find('.phone')
				.css({
					'background-position':'-44px 0'
				})
				.end().find('.homeicon')
				.css({
					'background-position':'-69px 0'
				})
				.end()
				.css({
					background:"#fff",
					'border-color': '#ccc',	
				})
				
				
				
			});
			
			slide.on('mouseleave',function(){
				$(this).find('.slide_gou')
				.css({
					'border-color': '#fff',
				}).stop().slideUp(200)
				.end().find('.phone')
				.css({
					'background-position':'-24px 0'
				})
				.end().find('.homeicon')
				.css({
					'background-position':'-89px 0'
				})
				.end()
				.css({
					background:"#f5f5f5",
					'border-color': '#f5f5f5',
				});
				
			});
			
			$('.fr-icon .icoll').on('mouseenter',function(){
				$(this).css({
					'background-position':'-41px -21px'
				})
			});
			$('.fr-icon .icoll').on('mouseleave',function(){
				$(this).css({
					'background-position':'-64px -21px'
				})
			});
		})
		
		/*------end head  js-------------------*/
		
		/*----------nav-menu--------------*/
		$('nav').load('load.html .search-item,.nav-item',function(){
			$('.nav-menu li').on("mouseenter",function(){
				var index=$(this).index();
				
				$('.menu-con .menu-con-item').eq(index)
				.show().stop(true,true)
				.animate({
					left:180,
					opacity:.96
				},200)
				.siblings().hide().stop(true,true)
				.animate({
					left:170,
					opacity:.5
				},200);
				
				$(this).css({
					background:"#a90000"
				}).stop().animate({
					"padding-left":10
				},200).siblings().css({
					background:"#cb3e25"
				}).stop().animate({
					"padding-left":0
				},200);
				
			});
			
			$('.nav-item').on("mouseleave",".nav-menu",function(){
				$(this).find(".menu-con-item").hide().stop(true,true)
				.animate({
					left:170,
					opacity:.5
				},200)
				.end().find("ul li").css({
					background: "#cb3e25"
				}).stop().animate({
					"padding-left":0
				},200);
			});
		});
		/*--------------轮播区------------------*/
		
		
		
		
		
		/*--------------今日半价------------------*/
		$.getJSON("json/daily.json",function(date){
					var html =template('daily',date);
					$('.article .list ul').html(html);
			});
		/*--------------天天特卖------------------*/	
		$.getJSON("json/dailysale.json",function(date){
				var html =template('dailysale',date);
				$('.dailysale').html(html);
				$('.dailysale-list li').on("mouseenter","img",function(){
					$(this).stop().animate({
						width:315,
						height:250,
						left:-12.5,
						top:-10
					});
				});
				$('.dailysale-list li').on("mouseleave","img",function(){
					$(this).stop().animate({
						width:290,
						height:230,
						left:0,
						top:0
					});
				});
		});
		
		/*--------------楼层------------------*/	
		$.getJSON("json/floor.json",function(date){
					var html =template('floor',date);
					$('.your.article').after(html);	
					floor.init();
					$('.your-like-container').banner(
						{
							imgNum:$('.your-like-container').find("ul").size(),
			children:$('.your-like-container').find("ul"),
			frquency:3000
						}	
					);
					$('.brand').eq(1).banner();
					$('.brand').eq(2).banner();
					$('.brand').eq(3).banner();
					$('.brand').eq(4).banner();
					$('.brand').eq(5).banner();
					$('.brand').eq(6).banner();
					$('.brand').eq(7).banner();
					$('.brand').eq(8).banner();
					$('.brand').eq(0).banner();
					
			});
		
	})
})



