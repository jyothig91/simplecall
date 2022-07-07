function calc(callback){
  var n1=parseInt(document.getElementById("num1").value);
  var n2=parseInt(document.getElementById("num2").value);
  var result=callback(n1,n2);
document.getElementById("result").value=result;
}

function addnum(n1,n2){
return n1 +n2;
}

function subnum(n1,n2){
return n1-n2;
}

function mulnum(n1,n2){
return n1*n2;
}

function divnum(n1,n2){
return n1/n2;
}