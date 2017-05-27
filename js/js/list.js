/*
	入口文件  处理整个首页的内容
*/


//加载配置文件
require(['config'],function(){

	//核心工作
	require(['jquery','layer','template'],function($,a,template){
		 layer.config({
		    path: 'js/plug/layer/'
		  });
		  
		  /*------load foot head-------------------*/
		
		$('.foot').load('load.html .footer');
		/*------start head  js-------------------*/
		$('header').load('load.html .head',function(){
			var slide =$('.fr-slide');
		
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
		
		
		/*----------nav-menu--------------*/
		$('nav').load('load.html .search-item,.nav-item',function(){
			$('.nav-menu li').on("mouseenter",function(){
				var index=$(this).index();
				$('.nav-item-t-l').on("mouseenter",function(){
					$('.nav-item .nav-menu').stop().animate({
						height:480
					});
				});
				$('.nav-item').on("mouseleave",function(){
					$('.nav-item .nav-menu').stop().animate({
						height:0
					});
				});
				
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
		var id=query("id");
		  $.getJSON("json/dailysale.json",function(date){
		  	console.log(date);
				for(var a=0;a<date.goods.lengths;a++){
					console.log(date.goods[a].id)
					console.log(id==date.goods[a].id)
					if(id==date.goods[a].id){
						var img1=document.createElement("img");
						img1.src=date.goods[a].src;
						div1.appendChild(img1)
					}
				}
					
				
			});
		  
		  
		
		  
		  
		/* $(document).on('click', function() {
		    layer.open({
		      content: '帅呆了'
		    })
		
		});*/
		function query(_name){	
		var str = location.href;	// 把当前页面的url取出
		var arr = str.split("?");
		if( arr.length > 1 ){
			// 表示有问号，即有数据
			// arr[1] 表示所有的参数    例如："id=4&p=2&t=3"
			var col = arr[1].split("&");
			var l = col.length;
			for( var i=0; i<l; i++ ){
				// col[i] 表示其中一个数据，例如："id=4"
				var c = col[i].split("=");
				// c 表示其中一个数据的数组，例如：["id", "4"]
				if( c[0] == _name ){
					return c[1];
				}
			}
			return "";
		}else{
			// 表示没有问号，即没有数据
			return "";
		}
	}

	})
})