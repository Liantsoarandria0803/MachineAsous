let rand1
let rand2
let rand3
let score=0;
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
        document.getElementById("result").value="Nahazo isa 5 ianao"
        score=score+5
        document.getElementById("score").value=score
    }
    else if (rand1==rand2 || rand2==rand3 || rand1 ==rand3){
        document.getElementById("result").value="Nahazo isa 2 ianao"   
        score=score+2
        document.getElementById("score").value=score
    }
    else{
        document.getElementById("score").value=score
        document.getElementById("result").value="Tsy nahazo isa ianao"
    }
}
}