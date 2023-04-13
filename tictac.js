let box =document.getElementById("start-button")
let grid =document.getElementById("gr")
let rsrt =document.getElementById("rrst")
let isalive=false
let d1x=false
let d1o=false
let d1=document.getElementById('box1')
let d2=document.getElementById('box2')
let d3=document.getElementById('box3')
let d4=document.getElementById('box4')
let d5=document.getElementById('box5')
let d6=document.getElementById('box6')
let d7=document.getElementById('box7')
let d8=document.getElementById('box8')
let d9=document.getElementById('box9')
rsrt.disabled=true

function start(){
    box.style.backgroundColor="	maroon"
    box.innerHTML="P1"
    box.style.color="goldenrod"
    isalive=true
    d1x=true
    d1o=false
    box.disabled=true
    rsrt.disabled=false
}
function render(x){

    let dd=document.getElementById("box"+x)
     if(isalive===true){
     if(d1x===true && d1o===false){ 
     dd.innerHTML="X"
     d1o=true
     d1x=false
     dd.style.pointerEvents='none'
}
     else if(d1o===true && d1x===false){
     dd.innerHTML="O"
     d1o=false
     d1x=true
     dd.style.pointerEvents='none'
}}

if(d1x===false && d1o===true){
    box.innerHTML="P2"
    box.style.backgroundColor="goldenrod"
    box.style.color="maroon"
}
else if(d1x===true && d1o===false){
    box.style.backgroundColor="maroon"
    box.innerHTML="P1"
    box.style.color="goldenrod"
}
//x switchboard

    if(d1.innerHTML==="X" && d2.innerHTML==="X" && d3.innerHTML==="X"){
        box.innerHTML="Player 1 Wins!" 
        grid.style.pointerEvents='none'

     }
     else if(d1.innerHTML==="X" && d4.innerHTML==="X" && d7.innerHTML==="X"){
        box.innerHTML="Player 1 Wins!"
        grid.style.pointerEvents='none'           
     }
     else if(d7.innerHTML==="X" && d8.innerHTML==="X" && d9.innerHTML==="X"){
        box.innerHTML="Player 1 Wins!" 
        grid.style.pointerEvents='none'          
     }
     else if(d3.innerHTML==="X" && d6.innerHTML==="X" && d9.innerHTML==="X"){
        box.innerHTML="Player 1 Wins!" 
        grid.style.pointerEvents='none'          
     }
     else if(d1.innerHTML==="X" && d5.innerHTML==="X" && d9.innerHTML==="X"){
        box.innerHTML="Player 1 Wins!" 
        grid.style.pointerEvents='none'          
     }
     else if(d3.innerHTML==="X" && d5.innerHTML==="X" && d7.innerHTML==="X"){
        box.innerHTML="Player 1 Wins!" 
        grid.style.pointerEvents='none'          
     }
     else if(d2.innerHTML==="X" && d5.innerHTML==="X" && d8.innerHTML==="X"){
        box.innerHTML="Player 1 Wins!" 
        grid.style.pointerEvents='none'          
     }
     else if(d4.innerHTML==="X" && d5.innerHTML==="X" && d6.innerHTML==="X"){
        box.innerHTML="Player 1 Wins!" 
        grid.style.pointerEvents='none'          
     }

//o switchboard

     if(d1.innerHTML==="O" && d2.innerHTML==="O" && d3.innerHTML==="O"){
        box.innerHTML="Player 2 Wins!" 
        grid.style.pointerEvents='none'

     }
     else if(d1.innerHTML==="O" && d4.innerHTML==="O" && d7.innerHTML==="O"){
        box.innerHTML="Player 2 Wins!"
        grid.style.pointerEvents='none'           
     }
     else if(d7.innerHTML==="O" && d8.innerHTML==="O" && d9.innerHTML==="O"){
        box.innerHTML="Player 2 Wins!" 
        grid.style.pointerEvents='none'          
     }
     else if(d3.innerHTML==="O" && d6.innerHTML==="O" && d9.innerHTML==="O"){
        box.innerHTML="Player 2 Wins!" 
        grid.style.pointerEvents='none'          
     }
     else if(d1.innerHTML==="O" && d5.innerHTML==="O" && d9.innerHTML==="O"){
        box.innerHTML="Player 2 Wins!" 
        grid.style.pointerEvents='none'          
     }
     else if(d3.innerHTML==="O" && d5.innerHTML==="O" && d7.innerHTML==="O"){
        box.innerHTML="Player 2 Wins!" 
        grid.style.pointerEvents='none'          
     }
     else if(d2.innerHTML==="O" && d5.innerHTML==="O" && d8.innerHTML==="O"){
        box.innerHTML="Player 2 Wins!" 
        grid.style.pointerEvents='none'          
     }
     else if(d4.innerHTML==="O" && d5.innerHTML==="O" && d6.innerHTML==="O"){
        box.innerHTML="Player 2 Wins!" 
        grid.style.pointerEvents='none'          
     }
     else if (d1.innerHTML!=""&& d2.innerHTML!="" && d3.innerHTML!="" && d4.innerHTML!="" && d5.innerHTML!="" && d6.innerHTML!="" && d7.innerHTML!=""&& d8.innerHTML!=""&&d9.innerHTML!=""){
        box.innerHTML="Draw!"
        //Dom restart button
        //grid.innerHTML=`<button onclick="window.location.reload()" id="restart">&#8634</button>`

     }
     

}