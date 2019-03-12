//define([], function() {
function WVJsBridge() {
	if (!(this instanceof WVJsBridge)) {
		return new WVJsBridge()
	}
}
WVJsBridge.prototype.setupWebViewJavascriptBridge = function(callback) {
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
	if(isAndroid) {
		this.connectWebViewJavascriptBridge(function(bridge) {
			callback(bridge)
		})
	} else {
		if(window.WKWebViewJavascriptBridge) {
			return callback(window.WKWebViewJavascriptBridge);
		}
		if(window.WKWVJBCallbacks) {
			return window.WKWVJBCallbacks.push(callback);
		}
		window.WKWVJBCallbacks = [callback];
		window.webkit.messageHandlers.iOS_Native_InjectJavascript.postMessage(null);
	}
}
WVJsBridge.prototype.connectWebViewJavascriptBridge = function(callback) {
	if(window.WebViewJavascriptBridge) {
		callback(window.WebViewJavascriptBridge)
	} else {
		document.addEventListener(
			'WebViewJavascriptBridgeReady',
			function() {
				callback(window.WebViewJavascriptBridge)
			},
			false
		);
	}
}
WVJsBridge.prototype.registerHandler = function(name, callback) {
	this.setupWebViewJavascriptBridge(function(bridge) {
		bridge.registerHandler(name, callback);
	})
}
WVJsBridge.prototype.callHandler = function(name, parameters, callback) {
	this.setupWebViewJavascriptBridge(function(bridge) {
		bridge.callHandler(name, parameters, callback);
	})
}
/*openURL('跳转链接', '标题', {titleBtn: '按钮标题',
						'titleBtnUrl': '按钮跳转链接', 
						gotoTitleName: '跳转页面标题',
						parameters: {'参数1': '111', '参数2': '222'}}
)*/
WVJsBridge.prototype.openURL = function(url, title, parameters, callback) {
	this.callHandler('openURL', {
		'url': url,
		'title': title,
		'parameters': parameters
	}, callback);
}
WVJsBridge.prototype.getParameters = function(callback) {
	this.callHandler('getParameters', null, callback);
}
WVJsBridge.prototype.callback = function(parameters) {
	this.callHandler('callback', parameters);
}
WVJsBridge.prototype.goBack = function(delay) {
	this.callHandler('goBack', {'delay': delay});
}
WVJsBridge.prototype.gotoLogin = function() {
	this.callHandler('gotoLogin');
}
WVJsBridge.prototype.gotoScanQRCode = function(callback) {
	this.callHandler('gotoScanQRCode', null, callback);
}
WVJsBridge.prototype.alert = function(title, message, callback) {
	this.callHandler('alert', {
		'title': title,
		'message': message
	}, callback);
}

WVJsBridge.prototype.toast = function(message) {
	this.callHandler('toast', {
		'message': message
	});
}
WVJsBridge.prototype.loading = function(message) {
	this.callHandler('loading', {
		'message': message
	});
}
WVJsBridge.prototype.dismiss = function() {
	this.callHandler('dismiss');
}
WVJsBridge.prototype.print = function(message) {
	this.callHandler('print', {
		'message': message
	});
}
WVJsBridge.prototype.getUserInfo = function(callback) {
	this.callHandler('getUserInfo', null, callback);
}
WVJsBridge.prototype.getLoginStatus = function(callback) {
	this.callHandler('getLoginStatus', null, callback);
}
WVJsBridge.prototype.hideKeyboard = function() {
	this.callHandler('hideKeyboard')
}
	/*跳转绑定邮箱*/
WVJsBridge.prototype.gotoBindEmail = function(callback) {
	this.callHandler('gotoBindEmail');
}
//传图片url地址给App 
WVJsBridge.prototype.showPdf = function(url) {
	this.callHandler('showPdf', {'url': url});
}

WVJsBridge.prototype.logout = function() {
	this.callHandler('logout');
}
// 
//	return WVJsBridge;  	
//})

export default WVJsBridge

