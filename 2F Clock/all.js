const hour = document.querySelector('.hour-hand');
const mis = document.querySelector('.min-hand');
const sec = document.querySelector('.sec-hand');

function setClock(){
	let data = new Date();

	let getsec = data.getSeconds()*6;//一格6度
	let getmin = data.getMinutes()*6 +data.getSeconds()*6/60 ;
	let gethour = data.getHours()*30 + data.getMinutes()*30/60; //一格30度

	sec.style.transform = `rotate(${getsec}deg)`
	mis.style.transform = `rotate(${getmin}deg)`
	hour.style.transform = `rotate(${gethour}deg)`
	// console.log(hour)
}

setClock();

// setInterval(setClock, 1000);//設定間隔 持續執行


// setTimeout(timeout,1000); //設定延遲執行
// function timeout(){
// 	setClock();
// 	setTimeout(timeout,1000);
// }

window.requestAnimationFrame(animation); //處理畫面更新
function animation() {
	setClock();
	window.requestAnimationFrame(animation);
}

