window.onload = function() {
				function rnd(n, m) {
					return Math.floor(Math.random() * (m - n) + n)
				};
				var canvas = document.querySelector("#myCanvas");
				var context = canvas.getContext("2d");
				var winW = window.innerWidth;
				var winH = window.innerHeight;
				canvas.width = winW;
				canvas.height = winH;
				window.onresize = function(){
					winW = window.innerWidth;
					winH = window.innerHeight;
					canvas.width = winW;
					canvas.height = winH;
				}
				var r = 255;
			    var g = 0;
			    var b = 144;
				var line = []; //点的信息
				var num = 10; //点的个数
				var oldPoint = [];
				for(var i = 0; i < num; i++) {
					line[i] = {
						w: 0,//点的宽
						h: 0,//点的高
						x: rnd(0, winW), //点的X坐标
						y: rnd(0, winH), //点的Y坐标
						speedX: rnd(-5, 5), //X轴移动的速度
						speedY: rnd(-5, 5) //Y轴移动的速度
					};
				}
				drawobj();
 				window.requestAnimFrame = (function(){
			  	return window.requestAnimationFrame    ||
			        window.webkitRequestAnimationFrame ||
			        window.mozRequestAnimationFrame    ||
			        function( callback ){
			           window.setTimeout(callback, 1000 / 60);
			        };
				})();
				//画线
				function drawobj() {
					window.requestAnimationFrame(drawobj);
					context.clearRect(0, 0, winW, winH);
					for(var i = 0; i < num; i++) {
						drawPoint(line[i]);
						//坐标累加移动
						line[i].x += line[i].speedX;
						line[i].y += line[i].speedY;
						//碰撞检测
						if(line[i].x <= 0) {
							line[i].x = 0;
							line[i].speedX *= -1;
						}
						if(line[i].x >= winW-line[i].w) {
							line[i].x = winW-line[i].w;
							line[i].speedX *= -1;
						}
						if(line[i].y <= 0) {
							line[i].y = 0;
							line[i].speedY *= -1;
						}
						if(line[i].y >= winH-line[i].h) {
							line[i].y = winH-line[i].h;
							line[i].speedY *= -1;
						}
					}
					context.beginPath();
				    context.moveTo(line[0].x,line[0].y)
				    for(var i = 1; i < num; i++) {
						context.lineTo(line[i].x,line[i].y);
				    }
				    context.strokeStyle = 'rgba('+r+','+g+','+b+',1)';
				    context.closePath();
				    context.stroke();
				    var arr = [] ;
				    for(var i =  0; i <num ; i++){
						arr.push({x:line[i].x , y:line[i].y});
				    }
				    oldPoint.push(arr);
				    while(oldPoint.length > 20 ){
						oldPoint.shift();
				    }
				    for (var i = 0; i < oldPoint.length; i++) {
						context.beginPath();
						context.moveTo(oldPoint[i][0].x,oldPoint[i][0].y)
						for (var j = 1; j < num; j++) {
							context.lineTo(oldPoint[i][j].x,oldPoint[i][j].y);
						}
						context.closePath(); 
						var opacity = i/oldPoint.length;
						context.strokeStyle = 'rgba('+r+','+g+','+b+','+opacity+')'
						context.stroke();
				   }
				}
				//画点
				function drawPoint(p) {
					context.fillStyle = '#fff';
					context.fillRect(p.x, p.y, p.w, p.h);
					context.strokeRect(p.x, p.y, p.w, p.h);
				}
			}
		
