function timer(){
	var now=new Date();
	var dataLine=new Date("2018/8/13");
	var minsu=dataLine.getTime()-now.getTime();
	var days=parseInt(minsu/1000/60/60/24);
	var hours=parseInt(minsu/1000/60/60%24);
	var spans=document.getElementsByClassName("span")[0];
	var spans1=document.getElementsByClassName("span")[1];
	var spans2=document.getElementsByClassName("span")[2];
	spans.innerHTML=days+"天"+hours+"时";	
	spans1.innerHTML=days+"天"+hours+"时";
	spans2.innerHTML=days+"天"+hours+"时";
}
timer();
setInterval(timer,1000);
