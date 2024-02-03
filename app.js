var displayInput =document.getElementById("displayInput");

function getval(val){
    console.log(val)
    displayInput.value += val;
}
// this function put on each button         onclick="getval(1)" 
function calculate(){    
    displayInput.value  =eval(displayInput.value);
}
// the calculate put in tne button of =

function clearAll(){
    displayInput.value ="";
}
// the clearAll put in tne button of C