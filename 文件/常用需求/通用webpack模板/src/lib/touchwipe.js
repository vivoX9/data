import $ from 'jQuery'
(function($) {
	$.fn.touchWipe = function(option) {
		var defaults = {
			itemDelete: '.item-delete', //删除元素
		};
		var opts = $.extend({}, defaults, option); //配置选项

		var delWidth = $(opts.itemDelete).width();

		var initX,initY; //触摸位置
		var moveY,moveX; //滑动时的位置
		var X = 0; //移动距离
		var objX = 0; //目标对象位置
		var obj = null
		var lastLeftObj; // 上一个左滑的对象
		var valiX = 0,valiY = 0,valiFlag = true
		$(this).off('touchstart')
		$(this).off('touchmove')
		$(this).off('touchend')
		$(document).off('touchstart', 'body')
		$(document).on('touchstart', 'body', function(){
			if(lastLeftObj) {
				lastLeftObj.style.transition = "all 0.2s";
				lastLeftObj.style.WebkitTransform = "translateX(" + 0 + "px)";
				lastLeftObj.style.transition = "all 0";
			}
		})
		$(this).on('touchstart', function(event) {
			obj = this;
			initX = event.targetTouches[0].pageX;
			initY = event.targetTouches[0].pageY;
			objX = (obj.style.WebkitTransform.replace(/translateX\(/g, "").replace(/px\)/g, "")) * 1;
			if(objX == 0) {
				$(this).on('touchmove', function(event) {
					var obj = this;
					obj.style.transition = "all 0s";
					moveX = event.targetTouches[0].pageX;
					moveY = event.targetTouches[0].pageY;
					X = moveX - initX;
					if (valiFlag) {
						valiFlag = false
						valiX = Math.abs(initX -moveX) 
						valiY = Math.abs(initY -moveY) 
					}
					if (Math.abs(valiX) > Math.abs(valiY)) {
						event.preventDefault()
					} else {
						return void 0
					}
					if(X >= 0) {
						obj.style.WebkitTransform = "translateX(" + 0 + "px)";
					} else if(X < 0) {
						var l = Math.abs(X);
						obj.style.WebkitTransform = "translateX(" + -l + "px)";
						if(l > delWidth) {
							l = delWidth;
							obj.style.WebkitTransform = "translateX(" + -l + "px)";
						}
					}
				});
			} else if(objX < 0) {
				$(this).on('touchmove', function(event) {
					var obj = this;
					obj.style.transition = "all 0s";
					moveX = event.targetTouches[0].pageX;
					moveY = event.targetTouches[0].pageY;
					X = moveX - initX;
					if (valiFlag) {
						valiFlag = false
						valiX = Math.abs(initX -moveX) 
						valiY = Math.abs(initY -moveY) 
					}
					if (Math.abs(valiX) > Math.abs(valiY)) {
						event.preventDefault()
					} else {
						return void 0
					}
					if(X >= 0) {
						var r = -delWidth + Math.abs(X);
						obj.style.WebkitTransform = "translateX(" + r + "px)";
						if(r > 0) {
							r = 0;
							obj.style.WebkitTransform = "translateX(" + r + "px)";
						}
					} else { //向左滑动
						obj.style.WebkitTransform = "translateX(" + -delWidth + "px)";
					}
				});
			}

		})
		$(this).on('touchend', function(event) {
			valiFlag = true
			$(this).unbind('touchmove')
			var obj = this;
			objX = (obj.style.WebkitTransform.replace(/translateX\(/g, "").replace(/px\)/g, "")) * 1;
			if(objX > -delWidth / 2) {
				obj.style.transition = "all 0.2s";
				obj.style.WebkitTransform = "translateX(" + 0 + "px)";
				obj.style.transition = "all 0";
				objX = 0;
			} else {
				obj.style.transition = "all 0.2s";
				obj.style.WebkitTransform = "translateX(" + -delWidth + "px)";
				obj.style.transition = "all 0";
				objX = -delWidth;
				lastLeftObj = obj
			}
		})

		//链式返回
		return this;
	};

})($);