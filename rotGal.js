const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const main = document.querySelector('.main');
let x = 0;
let time;

prev.addEventListener("click",()=>{
    clearTimeout(time);
   anticlock();
})
next.addEventListener("click",()=>{
    clearTimeout(time);
    clock();
    
})
function clock(){
    x=x-45;
    main.style.transform =`perspective(1000px) rotateY(${x}deg)`
 time =  setTimeout(
    clock,2500
    
)
}
function anticlock(){
     x=x+45;
    main.style.transform =`perspective(1000px) rotateY(${x}deg)`
    time =  setTimeout(
    clock,2500)
}
clock();

