function Addition(){
    var num1=Number(document.getElementById("value1").value);
    var num2=Number(document.getElementById("value2").value);
    var res=num1+num2;
    document.getElementById("result").value=res;
    // alert(res);

}

function Subtraction(){
    var num1=Number(document.getElementById("value1").value);
    var num2=Number(document.getElementById("value2").value);
    var res=num1-num2;
    document.getElementById("result").value=res;
}

function  Multiply(){
    var num1=Number(document.getElementById("value1").value);
    var num2=Number(document.getElementById("value2").value);
    var res=num1*num2;
    document.getElementById("result").value=res;

}

function Divide(){
    var num1=Number(document.getElementById("value1").value);
    var num2=Number(document.getElementById("value2").value);
    var res=num1/num2;
    document.getElementById("result").value=res;

}

function Percentage(){
    var num1=Number(document.getElementById("value1").value);
    var num2=Number(document.getElementById("value2").value);
    var res=num1/100*num2;
    document.getElementById("result").value=res;

}

export {Addition,Subtraction,Multiply,Divide,Percentage}