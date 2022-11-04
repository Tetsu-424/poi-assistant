def_count = '00:00:00';

function quest3(idname3){
	Push.create('No3 Fleet just departed!',{
		body:'Expedition has been begun.',
		//icon:
		timeout:30000,
		vibrate:[50,50,200],
	});
	var obj3 = document.getElementById(idname3);
	var quest3ID = obj3.value;
	quest_timeSelect3(quest3ID);
}
//遠征時間のデータ
function quest_timeSelect3(quest3ID){
	var time3 = [null,900,1800,1200,3000,5400,2400,3600,10800,14400,5400,18000,28800,14400,21600,43200,54000,2700,18000,21600,7200,8400,10800,14400,30000,144000,288000,72000,90000,86400,172800,7200,86400,900,1800,25200,32400,9900,10500,108000,24600,1500,3300,8100,2100,31200];
    quest_time3 = time3[quest3ID];
	quest_start3(quest_time3);
}
	
function quest_start3(){
	document.Fleet3timer.startTimer.disabled = true;
	time3ID = setInterval("countdown3(quest_time3)",1000);
}

function countdown3(){
	quest_time3--;
	document.Fleet3timer.counter.value = simply_count3(quest_time3);
	if(quest_time3<=0){
		count_stop3();
		Push.create('No3 Fleet came back just now!',{
		body:'Expedition has been ended.',
		//icon:
		timeout:30000,
		vibrate:[50,50,200],
		});
	}
}

function simply_count3(){
	var hour = Math.floor(quest_time3 / 3600);
	var minute = Math.floor((quest_time3 - hour * 3600) / 60);
	var second = quest_time3 % 60;
	
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

function count_stop3(quest_time3){
	clearInterval(time3ID);
	reset_time3();
}

function reset_time3(){
	quest_time3 = 0;
	document.Fleet3timer.counter.value = def_count;
	document.Fleet3timer.startTimer.disabled = false;
}
