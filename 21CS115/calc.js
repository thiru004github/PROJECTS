function add(){
    let a=parseInt(document.getElementById('v1').value);
    let b=parseInt(document.getElementById('v2').value);
    let c=a+b;
    document.getElementById("button1").innerHTML="SUM:"+c;
}

function sub(){
    let a=parseInt(document.getElementById('v1').value);
    let b=parseInt(document.getElementById('v2').value);
    let c=a-b;
    document.getElementById("button2").innerHTML="DIFFERENCE:"+c;
}

function mul(){
    let a=parseInt(document.getElementById('v1').value);
    let b=parseInt(document.getElementById('v2').value);
    let c=a*b;
    document.getElementById("button3").innerHTML="PRODUCT:"+c;
}

function divi(){
    let a=parseInt(document.getElementById('v1').value);
    let b=parseInt(document.getElementById('v2').value);
    let c=a/b;
    document.getElementById("button4").innerHTML="QUOTIENT:"+c;
}

function mod(){
    let a=parseInt(document.getElementById('v1').value);
    let b=parseInt(document.getElementById('v2').value);
    let c=a%b;
    document.getElementById("button5").innerHTML="REMAINDER:"+c;
}