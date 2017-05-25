/*
	入口文件  处理整个首页的内容
*/


//加载配置文件
require(['config'],function(){

	//核心工作
	require(['jquery','layer','template','main','banner','floor'],function(){
		 layer.config({
		    path: 'js/plug/layer/'
		  });
		/* $(document).on('click', function() {
		    layer.open({
		      content: '帅呆了'
		    })
		
		});*/

	})
})