define(['jquery'],function($){
		var banner = {
			btn:$('.pic-opera .marketBtn li'),
			mPic:$('.menu-content .market-silde'),
			picSlide:$('.pic-slide'),
			timer:null,
			
			next:0,
			init:function(){
				this.mPic.eq(0).show();
				this.btn.eq(0).css({top:-8});
				this.autoSwitch();
				this.picBtn();
			},
			autoSwitch:function(){
				var _this = this;
				this.timer = setInterval(function(){			
					_this.next++;
					_this.next %= _this.mPic.length;
					_this.switch();
				},3000);
			},
			picBtn:function(){ 
				var _this =this;
				this.btn.mouseenter(function(){
					_this.next=$(this).index();
					clearInterval(_this.timer);
					$(this)
					.stop()
					.animate({
						top:-8
					})
					.siblings()
					.stop()
					.animate({
						top:0
					});
					_this.switch()	
					

					
					
				});
				this.btn.mouseleave(function(){
					_this.autoSwitch();
				})
			},
			switch:function(){
				var _this =this;

				this.btn
				.eq(this.next)
				.stop()
				.animate({
					top:-8
				},1000)
				.siblings()
				.stop()
				.animate({
					top:0
				},1000);

				var color = this.mPic.eq(this.next).find('img').attr('data-bg');				
				this.picSlide.stop().css({background:color},1000);

				this.mPic.eq(this.next)
				.stop()
				.fadeIn(1000)
				.find('img')
				.addClass('banner')
				.end().siblings()
				.stop()
				.fadeOut(100)
				.find('img')
				.removeClass('banner')


					
			}

		}

	
     banner.init();
	

   
})
