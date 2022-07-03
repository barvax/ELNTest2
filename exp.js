let step = 0;

const div = document.getElementById('wizard-div');
const form1 = document.getElementById('form-exp1');
const form2 = document.getElementById('form-exp2');
const form3 = document.getElementById('form-exp3');
const form4 = document.getElementById('form-exp4');
const forms = [form1,form2,form3,form4]
const stepsTitle = ['step1Li','step2Li','step3Li','step4Li'];
const step1 = document.getElementById(stepsTitle[0]);
const step2 = document.getElementById(stepsTitle[1]);
const step3 = document.getElementById(stepsTitle[2]);
const step4 = document.getElementById(stepsTitle[3]);
const steps = [step1,step2,step3,step4];
const nextStepBtn  = document.getElementById('nextStepBtn');
const prevStepBtn  = document.getElementById('prevStepBtn');

steps[0].style.color='red';

function NextStep(){
    nextStepBtn.innerHTML = 'Next Step'
    prevStepBtn.style.visibility='visible';
 
  
   
  for (let i = 0; i < forms.length; i++) {
      forms[i].style.display='none';
      steps[i].style.color = 'rgb(62, 59, 73)' ;
     
  }
    if(step==0){
        div.style.height = '500px';
        forms[0].style.display='grid'
     steps[0].style.color='red';
     prevStepBtn.style.visibility='hidden';
    }else if(step==1){
        div.style.height = '1000px';
        forms[1].style.display='block'
        steps[1].style.color='red';
      
    }else if(step==2){
        div.style.height = '800px';
        forms[2].style.display='block'
        steps[2].style.color='red';
       
      
    }else if(step==3){
        div.style.height = '800px';
        forms[3].style.display='block'
        steps[3].style.color='red';
        nextStepBtn.innerHTML = 'Done';
      
    }
  
   
}

function NextStepUp(){
    step++;
    if(step<steps.length){
       
        NextStep();
    }else if(step==4){
        step=0;
        document.getElementById('wizard-div').style.display = 'none';
    }
   
}
function NextStepDown(){
    if(step>0){
        step--;
        NextStep();
    }
   
}

function createTableElement(id){
   var root =  document.getElementById(id);
   var table= document.createElement('table');

}
