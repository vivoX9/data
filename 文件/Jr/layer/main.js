$(".qm-add").click(function(){
	var val = $(this).html();
	if(val=='+'){
		$(this).html('-');
		$(".qm-contant").show();
		$(this).addClass('qm-add2');
	}else{
		$(this).html('+');
		$(".qm-contant").hide();
		$(this).removeClass('qm-add2');
	}
})
//tk_mains
$(".top_tc_div").click(function(){
	$(this).hide();
	$(".tk_mains").hide();
	$(".kaoqbg").hide();
	$(".userMsg").hide();
	$(".topcdab").hide();
	$(".topcdabs").hide();
	$('#topcd').attr('src','images/topcd.png');
	$("#topkq").attr('src','images/topkq.png');
})

$(".mml-model").mouseover(function(){
	$(this).children('.mml-shwo-model').show();
}).mouseout(function(){
	$(this).children('.mml-shwo-model').hide();
})
$("#topcd").click(function(){
	$(".top_tc_div").show();
	var val = $(this).attr('src');
	$(".kaoqbg").hide();
	$(".userMsg").hide();
	$(".topcdabs").hide();
	$("#topkq").attr('src','images/topkq.png');
	$("#topsetting").attr('src','images/topsetting.png');
	if(val=='images/topcd.png'){
		$(this).attr('src','images/topcdx.png');
		$(".tk_mains").show();
		$(".topcdab").show();
	}else{
		$(this).attr('src','images/topcd.png');
		$(".tk_mains").hide();
		$(".topcdab").hide();
	}
})
//设置 topcdab
$("#topsetting").click(function(){
	$(".top_tc_div").show();
	var val = $(this).attr('src');
	$(".kaoqbg").hide();
	$(".userMsg").hide();
	$(".topcdab").hide();
	$(".topcdabs").hide();
	$("#topkq").attr('src','images/topkq.png');
	$('#topcd').attr('src','images/topcd.png');	
	if(val=='images/topsetting.png'){
		$(this).attr('src','images/topsettingx.png');
		$(".tk_mains").show();
		$(".topcdabs").show();
	}else{
		$(this).attr('src','images/topsetting.png');
		$(".tk_mains").hide();
		$(".topcdabs").hide();
	}
})

//考勤
$("#topkq").click(function(){
	$(".top_tc_div").show();
	var val = $(this).attr('src');
	$(".userMsg").hide();
	$(".tk_mains").hide();
	$(".topcdab").hide();
	$(".topcdabs").hide();
	$('#topcd').attr('src','images/topcd.png');
	$("#topsetting").attr('src','images/topsetting.png');
	if(val=='images/topkq.png'){
		$(this).attr('src','images/topkqx.png');
		$(".kaoqbg").show();
	}else{
		$(this).attr('src','images/topkq.png');
		$(".kaoqbg").hide();
	}
})
//头像
$("#topheader").click(function(){
	$(".top_tc_div").show();
	$(".userMsg").toggle();
	$(".tk_mains").hide();
	$(".topcdab").hide();
	$(".topcdabs").hide();
	$("#topkq").attr('src','images/topkq.png');
	$('#topcd').attr('src','images/topcd.png');
	$("#topsetting").attr('src','images/topsetting.png');
	$(".kaoqbg").hide();
})

$(".relative-main .rel-model").click(function(){
	var index=$(".relative-main .rel-model").index(this);
	$(".relative-main .rel-model-new").hide();
	$(".relative-main .rel-model-new").eq(index).show();
	$(".relative-main .rel-model").eq(0).children('img').attr('src',$(".relative-main .rel-model").eq(0).children('img').attr('title'));
	$(".relative-main .rel-model").eq(1).children('img').attr('src',$(".relative-main .rel-model").eq(1).children('img').attr('title'));
	$(".relative-main .rel-model").eq(2).children('img').attr('src',$(".relative-main .rel-model").eq(2).children('img').attr('title'));
	$(".relative-main .rel-model").eq(3).children('img').attr('src',$(".relative-main .rel-model").eq(3).children('img').attr('title'));
	$(this).children('img').attr('src',$(this).children('img').attr('for'));
});

$(".title-line em").click(function(){
	$(this).parent().next('div').toggle();
	var html = $(this).html();
	if(html=='即时通讯'){
		$(".messageSc").toggle();
	}
})

$(".rel-model-new8 ul li").click(function(){
	var index = $(".rel-model-new8 ul li").index(this);
	$(".rel-model-new8 .rel-model-main").hide();
	$(".rel-model-new8 .rel-model-main").eq(index).show();
	$(this).siblings().removeClass('clk');
	$(this).addClass('clk');
})

$(".preson-left-nav").click(function(){
	var index = $(".preson-left-nav").index(this);
	$(".preson-right").hide();
	$(".preson-right").eq(index).show();
	$(".rln_nav").hide();
	$(this).children(".rln_nav").show();	
	if(index==0){
		$(".preson-left-nav").eq(0).removeClass('rcap').addClass('rcapx');
		$(".preson-left-nav").eq(1).removeClass('hyydx').addClass('hyyd');
		$(".preson-left-nav").eq(2).removeClass('ldrfzrx').addClass('ldrfzr');
	}
	if(index==1){
		$(".preson-left-nav").eq(0).removeClass('rcapx').addClass('rcap');
		$(".preson-left-nav").eq(1).removeClass('hyyd').addClass('hyydx');
		$(".preson-left-nav").eq(2).removeClass('ldrfzrx').addClass('ldrfzr');
	}
	if(index==2){
		$(".preson-left-nav").eq(0).removeClass('rcapx').addClass('rcap');
		$(".preson-left-nav").eq(1).removeClass('hyydx').addClass('hyyd');
		$(".preson-left-nav").eq(2).removeClass('ldrfzr').addClass('ldrfzrx');
	}
})

$(".fml-right p").click(function(){
	var index = $(".mml-cont p").index(this);
	$(this).siblings().removeClass('clk');
	$(this).addClass('clk');
})

$(".sch-left span").click(function(){
	var index = $(".mml-cont p").index(this);
	$(this).siblings().removeClass('clk');
	$(this).addClass('clk');
})

$(".addbook,.addbook2").click(function(){
	$(".add_tc_div").show();
	$(".invitedialog").show();
})

$(".add_tc_div,#idcancel,#closeAdd").click(function(){
	$(".invitedialog").hide();
	$(".add_tc_div").hide();
})

$(".mml-cont p").click(function(){
	var index = $(".mml-cont p").index(this);
	$(this).siblings().removeClass('clk');
	$(this).addClass('clk');
	$(".mm-right").hide();
	$(".mm-right").eq(index).show();
})
$(".fmll_mode").click(function(){
	var index = $(".fmll_mode").index(this);
	if(index==0){
		$(".fmll_mode").eq(0).removeClass('daiban').addClass('daibanx');
		$(".fmll_mode").eq(1).removeClass('daiyuex').addClass('daiyue');
		$(".fmll_mode").eq(2).removeClass('guanzhux').addClass('guanzhu');
		$(".fmll_mode").eq(3).removeClass('dubanx').addClass('duban');
	}
	if(index==1){
		$(".fmll_mode").eq(0).removeClass('daibanx').addClass('daiban');
		$(".fmll_mode").eq(1).removeClass('daiyue').addClass('daiyuex');
		$(".fmll_mode").eq(2).removeClass('guanzhux').addClass('guanzhu');
		$(".fmll_mode").eq(3).removeClass('dubanx').addClass('duban');
	}
	if(index==2){
		$(".fmll_mode").eq(0).removeClass('daibanx').addClass('daiban');
		$(".fmll_mode").eq(1).removeClass('daiyuex').addClass('daiyue');
		$(".fmll_mode").eq(2).removeClass('guanzhu').addClass('guanzhux');
		$(".fmll_mode").eq(3).removeClass('dubanx').addClass('duban');
	}
	if(index==3){
		$(".fmll_mode").eq(0).removeClass('daibanx').addClass('daiban');
		$(".fmll_mode").eq(1).removeClass('daiyuex').addClass('daiyue');
		$(".fmll_mode").eq(2).removeClass('guanzhux').addClass('guanzhu');
		$(".fmll_mode").eq(3).removeClass('duban').addClass('dubanx');
	}
})

$(document).ready(function() {  
    //$(".schmcont").niceScroll("#schmcont",{boxzoom:true,touchbehavior:false});
	$(".schmcont").niceScroll({cursorborder:"2px",cursorcolor:"#eff1f2",boxzoom:false});
	$(".mml-cont").niceScroll({cursorborder:"2px",cursorcolor:"#eff1f2",boxzoom:false});
    //$(".mml-cont").niceScroll("#mml-cont",{boxzoom:true});
});


