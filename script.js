var circles=document.querySelectorAll('.circle');
let count=0;


setTimeout(()=>{
for(let i=circles.length-1;i> -1;i--){

    setTimeout(()=>{
    circles[i].style.opacity=1;
    if(i == 0){
        document.querySelector(".wholescreen").style.opacity=1;
        document.querySelector(".wholescreen").classList.add("growPic")
    }
   
},count*1000)
count++
}
},4000)
