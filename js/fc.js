var winW, winH;
var adfri = true;
var vdSupp = true;
$(function() {
	winW = document.documentElement.clientWidth || document.body.clientWidth;
	winH = document.documentElement.clientHeight || document.body.clientHeight;
	document.body.style.width = winW + "px";
	document.body.style.height = winH + "px"
});
$(function() {
	var curCount = 0,
		startY = 0,
		endY = 0,
		dTime = 500,
		norZidx = "10",
		curZidx = "20",
		totZidx = "30",
		isMove = false,
		isUp = false,
		isDown = false;
	var illi = $(".itemlist li");
	var totCount = illi.length;
	$(document).bind("touchstart", function(e) {
		e.stopPropagation();
		startY = endY = parseInt(e.touches[0].clientY);
		illi.css({
			"z-index": norZidx,
			"visibility": "hidden"
		});
		$(illi.get(curCount)).css({
			"z-index": curZidx,
			"visibility": "visible"
		});
		if (curCount == 0) {
			$(illi.get(curCount + 1)).css({
				"z-index": totZidx,
				"visibility": "visible",
				"-webkit-transition-duration": "0ms",
				"-webkit-transform": "translate3d(0," + winH + "px,0)",
				"-moz-transition-duration": "0ms",
				"-moz-transform": "translate3d(0," + winH + "px,0)",
				"-ms-transition-duration": "0ms",
				"-ms-transform": "translate3d(0," + winH + "px,0)",
				"-o-transition-duration": "0ms",
				"-o-transform": "translate3d(0," + winH + "px,0)",
				"transition-duration": "0ms",
				"transform": "translate3d(0," + winH + "px,0)",
			})
		} else if (curCount == totCount - 1) {
			$(illi.get(curCount - 1)).css({
				"z-index": totZidx,
				"visibility": "visible",
				"-webkit-transition-duration": "0ms",
				"-webkit-transform": "translate3d(0," + (-winH) + "px,0)",
				"-moz-transition-duration": "0ms",
				"-moz-transform": "translate3d(0," + (-winH) + "px,0)",
				"-ms-transition-duration": "0ms",
				"-ms-transform": "translate3d(0," + (-winH) + "px,0)",
				"-o-transition-duration": "0ms",
				"-o-transform": "translate3d(0," + (-winH) + "px,0)",
				"transition-duration": "0ms",
				"transform": "translate3d(0," + (-winH) + "px,0)",
			})
		} else if (curCount > 0 && curCount < totCount - 1) {
			$(illi.get(curCount + 1)).css({
				"z-index": totZidx,
				"visibility": "visible",
				"-webkit-transition-duration": "0ms",
				"-webkit-transform": "translate3d(0," + winH + "px,0)",
				"-moz-transition-duration": "0ms",
				"-moz-transform": "translate3d(0," + winH + "px,0)",
				"-ms-transition-duration": "0ms",
				"-ms-transform": "translate3d(0," + winH + "px,0)",
				"-o-transition-duration": "0ms",
				"-o-transform": "translate3d(0," + winH + "px,0)",
				"transition-duration": "0ms",
				"transform": "translate3d(0," + winH + "px,0)"
			});
			$(illi.get(curCount - 1)).css({
				"z-index": totZidx,
				"visibility": "visible",
				"-webkit-transition-duration": "0ms",
				"-webkit-transform": "translate3d(0," + (-winH) + "px,0)",
				"-moz-transition-duration": "0ms",
				"-moz-transform": "translate3d(0," + (-winH) + "px,0)",
				"-ms-transition-duration": "0ms",
				"-ms-transform": "translate3d(0," + (-winH) + "px,0)",
				"-o-transition-duration": "0ms",
				"-o-transform": "translate3d(0," + (-winH) + "px,0)",
				"transition-duration": "0ms",
				"transform": "translate3d(0," + (-winH) + "px,0)"
			})
		}
	});
	$(document).bind("touchmove", function(e) {
		e.stopPropagation();
		e.preventDefault();
		endY = parseInt(e.touches[0].clientY);
		var diffY = parseInt(endY - startY);
		if (curCount == 0) {
			if (diffY < -10) {
				if (!isDown) {
					isUp = true;
					$(illi.get(curCount + 1)).css({
						"-webkit-transform": "translate3d(0," + (winH + diffY) + "px,0)",
						"-moz-transform": "translate3d(0," + (winH + diffY) + "px,0)",
						"-ms-transform": "translate3d(0," + (winH + diffY) + "px,0)",
						"-o-transform": "translate3d(0," + (winH + diffY) + "px,0)",
						"transform": "translate3d(0," + (winH + diffY) + "px,0)"
					})
				}
			}
		} else if (curCount == totCount - 1) {
			if (diffY > 10) {
				if (!isUp) {
					isDown = true;
					$(illi.get(curCount - 1)).css({
						"-webkit-transform": "translate3d(0," + (-winH + diffY) + "px,0)",
						"-moz-transform": "translate3d(0," + (-winH + diffY) + "px,0)",
						"-ms-transform": "translate3d(0," + (-winH + diffY) + "px,0)",
						"-o-transform": "translate3d(0," + (-winH + diffY) + "px,0)",
						"transform": "translate3d(0," + (-winH + diffY) + "px,0)"
					})
				}
			}
		} else if (curCount > 0 && curCount < totCount - 1) {
			if (diffY < -10) {
				if (!isDown) {
					isUp = true;
					if (winH + diffY == 0) {
						return
					}
					$(illi.get(curCount + 1)).css({
						"-webkit-transform": "translate3d(0," + (winH + diffY) + "px,0)",
						"-moz-transform": "translate3d(0," + (winH + diffY) + "px,0)",
						"-ms-transform": "translate3d(0," + (winH + diffY) + "px,0)",
						"-o-transform": "translate3d(0," + (winH + diffY) + "px,0)",
						"transform": "translate3d(0," + (winH + diffY) + "px,0)"
					})
				}
			} else if (diffY > 10) {
				if (!isUp) {
					isDown = true;
					$(illi.get(curCount - 1)).css({
						"-webkit-transform": "translate3d(0," + (-winH + diffY) + "px,0)",
						"-moz-transform": "translate3d(0," + (-winH + diffY) + "px,0)",
						"-ms-transform": "translate3d(0," + (-winH + diffY) + "px,0)",
						"-o-transform": "translate3d(0," + (-winH + diffY) + "px,0)",
						"transform": "translate3d(0," + (-winH + diffY) + "px,0)"
					})
				}
			}
		}
	});
	$(document).bind("touchend", function(e) {
		e.stopPropagation();
		var translateY = 0;
		if (isUp) {
			var next = $(illi.get(curCount + 1));
			translateY = parseInt(next.css("-webkit-transform").split(/[(]|[,]|[)]/)[2]);
			if (Math.abs(translateY / winH) < 0.9) {
				next.css({
					"-webkit-transition-duration": dTime + "ms",
					"-webkit-transform": "translate3d(0," + 0 + "px,0)",
					"-moz-transition-duration": dTime + "ms",
					"-moz-transform": "translate3d(0," + 0 + "px,0)",
					"-ms-transition-duration": dTime + "ms",
					"-ms-transform": "translate3d(0," + 0 + "px,0)",
					"-o-transition-duration": dTime + "ms",
					"-o-transform": "translate3d(0," + 0 + "px,0)",
					"transition-duration": dTime + "ms",
					"transform": "translate3d(0," + 0 + "px,0)"
				});
				curCount++
			} else {
				next.css({
					"-webkit-transition-duration": dTime + "ms",
					"-webkit-transform": "translate3d(0," + winH + "px,0)",
					"-moz-transition-duration": dTime + "ms",
					"-moz-transform": "translate3d(0," + winH + "px,0)",
					"-ms-transition-duration": dTime + "ms",
					"-ms-transform": "translate3d(0," + winH + "px,0)",
					"-o-transition-duration": dTime + "ms",
					"-o-transform": "translate3d(0," + winH + "px,0)",
					"transition-duration": dTime + "ms",
					"transform": "translate3d(0," + winH + "px,0)"
				})
			}
			isUp = false;
			isDown = false
		}
		if (isDown) {
			var prev = $(illi.get(curCount - 1));
			translateY = parseInt(prev.css("-webkit-transform").split(/[(]|[,]|[)]/)[2]);
			if (Math.abs(translateY / winH) < 0.9) {
				prev.css({
					"-webkit-transition-duration": dTime + "ms",
					"-webkit-transform": "translate3d(0," + 0 + "px,0)",
					"-moz-transition-duration": dTime + "ms",
					"-moz-transform": "translate3d(0," + 0 + "px,0)",
					"-ms-transition-duration": dTime + "ms",
					"-ms-transform": "translate3d(0," + 0 + "px,0)",
					"-o-transition-duration": dTime + "ms",
					"-o-transform": "translate3d(0," + 0 + "px,0)",
					"transition-duration": dTime + "ms",
					"transform": "translate3d(0," + 0 + "px,0)"
				});
				curCount--
			} else {
				prev.css({
					"-webkit-transition-duration": dTime + "ms",
					"-webkit-transform": "translate3d(0," + (-winH) + "px,0)",
					"-moz-transition-duration": dTime + "ms",
					"-moz-transform": "translate3d(0," + (-winH) + "px,0)",
					"-ms-transition-duration": dTime + "ms",
					"-ms-transform": "translate3d(0," + (-winH) + "px,0)",
					"-o-transition-duration": dTime + "ms",
					"-o-transform": "translate3d(0," + (-winH) + "px,0)",
					"transition-duration": dTime + "ms",
					"transform": "translate3d(0," + (-winH) + "px,0)"
				})
			}
			isUp = false;
			isDown = false
		}
		if (curCount == 0) {
			$(".pageup").show()
		} else if (curCount == totCount - 1) {
			$(".pageup").hide()
		} else if (curCount > 0 && curCount < totCount - 1) {
			$(".pageup").show()
		}
	});
	$(".musicplay").bind("touchstart", function(e) {
		e.stopPropagation();
		var _this = $(this);
		try {
			var oMusic = $(".music").get(0)
		} catch (e) {
			alert('抱歉，您的设备不支持audio！');
			return
		}
		if (oMusic.paused) {
			if (_this.hasClass("musicplay")) {
				_this.removeClass("musicplay").addClass("musicpause")
			} else {
				oMusic.play();
				_this.removeClass("musicpause").addClass("musicplay")
			}
		} else {
			oMusic.pause();
			_this.removeClass("musicplay").addClass("musicpause")
		}
	});
	document.readyState;
	document.onreadystatechange = subSomething;

	function subSomething() {
		if (document.readyState == "complete") {
			$(".itemlist").css("display", "block");
			$(".musicplay").css("display", "block");
			$(".pageup").css("display", "block");
			setTimeout(function() {
				$(".item01").find(".tit01").addClass("tran01");
				$(".item01").find(".tit02").addClass("tran02");
				$(".item01").find(".tit03").addClass("tran01");
				$(".item01").find(".tit04").addClass("tran01");
				$(".item01").find(".tit05").addClass("tran01");
				$(".item01").find(".tit06").addClass("tran03");
				$(".item01").find(".tit07").addClass("tran04");
				$(".item01").find(".tit08").addClass("tran04")
			}, 0)
		}
	};
	var transend = "webkitTransitionEnd MSTransitionEnd oTransitionEnd TransitionEnd";
	$(".item01").bind(transend, function(e) {
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			setTimeout(function() {
				_this.find(".tit01").addClass("tran01");
				_this.find(".tit02").addClass("tran02");
				_this.find(".tit03").addClass("tran01");
				_this.find(".tit04").addClass("tran01");
				_this.find(".tit05").addClass("tran01");
				_this.find(".tit06").addClass("tran03");
				_this.find(".tit07").addClass("tran04");
				_this.find(".tit08").addClass("tran04")
			}, 0)
		}
	});
	$(".item01").bind("touchstart", function() {
		try {
			var oMusic = $(".music").get(0);
			if (adfri && oMusic.paused && !! $(document).find(".musicplay").length) {
				oMusic.play()
			}
			adfri = false
		} catch (e) {}
		var itn = $(".item02");
		itn.find(".tit01").removeClass("tran01");
		itn.find(".tit02").removeClass("tran02");
		itn.find(".tit03").removeClass("tran03");
		itn.find(".tit04").removeClass("tran03");
		itn.find(".tit05").removeClass("tran05");
		itn.find(".tit06").removeClass("tran06")
	});
	$(".item02").bind(transend, function(e) {
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			setTimeout(function() {
				_this.find(".tit01").addClass("tran01");
				_this.find(".tit02").addClass("tran02");
				_this.find(".tit03").addClass("tran03");
				_this.find(".tit04").addClass("tran03");
				_this.find(".tit05").addClass("tran05");
				_this.find(".tit06").addClass("tran06")
			}, 0)
		}
	});
	$(".item02").bind("touchstart", function() {
		var itn = $(".item01");
		itn.find(".tit01").removeClass("tran01");
		itn.find(".tit02").removeClass("tran02");
		itn.find(".tit03").removeClass("tran01");
		itn.find(".tit04").removeClass("tran01");
		itn.find(".tit05").removeClass("tran01");
		itn.find(".tit06").removeClass("tran03");
		itn.find(".tit07").removeClass("tran04");
		itn.find(".tit08").removeClass("tran04");
		var itp = $(".item03");
		itp.find(".tit01").removeClass("tran01");
		itp.find(".tit02").removeClass("tran02");
		itp.find(".tit03").removeClass("tran02")
	});
	$(".item03").bind(transend, function(e) {
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			setTimeout(function() {
				_this.find(".tit01").addClass("tran01");
				_this.find(".tit02").addClass("tran02");
				_this.find(".tit03").addClass("tran02")
			}, 0)
		}
	});
	$(".item03").bind("touchstart", function() {
		var itn = $(".item02");
		itn.find(".tit01").removeClass("tran01");
		itn.find(".tit02").removeClass("tran02");
		itn.find(".tit03").removeClass("tran03");
		itn.find(".tit04").removeClass("tran03");
		itn.find(".tit05").removeClass("tran05");
		itn.find(".tit06").removeClass("tran06");
		var itp = $(".item04");
		itp.find(".tit01").removeClass("tran01");
		itp.find(".tit02").removeClass("tran02");
		itp.find(".tit03").removeClass("tran02")
	});
	$(".item04").bind(transend, function(e) {
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			setTimeout(function() {
				_this.find(".tit01").addClass("tran01");
				_this.find(".tit02").addClass("tran02");
				_this.find(".tit03").addClass("tran02")
			}, 0)
		}
	});
	$(".item04").bind("touchstart", function() {
		var itn = $(".item03");
		itn.find(".tit01").removeClass("tran01");
		itn.find(".tit02").removeClass("tran02");
		itn.find(".tit03").removeClass("tran02");
		var itp = $(".item05");
		itp.find(".tit02").removeClass("tran01");
		itp.find(".tit03").removeClass("tran01");
		itp.find(".tit04").removeClass("tran01");
		itp.find(".tit05").removeClass("tran01")
	});
	$(".item05").bind(transend, function(e) {
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			setTimeout(function() {
				_this.find(".tit02").addClass("tran01");
				_this.find(".tit03").addClass("tran01");
				_this.find(".tit04").addClass("tran01");
				_this.find(".tit05").addClass("tran01")
			}, 0)
		}
	});
	$(".item05").bind("touchstart", function() {
		var itn = $(".item04");
		itn.find(".tit01").removeClass("tran01");
		itn.find(".tit02").removeClass("tran02");
		itn.find(".tit03").removeClass("tran02");
		var itp = $(".item06");
		itp.find(".tit01").removeClass("tran01");
		itp.find(".tit02").removeClass("tran02");
		itp.find(".tit03").removeClass("tran03");
		itp.find(".tit04").removeClass("tran04")
	});
	$(".item06").bind(transend, function(e) {
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			setTimeout(function() {
				_this.find(".tit01").addClass("tran01");
				_this.find(".tit02").addClass("tran02");
				_this.find(".tit03").addClass("tran03");
				_this.find(".tit04").addClass("tran04")
			}, 0)
		}
	});
	$(".item06").bind("touchstart", function() {
		var itn = $(".item05");
		itn.find(".tit02").removeClass("tran01");
		itn.find(".tit03").removeClass("tran01");
		itn.find(".tit04").removeClass("tran01");
		itn.find(".tit05").removeClass("tran01");
		var itp = $(".item07");
		itp.find(".tit01").removeClass("tran01");
		itp.find(".tit02").removeClass("tran02");
		itp.find(".tit03").removeClass("tran01")
	});
	$(".item07").bind(transend, function(e) {
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			setTimeout(function() {
				_this.find(".tit01").addClass("tran01");
				_this.find(".tit02").addClass("tran02");
				_this.find(".tit03").addClass("tran01")
			}, 0)
		}
	});
	$(".item07").bind("touchstart", function() {
		var itp = $(".item06");
		itp.find(".tit01").removeClass("tran01");
		itp.find(".tit02").removeClass("tran02");
		itp.find(".tit03").removeClass("tran03");
		itp.find(".tit04").removeClass("tran04")
	});
	$(".item08").bind("touchstart", function() {
		var itn = $(".item07");
		itn.find(".tit01").removeClass("tran01");
		itn.find(".tit02").removeClass("tran02");
		itn.find(".tit03").removeClass("tran01");
		var itp = $(".item09");
		itp.find(".tit01").removeClass("tran01");
		itp.find(".tit02").removeClass("tran01")
	});
	$(".item09").bind(transend, function(e) {
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			setTimeout(function() {
				_this.find(".tit01").addClass("tran01");
				_this.find(".tit02").addClass("tran01")
			}, 0)
		}
	});
	$(".tel").bind("touchend", function() {
		var num = $(this).text().replace(/\D/g, "");
		location.href = "tel:" + num
	});
	$(".item06 .tit02 i").bind("touchend", function() {
		window.location.href = "http://qjcb.tixaapp.com/"
	})
});
$(function() {
	var curC7slide = $(".itemlist .item08 .tit01 dl");
	var curC7slideItem = curC7slide.find("dd");
	var itemNum = curC7slideItem.length;
	var slideItemWidth = winW;
	var slideMoveDist = translateX = 0;
	var startX = endX = startY = endY = iCount = 0;
	var isMoveX = false;
	var dTime = 200;
	curC7slide.css({
		"width": (itemNum * 100) + "%",
		"height": curC7slideItem.get(0).clientHeight + "px",
		"-webkit-transition-delay": "0ms",
		"-webkit-transition-timing-function": "ease-in-out",
		"-webkit-transform": "translate3d(0,0,0)"
	});
	curC7slideItem.css({
		"width": (100 / itemNum) + "%"
	});
	curC7slide.parent().parent().find(".pageleft").hide();
	curC7slide.get(0).addEventListener("touchstart", function(e) {
		startX = endX = parseInt(e.touches[0].pageX);
		startY = endY = parseInt(e.touches[0].clientY);
		translateX = parseInt(curC7slide.css("-webkit-transform").split(/[(]|[,]|[)]/)[1])
	}, false);
	curC7slide.get(0).addEventListener("touchmove", function(e) {
		endX = parseInt(e.touches[0].pageX);
		endY = parseInt(e.touches[0].clientY);
		var diffX = parseInt(endX - startX);
		var diffY = parseInt(endY - startY);
		if (Math.abs(diffX) > Math.abs(diffY)) {
			isMoveX = true;
			e.preventDefault();
			e.stopPropagation();
			curC7slide.css({
				"-webkit-transition-duration": "0ms",
				"-webkit-transform": "translate3d(" + (translateX + diffX) + "px,0,0)"
			})
		}
	}, false);
	curC7slide.get(0).addEventListener("touchend", function(e) {
		if (isMoveX) {
			e.stopPropagation();
			if (startX - endX > 10) {
				moveLeft()
			} else if (startX - endX < -10) {
				moveRight()
			} else {
				curC7slide.css({
					"-webkit-transition-duration": "0ms",
					"-webkit-transform": "translate3d(" + -(slideItemWidth * iCount) + "px,0,0)"
				})
			}
		}
		isMoveX = false;
		if (itemNum - 1 == 0) {
			curC7slide.parent().parent().find(".pageleft").hide();
			curC7slide.parent().parent().find(".pageright").hide()
		} else {
			if (iCount == 0) {
				curC7slide.parent().parent().find(".pageleft").hide();
				curC7slide.parent().parent().find(".pageright").show()
			} else if (iCount == itemNum - 1) {
				curC7slide.parent().parent().find(".pageright").hide();
				curC7slide.parent().parent().find(".pageleft").show()
			} else if (iCount > 0 && iCount < itemNum - 1) {
				curC7slide.parent().parent().find(".pageleft").show();
				curC7slide.parent().parent().find(".pageright").show()
			}
		}
	}, false);

	function moveLeft() {
		if (iCount < itemNum - 1) {
			iCount++;
			itemChange(iCount)
		} else {
			curC7slide.css({
				"-webkit-transition-duration": "0ms",
				"-webkit-transform": "translate3d(" + -(slideItemWidth * iCount) + "px,0,0)"
			})
		}
	}
	function moveRight() {
		if (iCount > 0) {
			iCount--;
			itemChange(iCount)
		} else {
			curC7slide.css({
				"-webkit-transition-duration": "0ms",
				"-webkit-transform": "translate3d(" + -(slideItemWidth * iCount) + "px,0,0)"
			})
		}
	}
	function itemChange(c1) {
		var mBegin = -(slideItemWidth * (c1 - 1));
		var mEnd = -(slideItemWidth * c1);
		if (mBegin != mEnd) {
			if (mBegin > mEnd) {
				curC7slide.css({
					"-webkit-transition-duration": dTime + "ms",
					"-webkit-transform": "translate3d(" + mEnd + "px,0,0)"
				})
			} else {
				curC7slide.css({
					"-webkit-transition-duration": dTime + "ms",
					"-webkit-transform": "translate3d(" + mEnd + "px,0,0)"
				})
			}
		}
	}
	$(".item08 .tit01 .d1").bind("touchend", function(e) {
		if (isMoveX) {
			return
		} else {
			window.location.href = "http://tixaapp.com/weizhan"
		}
	});
	$(".item08 .tit01 .d2").bind("touchend", function(e) {
		if (isMoveX) {
			return
		} else {
			window.location.href = "http://tixaapp.com/weizhan2"
		}
	});
	$(".item08 .tit01 .d3").bind("touchend", function(e) {
		if (isMoveX) {
			return
		} else {
			window.location.href = "http://tixaapp.com/weizhan3"
		}
	});
	$(".item08 .tit01 .d4").bind("touchend", function(e) {
		if (isMoveX) {
			return
		} else {
			window.location.href = "http://tixaapp.com/weizhan4"
		}
	});
	$(".item08 .tit01 .d5").bind("touchend", function(e) {
		if (isMoveX) {
			return
		} else {
			window.location.href = "http://tixaapp.com/weizhan6"
		}
	});
	$(".item08 .tit01 .d6").bind("touchend", function(e) {
		if (isMoveX) {
			return
		} else {
			window.location.href = "http://tixaapp.com/weizhan9"
		}
	})
});
$(function() {
	var imgUrl = "http://tixaapp.com/weizhan10/img/logo.jpg";
	var lineLink = "http://tixaapp.com/weizhan10";
	var descContent = '打破常规。情景传播源于指尖的触摸！';
	var shareTitle = '情景传播';
	var appid = '';

	function shareFriend() {
		WeixinJSBridge.invoke('sendAppMessage', {
			"appid": appid,
			"img_url": imgUrl,
			"img_width": "200",
			"img_height": "200",
			"link": lineLink,
			"desc": descContent,
			"title": shareTitle
		}, function(res) {})
	}
	function shareTimeline() {
		WeixinJSBridge.invoke('shareTimeline', {
			"img_url": imgUrl,
			"img_width": "200",
			"img_height": "200",
			"link": lineLink,
			"desc": descContent,
			"title": shareTitle
		}, function(res) {})
	}
	function shareWeibo() {
		WeixinJSBridge.invoke('shareWeibo', {
			"content": descContent,
			"url": lineLink,
		}, function(res) {})
	}
	document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
		WeixinJSBridge.on('menu:share:appmessage', function(argv) {
			shareFriend()
		});
		WeixinJSBridge.on('menu:share:timeline', function(argv) {
			shareTimeline()
		});
		WeixinJSBridge.on('menu:share:weibo', function(argv) {
			shareWeibo()
		})
	}, false)
});