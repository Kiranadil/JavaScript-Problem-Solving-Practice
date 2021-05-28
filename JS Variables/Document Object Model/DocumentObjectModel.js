function sendMessage(){
    let inputElement =document.querySelector('#fullname');
    console.log(inputElement);
    let  inputValue= fullname .value;
    console.log(inputValue);

    let headingElement=document.querySelector('h1 > #name');
    console.log(headingElement);
    headingElement.innerHTML= inputValue;

    //Show alert
    alert('The message has been sent on the given number');
}