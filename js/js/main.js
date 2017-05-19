define(['jquery'],function(){
		$(function(){
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
})



