jQuery.fn.banner = function(options){

		var _this =this;
		options = jQuery.extend({
			imgNum: _this.find("ul").children().size(),
			children:_this.find("ul").children(),
			frquency:3000
		},options || {})
		
		function Banner(){};
		Banner.prototype={
			constructor:Banner,
			init:function(options){
				this.index =0;
				this.timer =null;
				this.imgNum = options.imgNum;
				this.autoPlay(options);
				this.btnSwitch();
			},
			autoPlay:function(options){
				var that =this;
				this.timer = setInterval(function(){
					that.index++;
					that.imgSwitch(options);
				}, options.frquency);
			},
			imgSwitch:function(options){
				this.index<0?this.imgNum:this.index;
				this.index=this.index % this.imgNum;			
				options.children.eq(this.index)
				.stop().slideDown()
				.siblings()
				.stop().slideUp();
			},
			btnSwitch:function(){
				var that =this;
				_this.find(".next").on("click",function(){
					that.index++;
					that.imgSwitch(options);
				});	
				_this.find(".prev").on("click",function(){
					that.index--;
					
					that.imgSwitch(options);
				});	
				_this.on("mouseenter",function(){		
					clearInterval(that.timer);		
				});		
				_this.on("mouseleave",function(){					
					that.autoPlay(options);
		
				});
			}
	
		};
		var Banner=new Banner();
		Banner.init(options);


}