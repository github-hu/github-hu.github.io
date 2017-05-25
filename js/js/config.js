/*!
	config  配置文件
*/

require.config({
	baseUrl: 'js',
	paths: {
		"jquery": "lib/jquery-1.11.3",
		"cookie": 'plug/jquery.cookie',
		"swiper": "plug/swiper-3.4.2.jquery.min",
		"template":"plug/template",
		"layer":"plug/layer/layer",
		"main":"js/main",
		"banner":"js/banner"
		
	},
	//处理非AMD规范
	shim: {
		"swiper": ['jquery'],
		"cookie": ['jquery'],
		"template": ['jquery'],
		"layer": ['jquery'],
		"banner": ['jquery']
	
		
	}
});