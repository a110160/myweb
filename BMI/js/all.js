


const resultBtn = document.querySelector(".resultBtn");
const out = document.querySelector("#out");
const out_t = document.querySelector("#out_text");
let data = JSON.parse(localStorage.getItem("BMIData")) || [];
const content = document.querySelector(".his>ul");
console.log(content);
console.log(content)
console.log(data)
show();
resultBtn.addEventListener('click', BMI,false);

function BMI(e){
	let h = document.querySelector("#height").value;
	let w = document.querySelector("#weight").value;

	let bmi = Math.floor(w/((h/100)*(h/100))*100)/100;
	console.log("bmi : ",bmi);
	let userData={};
	let str ='';
	let str_t ='';
	let str_text ='';
	let b_col='';
	let t_col='';
	let img_col='';

	if(!h || !w){
		alert("請輸入身高體重")
	}
	else{
		if(bmi<=18.5){
			b_col='border_col_toolight';
			t_col='text_col_toolight';
			img_col='img_color_toolight';
			str_t="過輕";
			color="li_broder_toolight";
		}
		else if(bmi<24){
			b_col='border_col_normal';
			t_col='text_col_normal';
			img_col='img_color_normal';
			str_t="正常";
			color="li_broder_normal";
		}
		else if(bmi<27){
			b_col='border_col_overweight';
			t_col='text_col_overweight';
			img_col='img_color_overweight';
			str_t="過重";
			color="li_broder_overweight";
		}
		else if(bmi<30){
			b_col='border_col_overweight_2';
			t_col='text_col_overweight_2';
			img_col='img_color_overweight_2';
			str_t="輕度肥胖";
			color="li_broder_overweight_2";
		}
		else if(bmi<35){
			b_col='border_col_overweight_2';
			t_col='text_col_overweight_2';
			img_col='img_color_overweight_2';
			str_t="中度肥胖";
			color="li_broder_overweight_2";
		}
		else{
			b_col='border_col_overweight_3';
			t_col='text_col_overweight_3';
			img_col='img_color_overweight_3';
			str_t="重度肥胖";
			color="li_broder_overweight_3";
		}

		str=`<div class="result_out ${b_col} ${t_col}">
				<p>${bmi}</p>
				<small>BMI</small>
				<img id='reset' class="${img_col}" src="img/icons_loop.png">
			</div>`;
		str_text=`<p class="out_text ${t_col} ">${str_t}</p> `
		
		out.innerHTML=str;
		out_t.innerHTML=str_text;
		userData = {h,w,bmi,str_t,color};
		data.push(userData);
		console.log(data);
		localStorage.setItem("BMIData",JSON.stringify(data));
		// out_t.classList.add("out_text");
		// out_t.classList.add(t_col);

	 	//隱藏 
		resultBtn.classList.add("btn_none");
		let reset = document.querySelector('#reset');
		reset.addEventListener('click',refresh, 
			false)

		show();


	}


}

function refresh(){
	resultBtn.classList.remove("btn_none");
	out.innerHTML="";
	out_t.innerHTML="";
	console.log(out_t);
	// out_t.classList.remove(t_col);
	document.querySelector("#height").value='';
	document.querySelector("#weight").value='';


}

function show(e){
	let dataLen = data.length;
	console.log(dataLen);
	let str ='';

	for (var i = 0; i < dataLen; i++) {
		str += `
		<li>
			<ul class="flex flex-direction ${data[i].color}">
				<li>
					<p>${data[i].str_t}</p>
				</li>
				<li>
					<small>bmi</small>
					<p>${data[i].bmi}</p>
				</li>
				<li>
					<small>weight</small>
					<p>${data[i].w}</p>
				</li>
				<li>
					<small>height</small>
					<p>${data[i].h}</p>
				</li>
			</ul>
		</li>`
	}
	content.innerHTML=str;
}

