import 'babel-polyfill'
import '@/css/bootstrap.css'
import '@/css/reset.css'
import '@/css/style.css'
import FastClick from '@/lib/fastclick.min.js'
import '@/lib/config.js'
import Tools from "@/lib/fix.js"
import WVJsBridge from "@/lib/WVJsBridge.js"
import $ from 'jQuery'

//快速点击
// $(function() {
//     FastClick.attach(document.body);
// });

let Browser = {
	versions: function() {
		var b = navigator.userAgent,
			c = navigator.appVersion;
		return {
			trident: b.indexOf("Trident") > -1,
			presto: b.indexOf("Presto") > -1,
			webKit: b.indexOf("AppleWebKit") > -1,
			gecko: b.indexOf("Gecko") > -1 && b.indexOf("KHTML") == -1,
			mobile: !!b.match(/AppleWebKit.*Mobile.*/),
			ios: !!b.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
			android: b.indexOf("Android") > -1 || b.indexOf("Linux") > -1,
			iPhone: b.indexOf("iPhone") > -1,
			iPad: b.indexOf("iPad") > -1,
			webApp: b.indexOf("Safari") == -1,
			weixin: b.indexOf("MicroMessenger") > -1,
			qq: b.match(/\sQQ/i) == " qq"
		}
	}(),
	isMobile: function() {
		return this.versions.mobile || this.versions.ios || this.versions.android || this.versions.iPhone || this.versions.iPad
	},
	language: (navigator.browserLanguage || navigator.language).toLowerCase()
}


let wvJsBridge = new WVJsBridge();



export default {
	Browser,
	wvJsBridge
}
