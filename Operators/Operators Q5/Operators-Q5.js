function sumNum(){

    let firstNumber=document.querySelector(".inp1").value;
    let secondNumber=document.querySelector(".inp2").value;
    let result=parseInt(firstNumber)+parseInt(secondNumber);
    const list=document.querySelector(".para");
    list.append(result);
    console.log(result);
}

