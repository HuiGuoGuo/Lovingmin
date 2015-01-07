function show_cur_times(){
//»ñÈ¡µ±Ç°ÈÕÆÚ
 var date_time = new Date();
 //¶¨ÒåÐÇÆÚ
 
 var week;
 //switchÅÐ¶Ï
 switch (date_time.getDay()){
	 case 1: week="星期一"; break;
	 case 2: week="星期二"; break;
	 case 3: week="星期三"; break;
	 case 4: week="星期四"; break;
	 case 5: week="星期五"; break;
	 case 6: week="星期六"; break;
	 default:week="星期日"; break;
 }
 
 //Äê
 var year = date_time.getFullYear();
 //ÅÐ¶ÏÐ¡ÓÚ10£¬Ç°Ãæ²¹0
 year = year-2015;
 
 //ÔÂ
 var month = date_time.getMonth()+1;
 	//ÅÐ¶ÏÐ¡ÓÚ10£¬Ç°Ãæ²¹0
    month = month - 1;
 
 //ÈÕ
 var day = date_time.getDate();
 	//ÅÐ¶ÏÐ¡ÓÚ10£¬Ç°Ãæ²¹0
    day = day - 1;
 
 //Ê±
 var hours =date_time.getHours();
 	//ÅÐ¶ÏÐ¡ÓÚ10£¬Ç°Ãæ²¹0
    if(hours<10){
 	hours="0"+hours;
 }
 
 //·Ö
 var minutes =date_time.getMinutes();
 	//ÅÐ¶ÏÐ¡ÓÚ10£¬Ç°Ãæ²¹0
    if(minutes<10){
 	minutes="0"+minutes;
 }
 
 //Ãë
 var seconds=date_time.getSeconds();
 	//ÅÐ¶ÏÐ¡ÓÚ10£¬Ç°Ãæ²¹0
    if(seconds<10){
 	seconds="0"+seconds;
 }
 
 //Æ´½ÓÄêÔÂÈÕÊ±·ÖÃë
 
 var month_day;
 //switchÅÐ¶Ï
 switch (date_time.getMonth()+1){
	 case 1: month_day = 31; break;
	 case 2: month_day = 28; break;
	 case 3: month_day = 31; break;
	 case 4: month_day = 30; break;
	 case 5: month_day = 31; break;
	 case 6: month_day = 30; break;
	 case 7: month_day = 31; break;
	 case 8: month_day = 31; break;
	 case 9: month_day = 30; break;
	 case 10: month_day = 31; break;
	 case 11: month_day = 30; break;
	 case 12: month_day = 31; break;
 }
 
 var date_str = year+"年"+month+"月"+day+"天"+hours+"小时"+minutes+"分"+seconds+"秒"
 var day_str = Math.abs(year*365+month*month_day+day)+"天"+hours+"小时"+minutes+"分"+seconds+"秒"
 var hours_str = (Math.abs(year*365+month*month_day+day))*24+"小时"+minutes+"分"+seconds+"秒"
 var minitus_str = ((Math.abs(year*365+month*month_day+day))*24)*60+"分"+seconds+"秒"
// var second_str =Math.abs((((Math.abs(year*365+month*month_day+day))*24)*60)*60+seconds-40)+"秒"

 
 //ÏÔÊ¾ÔÚidÎªshowtimesµÄÈÝÆ÷Àï
 document.getElementById("showtimes").innerHTML= date_str;
 document.getElementById("showday").innerHTML= day_str;
 document.getElementById("showhours").innerHTML= hours_str;
 document.getElementById("showmini").innerHTML= minitus_str;
// document.getElementById("showsecond").innerHTML= second_str;

}
 
 //ÉèÖÃ1Ãëµ÷ÓÃÒ»´Îshow_cur_timesº¯Êý
setInterval("show_cur_times()",100);

