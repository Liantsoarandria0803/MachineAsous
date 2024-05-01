let rand1
let rand2
let rand3
document.getElementById("push").onclick=function(){
function scroll(){
rand1=Math.floor(Math.random()*4) +1;
rand2=Math.floor(Math.random()*4) +1;
rand3=Math.floor(Math.random()*4) +1;
document.getElementById("c1").value=rand1
document.getElementById("c2").value=rand2
document.getElementById("c3").value=rand3
}
t=setInterval(scroll,100)
document.getElementById("stop").onclick=function(){
    clearInterval(t);
    console.log(rand1)
    if (rand1==rand2 && rand2==rand3){
        document.getElementById("result").value="NAHAZO IANAO"
    }
    else{
        document.getElementById("result").value="TSY NAHAZO IANAO"   
    }
}
}