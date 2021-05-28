function sendMessage(){

    //access input HTML element--querySelector

    let inputElement =document.querySelector('#fullname');
    console.log(inputElement);

    //Get value of HTML input element
    let  inputValue= inputElement .value;
    console.log(inputValue);
    
    //Access H1 element
    let headingElement=document.querySelector('h1 span');
    console.log(headingElement);

    //Change content of <h1> element
    headingElement.innerHTML= inputValue;

    //Show alert
    alert('The message has been sent on the given number');
}