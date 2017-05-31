define(['jquery','template','cookie','layer'],function($,template,cookie,layer){
	$(function(){
		var detail = {
			data:{},
			init: function(){
				var that = this;
				$.getJSON('json/data.json',function(result){
					that.data = result;

				 	var list = template('type-list',result);
				 	
				    $('.sort').html(list);
				    var atfirst = $('.sort .sort-list:first'); 
				   atfirst.addClass('active');
				   var  id = atfirst.attr('data-id');

				  $('.goodsprice').html(that.data.color[id].sale_price);
				   $('.stock-num').html(that.data.color[id].stock);
				 	
				});
				this.colorSwitch();
				this.increase();
				this.decrease();
				this.input();
				this.addToCart();				
			},
			colorSwitch:function(){
				var that = this;
				$('.sort').on('click','.sort-list',function(){
						$(this).addClass('active')
						.siblings()
						.removeClass('active');
						var id = $(this).data('id');
						$('.goodsprice').html(that.data.color[id].sale_price);
				        $('.stock-num').html(that.data.color[id].stock);
				});

			},
			increase:function(){
				$('.re-increase').on('click',function(){
					var input = $(this).parents('.ch-num').find('.re-num');
					var stock = $('.stock-num').html();
					var amount = parseInt(input.val());
					if (amount >= stock) {
						return;
					}
					amount++;
					input.val(amount);
				});
			},
			decrease:function(){
				$('.re-decrease').on('click',function(){
					var input = $(this).parents('.ch-num').find('.re-num');
					var amount = parseInt(input.val());
					if (amount <= 1) {
						return;
					}
					amount--;
					input.val(amount);
				});
			},
			input:function(){
				$('.re-num').on('input',function(){
					var amount = $(this).val();
					console.log(amount);
					if (amount === "") return;
					amount = parseInt(amount);
					
					if (isNaN(amount)) {
						amount = 1;
					}
					var stock = $('.stock-num').html();
					console.log(stock);
					if (amount >= stock) {
					   amount = stock;
					}
					
					$(this).val(amount);
				});

				$('.re-num').blur(function(){
					var amount = $(this).val();
					if (amount === "") {
						$(this).val(1);
					}
				});
			},
			addToCart:function(){
				$('.buybtn').click(function(){
					var goods = $('.sort-list.active');
					var id = goods.data('id');

					var amount = parseInt($('.re-num').val());
					var cart = $.cookie('tm-cart') || '{}';

					cart = JSON.parse(cart);
					if(!cart[id]){
						cart[id] = {
							id:id,
							amount:amount
						};
					}else{
						cart[id].amount +=amount;
					}
					alert('加入成功');
					//重写cookie
					$.cookie('tm-cart',JSON.stringify(cart),{expires:365,path:'/'});
					console.log();

				});
			}

		}
		detail.init();

	});	
});
