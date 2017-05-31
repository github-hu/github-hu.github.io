jQuery.fn.zoom=function(opt){
	var that= this;
	opt = jQuery.extend({
		
		
	},opt || {});
	function Zoom(){};
	Zoom.prototype={
		constructor:Zoom,
		init:function(opt){
			var _this=this;
			this.move();
			this.btn();
			
		},
		move:function(){		
			var mw=that.find('.glass-main').width();
			var mh=that.find('.glass-main').height();
			that.find('.middle-wrap').on('mousemove',function(e){
				
				var fw =that.find('.filter').width();
				var fh =that.find('.filter').height();				
				$('.large').show();				
				var l = e.offsetX - $('.filter').width()/2;
				var t = e.offsetY - $('.filter').height()/2;
		
				//边界处理
				l = l < 0 ? 0: (l >( mw-fw) ? (mw-fw) : l);
				t = t < 0 ? 0: (t > (mh-fh) ? (mh-fh) : t);
				//更改滤镜位置
				$('.filter').css({
					display:"block",
					left:l,
					top:t
				});
				
				//更改大图位置
				$('.large-pic').css({
					
					left:-(mw/fw)*l,
					top:-(mw/fw)*t
				});
				//鼠标经过显示滤镜和大图盒子
				
				$('.middle').mouseleave(function(){
					$('.filter').hide();
					$('.large').hide();
				});
			});
		},
		btn:function(){
			$('.jcarousel-item').on('mouseover','img',function(e){
			
				var _this=this;
				var src=$(this).attr("simg");
				var bsrc=$(this).attr("bimg");
				
				$('.middle-pic').attr({"src":src});
				$('.large-pic').attr({"src":bsrc});
				
				$('.select').removeClass('select');
				$('.active').removeClass('active');
				$(this).addClass('active');
			});
			var index = 0;
			var movewidth=that.find('li').outerWidth();			
			$('.arrow-right').click(function(){
				index++;
				
				if(index > $('.jcarousel-item img').length - 3){
					index = $('.jcarousel-item img').length - 3;
					return;
				}
				$('.slide-main ul').stop()
				.animate({
					'margin-left': -index*movewidth
				});
			});					
			$('.arrow-left').click(function(){
				index--;
				if(index < 0){
					index = 0;
					return;
				}
				$('.slide-main ul').stop()
				.animate({
					'margin-left': -index*movewidth
				});
			});
		}	
	}
	var zoom =new Zoom();
	zoom.init();
	
}
		

		
	
	




