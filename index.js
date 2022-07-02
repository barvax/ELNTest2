
const results = ['sample ']
let expTitle = "";
var switchTable = false;


function ShowrEtable(){
var loading =  document.getElementById('loading');
loading.style.display = "block";
const myTimeout = setTimeout(ShowElements,1300);


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

function ShowLoading(){
	var loading =  document.getElementById('loading');
	loading.style.display = "block";
	const showLoadingDiv = setTimeout(KillLoading,900);
	
}
function KillLoading(){
	var loading =  document.getElementById('loading');
loading.style.display = "none";
window.location.href = "exp.html";
}

function ShowElements() {
	let reTable = document.getElementById('re-table');
reTable.style.display = 'block';
var loading =  document.getElementById('loading');
loading.style.display = "none";
GenerateResults();
ShowCircleBar();
var title =  document.getElementById('exp-title');
title.innerHTML = expTitle+" Results";
}


function ShowCircleBar(){
	let circle1 = document.getElementById('circle1');
circle1.style.display = "block";
	let circle2 = document.getElementById('circle2');
circle2.style.display = "block";
	let circle3 = document.getElementById('circle3');
circle3.style.display = "block";
 document.getElementById('conclusions').style.display = "block"; 
 document.getElementById('cloneBtn').style.display = "inline"; 
  document.getElementById('dropdown').style.display = "inline-block"; 
    document.getElementById('switchBtn').style.display = "inline"; 
		 document.getElementById('mass-table').style.display = "none"; 
	switchTable = false;
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

function CloseHamDiv(state){
	document.getElementById('ham-div').style.display = state;
	document.getElementById('modal').style.display = state;
}
var switchTable = false;
function SwithConcToMassTable(){
	if(switchTable){
		 document.getElementById('conclusions').style.display = "block"; 
	 document.getElementById('mass-table').style.display = "none"; 
	 switchTable = false;
	}else{
		
			 document.getElementById('conclusions').style.display = "none"; 
	 document.getElementById('mass-table').style.display = "block"; 
	 switchTable = true;
	}
	
}

function OpenCreateNewExpDiv(state){
	var x = document.getElementById('newexp-div')
	x.style.display = state;
	
}

function NextPage()
{
	
	window.location.href = "exp.html";
}
function Home()
{
	
	window.location.href = "index.html";
}