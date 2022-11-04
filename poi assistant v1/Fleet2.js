def_count = '00:00:00';

function quest2(idname2){
	var obj2 = document.getElementById(idname2);
	var quest2ID = obj2.value;
	Push.create('No2 Fleet just departed!',{
		body:'Expedition has been begun.',
		//icon:
		timeout:30000,
		vibrate:[50,50,200],
	});
	quest_timeSelect2(quest2ID);
}
//遠征時間のデータ
function quest_timeSelect2(quest2ID){
	var time2 = [null,10,1800,1200,3000,5400,2400,3600,10800,14400,5400,18000,28800,14400,21600,43200,54000,2700,18000,21600,7200,8400,10800,14400,30000,144000,288000,72000,90000,86400,172800,7200,86400,900,1800,25200,32400,9900,10500,108000,24600,1500,3300,8100,2100,31200,5];
    quest_time2 = time2[quest2ID];
	quest_start2(quest_time2);
}
	
function quest_start2(){
	document.Fleet2timer.startTimer.disabled = true;
	time2ID = setInterval("countdown2(quest_time2)",1000);
}

function countdown2(){
	quest_time2--;
	document.Fleet2timer.counter.value = simply_count2(quest_time2);
	if(quest_time2<=0){
		count_stop2();
		Push.create('No2 Fleet came back just now!',{
		body:'Expedition has been ended.',
		//icon:
		timeout:30000,
		vibrate:[50,50,200],
		requireInteraction:true,
		onClick: function(){
			location.href = 'http://www.dmm.com/netgame/social/-/gadgets/=/app_id=854854/';
			this.close();
			}
		});
	}
}

function simply_count2(){
	var hour = Math.floor(quest_time2 / 3600);
	var minute = Math.floor((quest_time2 - hour * 3600) / 60);
	var second = quest_time2 % 60;
	
	if(hour<10){
		hour = '0' + hour;
	}
	
	if(minute<10){
		minute = '0' + minute;
	}
	if(second<10){
		second = '0' + second;
	}
	return hour + ':' + minute + ':' + second;
}

function count_stop2(quest_time2){
	clearInterval(time2ID);
	reset_time2();
}

function reset_time2(){
	quest_time2 = 0;
	document.Fleet2timer.counter.value = def_count;
	document.Fleet2timer.startTimer.disabled = false;
}




