
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];


function gettime(){
	console.log("in")
	let item = document.querySelectorAll(".area");
	// let city='';
	let year='';
	let time='';
	for (let i = 0; i < item.length; i++) {
		let thistimeZone = item[i].getAttribute("data-time");
		let cityTime =new Date().toLocaleString('zh',{timeZone:thistimeZone,hour12:false})

		d=cityTime.split(' ')[0].split('/');
		time = (cityTime.split(' ')[1]).slice(0, 5);

		item[i].querySelector("h4").innerText = `${d[2]} ${months[d[1]-1]} ${d[0]}`;
		item[i].querySelector(".time").innerText=`${time}`;
		

	}
	
}
gettime();

setInterval(gettime, 1000);