function add(){
    let a=parseInt(document.getElementById("val1").value);
    let b=parseInt(document.getElementById("val2").value);
    let c=a+b;
    document.getElementById("button1").innerHTML="SUM:"+c;
}

function sub(){
    let a=parseInt(document.getElementById("val1").value);
    let b=parseInt(document.getElementById("val2").value);
    let c=a-b;
    document.getElementById("button2").innerHTML="DIFFERENCE:"+c;
}