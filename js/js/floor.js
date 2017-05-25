define(['jquery'],function($){
		var floor = {
			allFloor:null,
			allFNav:null,
			floorNav:null,
			ch:null,
			timer:null,
			init:function(){
				this.allFloor=$('.floor');
				this.allFNav=$('.sn-nav-wrapper a');
				this.floorNav=$('.sn-nav-wrapper');
				this.ch=$(window).height();
				this.timer=null;
				this.scroll();
				this.btn();
			},
			scroll:function(){
				var _this=this;
				$(window).scroll(function(){
					clearTimeout(_this.timer);
					_this.timer = setTimeout(function(){
						var scrollT =$('body').scrollTop();
						if(scrollT>2500-_this.ch/2){
							_this.floorNav.fadeIn();
						}else{
							_this.floorNav.fadeOut();
						}	
						_this.allFloor.each(function(i){
							var h =$(this).height(),
								t =$(this).offset().top;
								console.log(t,h);
							//判断是否显示的楼层
							if( (t<_this.ch/2+scrollT) && (t+h>scrollT+_this.ch/2) ){
								_this.allFNav.eq(i).addClass('on').siblings().removeClass('on');
								
							}
						});
					},80);
				});
			},
			btn:function(){ 
				var _this =this;
				this.allFNav.click(function(){
					console.log(_this.allFloor)
					var index =$(this).index();
					$(this).addClass('on').siblings().removeClass('on');
					var t = _this.allFloor.eq(index).offset().top-50;
					
					$('html,body').animate({
						scrollTop:t
					});
				});
				
			}

		}
		
		return floor;
		
 
})
