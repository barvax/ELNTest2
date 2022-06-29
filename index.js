
const results = ['sample ']
let expTitle = "";

function ShowrEtable(){
var loading =  document.getElementById('loading');
loading.style.display = "block";
const myTimeout = setTimeout(ShowElements, 1500);


}

z=0;

function GenerateResults(){
for (let i = 0; i < 36; i++) {

  let x = document.getElementById('table'+i);
  if(i%6==0){
	  z++;
	   x.innerHTML = results[0]+(z);
	   
  }else{
	  var rand = (Math.random() * 10);
	  x.innerHTML = rand.toFixed(2);
	 
	  
  }
 
 
}
	
	z=0;
}



function ShowElements() {
	let reTable = document.getElementById('re-table');
reTable.style.display = 'block';
var loading =  document.getElementById('loading');
loading.style.display = "none";
GenerateResults();
ShowCircleBar();
var title =  document.getElementById('exp-title');
title.innerHTML = expTitle;
}


function ShowCircleBar(){
	let circle1 = document.getElementById('circle1');
circle1.style.display = "block";
	let circle2 = document.getElementById('circle2');
circle2.style.display = "block";
	let circle3 = document.getElementById('circle3');
circle3.style.display = "block";
 document.getElementById('conclusions').style.display = "block"; 
	
}

const collection = document.getElementsByClassName("exp");
for (let i = 0; i < collection.length; i++) {

 collection[i].addEventListener('click',setColor)
 
}
function setColor(e){
	
	//e.target.style.backgroundColor="red";
	
	
	console.log(e.target.textContent)
	expTitle = e.target.textContent;
	
}


