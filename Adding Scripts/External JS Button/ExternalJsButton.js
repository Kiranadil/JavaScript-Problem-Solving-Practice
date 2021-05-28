
//get all these elements

let redButton=document.querySelector(".red");
let blueButton=document.querySelector(".blue");
let greenButton=document.querySelector(".green");

//binding target functions to addEventListener---to attach an event handler to a particular element
redButton.addEventListener('click',clickredBtn);
blueButton.addEventListener('click',clickblueBtn);
greenButton.addEventListener('click',clickgreenBtn);

//declaring alerts to the functions of the button---to show alert
function clickredBtn(){
    alert('This is the alert for red button');
}

function clickblueBtn(){
    alert('This is the alert for blue button');
}
function clickgreenBtn(){
    alert('This is the alert for green button');
}
