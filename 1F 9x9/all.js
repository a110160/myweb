
const con = document.querySelector(".content ");


for (var i = 2; i < 10; i++) {
	let div = document.createElement("div");
	let str = '';
	div.setAttribute('class','main');
	str = `<div class="main-number">${i}</div>`;
	for (var j = 1; j < 10; j++) {
		str +=`<div class="main-number-child">${i} x ${j}= ${i*j}</div>`
	}
	div.innerHTML = str;
	con.appendChild(div);

}


// div.innerHTML=`<div class='main-number'>2</div>`;


// div_main.appendChild()

// console.log(con);
// console.log(div);