/*
	入口文件  处理整个首页的内容
*/


//加载配置文件
require(['config'],function(){

	//核心工作
	require(['jquery','layer','template','lazyload'],function($,a,template,lazyload){
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
		  $.getJSON("json/list.json",function(date){
					var html =template('sale-list',date);
					$('.sale-list').html(html);
			$('.sale-list img.lazy').lazyload({
				effect: 'fadeIn',//显示的效果   show  fadeIn  slideDown
				data_attribute: 'lazy-img', //规定真实图片的url
				threshold: -240, //声明图片距离屏幕底端多少距离时开始加载图片
				failure_limit: 10, //容差
				load: function(){ //图片加载完成做的事情
					$(this).removeAttr('data-lazy-img');
				}
			});
			
		  	 $(".guess-m").find("li").on("click",function(){
		  	 		console.log("1")
		  	location.href="details.html?id="+$(this).attr("data");
		 })
		  
			});
		  	
		/* $(document).on('click', function() {
		    layer.open({
		      content: '帅呆了'
		    })
		
		});*/

	})
})