def_dockTime = '00:00:00';

//第一ドック
function dock_1(shipType1){
	function dock1type(){
		ship1type = document.getElementById('shipType1').value;
		selectMagnification1(ship1type);
	}
	
	function dock1Lv(shipLv1){
		ship1Lv = document.getElementById('shipLv1').value;
		console.log(ship1Lv);
	}
	
	function shipDamage1(){
		var Now1HP = document.getElementById('Now_HP1').value;
		var Max1HP = document.getElementById('Max_HP1').value;
		
		ship1Damage = Max1HP - Now1HP;
		console.log(ship1Damage);
	}
	
	dock1type();
	dock1Lv();
	shipDamage1();
	calculationTime1(ship1Lv,ship1Damage,magnification1);
	document.dock1timer.start_Dock.disabled = true;
}

function selectMagnification1(){
	var magnificationData1 = [null,0.5,1,1.5,2];
	magnification1 = magnificationData1[ship1type];
}

function calculationTime1(){
	if(ship1Lv<=11){
		dockTime1 = Math.floor((ship1Lv * 10) * magnification1 * ship1Damage + 30);
	} else {
		var a = Math.floor(Math.sqrt(ship1Lv - 11) * 10 + 50);
		dockTime1 = Math.floor((ship1Lv * 5 + a) * magnification1 * ship1Damage + 30);
	}
	console.log(dockTime1);
	dock1ID = setInterval("countdownDock1('dockTime1')",1000);
}
	
function countdownDock1(){
	dockTime1--;
	document.dock1timer.dockCounter.value = dockCount1('dockTime1');
	if(dockTime1<=0){
		dockStop1();
	}
}

function dockCount1(){
	var hour1 = Math.floor(dockTime1 / 3600);
	var minute1 = Math.floor((dockTime1 - hour1 * 3600) / 60);
	var second1 = dockTime1 % 60;
	
	if(hour1<10){
		hour1 = '0' + hour1;
	}
	
	if(minute1<10){
		minute1 = '0' + minute1;
	}
	if(second1<10){
		second1 = '0' + second1;
	}
	return hour1 + ':' + minute1 + ':' + second1;
}

function dockStop1(){
	clearInterval(dock1ID);
	dock_reset1();
	Push.create('Your kanmusu have got out from No1 healing hot spring!!',{
		body:'kanmusu repair has been ended.',
		//icon:
		timeout:30000,
		vibrate:[50,50,200],
		requireInteraction:true,
		onClick: function(){
			location.href = 'http://www.dmm.com/netgame/social/-/gadgets/=/app_id=854854/';
			}
		});
}
	
function dock_reset1(){
	dockTime1 = 0;
	document.dock1timer.dockCounter.value = def_dockTime;
	document.dock1timer.start_Dock.disabled = false;
	document.dock1timer.shipLv1.value = null;
	document.dock1timer.Now_HP1.value = null;
	document.dock1timer.Max_HP1.value = null;
}



//第二ドック
function dock2(shipType2){
	function dock2type(){
		ship2type = document.getElementById('shipType2').value;
		selectMagnification2(ship2type);
	}
	
	function dock2Lv(shipLv2){
		ship2Lv = document.getElementById('shipLv2').value;
	}
	
	function shipDamage2(){
		var Now2HP = document.getElementById('Now_HP2').value;
		var Max2HP = document.getElementById('Max_HP2').value;
		
		ship2Damage = Max2HP - Now2HP;
	}
	
	dock2type();
	dock2Lv();
	shipDamage2();
	calculationTime2(ship2Lv,ship2Damage,magnification2);
	document.dock2timer.start_Dock.disabled = true;
}

function selectMagnification2(){
	var magnificationData2 = [null,0.5,1,1.5,2];
	magnification2 = magnificationData2[ship2type];
}

function calculationTime2(){
	if(ship2Lv<=11){
		dockTime2 = Math.floor((ship2Lv * 10) * magnification2 * ship2Damage + 30);
	} else {
		var b = Math.floor(Math.sqrt(ship2Lv - 11) * 10 + 50);
		dockTime2 = Math.floor((ship2Lv * 5 + b) * magnification2 * ship2Damage + 30);
	}
	dock2ID = setInterval("countdownDock2('dockTime2')",1000);
}
	
function countdownDock2(){
	dockTime2--;
	document.dock2timer.dockCounter.value = dockCount2('dockTime2');
	if(dockTime2<=0){
		dockStop2();
	}
}

function dockCount2(){
	var hour2 = Math.floor(dockTime2 / 3600);
	var minute2 = Math.floor((dockTime2 - hour2 * 3600) / 60);
	var second2 = dockTime2 % 60;
	
	if(hour2<10){
		hour2 = '0' + hour2;
	}
	
	if(minute2<10){
		minute2 = '0' + minute2;
	}
	if(second2<10){
		second2 = '0' + second2;
	}
	return hour2 + ':' + minute2 + ':' + second2;
}

function dockStop2(){
	clearInterval(dock2ID);
	dock_reset2();
	Push.create('Your kanmusu have got out from No1 healing hot spring!!',{
		body:'kanmusu repair has been ended.',
		//icon:
		timeout:30000,
		vibrate:[50,50,200],
		requireInteraction:true,
		onClick: function(){
			location.href = 'http://www.dmm.com/netgame/social/-/gadgets/=/app_id=854854/';
			}
		});
}
	
function dock_reset2(){
	dockTime2 = 0;
	document.dock2timer.dockCounter.value = def_dockTime;
	document.dock2timer.start_Dock.disabled = false;
	document.dock2timer.shipLv2.value = null;
	document.dock2timer.Now_HP2.value = null;
	document.dock2timer.Max_HP2.value = null;
}

//第三ドック
function dock3(shipType3){
	function dock3type(){
		ship3type = document.getElementById('shipType3').value;
		selectMagnification3(ship3type);
	}
	
	function dock3Lv(shipLv3){
		ship3Lv = document.getElementById('shipLv3').value;
	}
	
	function shipDamage3(){
		var Now3HP = document.getElementById('Now_HP3').value;
		var Max3HP = document.getElementById('Max_HP3').value;
		
		ship3Damage = Max3HP - Now3HP;
	}
	
	dock3type();
	dock3Lv();
	shipDamage3();
	calculationTime3(ship3Lv,ship3Damage,magnification3);
	document.dock3timer.start_Dock.disabled = true;
}

function selectMagnification3(){
	var magnificationData3 = [null,0.5,1,1.5,2];
	magnification3 = magnificationData3[ship3type];
}

function calculationTime3(){
	if(ship3Lv<=11){
		dockTime3 = Math.floor((ship3Lv * 10) * magnification3 * ship3Damage + 30);
	} else {
		var c = Math.floor(Math.sqrt(ship3Lv - 11) * 10 + 50);
		dockTime3 = Math.floor((ship3Lv * 5 + b) * magnification3 * ship3Damage + 30);
	}
	dock3ID = setInterval("countdownDock3('dockTime3')",1000);
}
	
function countdownDock3(){
	dockTime3--;
	document.dock3timer.dockCounter.value = dockCount3('dockTime3');
	if(dockTime3<=0){
		dockStop3();
	}
}

function dockCount3(){
	var hour3 = Math.floor(dockTime3 / 3600);
	var minute3 = Math.floor((dockTime3 - hour3 * 3600) / 60);
	var second3 = dockTime3 % 60;
	
	if(hour3<10){
		hour3 = '0' + hour3;
	}
	
	if(minute3<10){
		minute3 = '0' + minute3;
	}
	if(second3<10){
		second3 = '0' + second3;
	}
	return hour3 + ':' + minute3 + ':' + second3;
}

function dockStop3(){
	clearInterval(dock3ID);
	dock_reset3();
	Push.create('Your kanmusu have got out from No1 healing hot spring!!',{
		body:'kanmusu repair has been ended.',
		//icon:
		timeout:30000,
		vibrate:[50,50,200],
		requireInteraction:true,
		onClick: function(){
			location.href = 'http://www.dmm.com/netgame/social/-/gadgets/=/app_id=854854/';
			}
		});
}
	
function dock_reset3(){
	dockTime3 = 0;
	document.dock3timer.dockCounter.value = def_dockTime;
	document.dock3timer.start_Dock.disabled = false;
	document.dock3timer.shipLv3.value = null;
	document.dock3timer.Now_HP3.value = null;
	document.dock3timer.Max_HP3.value = null;
}

//第四ドック
function dock4(shipType4){
	function dock4type(){
		ship4type = document.getElementById('shipType4').value;
		selectMagnification4(ship4type);
	}
	
	function dock4Lv(shipLv4){
		ship4Lv = document.getElementById('shipLv4').value;
	}
	
	function shipDamage4(){
		var Now4HP = document.getElementById('Now_HP4').value;
		var Max4HP = document.getElementById('Max_HP4').value;
		
		ship4Damage = Max4HP - Now4HP;
	}
	
	dock4type();
	dock4Lv();
	shipDamage4();
	calculationTime4(ship4Lv,ship4Damage,magnification4);
	document.dock4timer.start_Dock.disabled = true;
}

function selectMagnification4(){
	var magnificationData4 = [null,0.5,1,1.5,2];
	magnification4 = magnificationData4[ship4type];
}

function calculationTime4(){
	if(ship4Lv<=11){
		dockTime4 = Math.floor((ship4Lv * 10) * magnification4 * ship4Damage + 30);
	} else {
		var d = Math.floor(Math.sqrt(ship4Lv - 11) * 10 + 50);
		dockTime2 = Math.floor((ship4Lv * 5 + b) * magnification4 * ship4Damage + 30);
	}
	dock4ID = setInterval("countdownDock4('dockTime4')",1000);
}
	
function countdownDock4(){
	dockTime4--;
	document.dock4timer.dockCounter.value = dockCount4('dockTime4');
	if(dockTime4<=0){
		dockStop4();
	}
}

function dockCount4(){
	var hour4 = Math.floor(dockTime4 / 3600);
	var minute4 = Math.floor((dockTime4 - hour4 * 3600) / 60);
	var second4 = dockTime4 % 60;
	
	if(hour4<10){
		hour4 = '0' + hour4;
	}
	
	if(minute4<10){
		minute4 = '0' + minute4;
	}
	if(second4<10){
		second4 = '0' + second4;
	}
	return hour4 + ':' + minute4 + ':' + second4;
}

function dockStop4(){
	clearInterval(dock4ID);
	dock_reset4();
	Push.create('Your kanmusu have got out from No1 healing hot spring!!',{
		body:'kanmusu repair has been ended.',
		//icon:
		timeout:30000,
		vibrate:[50,50,200],
		requireInteraction:true,
		onClick: function(){
			location.href = 'http://www.dmm.com/netgame/social/-/gadgets/=/app_id=854854/';
			}
		});
}
	
function dock_reset4(){
	dockTime4 = 0;
	document.dock4timer.dockCounter.value = def_dockTime;
	document.dock4timer.start_Dock.disabled = false;
	document.dock4timer.shipLv4.value = null;
	document.dock4timer.Now_HP4.value = null;
	document.dock4timer.Max_HP4.value = null;
}
