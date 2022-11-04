def_count = '00:00:00';

function quest4(idname4){
	Push.create('No4 Fleet just departed!',{
		body:'Expedition has been begun.',
		//icon:
		timeout:30000,
		vibrate:[50,50,200],
	});
	var obj4 = document.getElementById(idname4);
	var quest4ID = obj4.value;
	quest_timeSelect4(quest4ID);
}
//遠征時間のデータ
function quest_timeSelect4(quest4ID){
	var time4 = [null,900,1800,1200,3000,5400,2400,3600,10800,14400,5400,18000,28800,14400,21600,43200,54000,2700,18000,21600,7200,8400,10800,14400,30000,144000,288000,72000,90000,86400,172800,7200,86400,900,1800,25200,32400,9900,10500,108000,24600,1500,3300,8100,2100,31200];
    quest_time4 = time4[quest4ID];
	quest_start4(quest_time4);
}
	
function quest_start4(){
	document.Fleet4timer.startTimer.disabled = true;
	time4ID = setInterval("countdown4(quest_time4)",1000);
}

function countdown4(){
	quest_time4--;
	document.Fleet4timer.counter.value = simply_count4(quest_time4);
	if(quest_time4<=0){
		count_stop4();
		Push.create('No4 Fleet came back just now!',{
		body:'Expedition has been ended.',
		//icon:
		timeout:30000,
		vibrate:[50,50,200],
		});
	}
}

function simply_count4(){
	var hour = Math.floor(quest_time4 / 3600);
	var minute = Math.floor((quest_time4 - hour * 3600) / 60);
	var second = quest_time4 % 60;
	
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

function count_stop4(quest_time3){
	clearInterval(time4ID);
	reset_time4();
}

function reset_time4(){
	quest_time4 = 0;
	document.Fleet4timer.counter.value = def_count;
	document.Fleet4timer.startTimer.disabled = false;
}
