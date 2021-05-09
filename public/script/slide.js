// LEFT SLIDE





let imagesLeft = document.querySelectorAll(".operators-slide-left img");
let maxImgs = imagesLeft.length;
let indexLeft = 0;
let time = 3000;

function slideLeft(){
    setInterval(()=>{

        imagesLeft[indexLeft].classList.remove("selected")
        indexLeft++;

        if(indexLeft >= maxImgs){
            indexLeft = 0;
        }
        imagesLeft[indexLeft].classList.add("selected");

        
    }, time)   
}




// CENTER SLIDE





let imagesCenter = document.querySelectorAll(".operators-slide-center img");
let maxImgsCenter = imagesCenter.length;
let indexCenter = 0;

function slideCenter(){
    setInterval(()=>{
    
        imagesCenter[indexCenter].classList.remove("selected")
        indexCenter++;

        if(indexCenter >= maxImgsCenter){
            indexCenter = 0;
        }
        imagesCenter[indexCenter].classList.add("selected");

        
    }, time)   
}





// RIGHT SLIDE





let imagesRight = document.querySelectorAll(".operators-slide-right img");
let maxImgsRight = imagesRight.length;
let indexRight = 0;


function slideRight(){
    setInterval(()=>{
        
        imagesRight[indexRight].classList.remove("selected")
        indexRight++;

        if(indexRight >= maxImgsRight){
            indexRight = 0;
        }
        imagesRight[indexRight].classList.add("selected");

        
    }, time)
}

window.addEventListener("load", slideRight());
window.addEventListener("load", slideLeft());
window.addEventListener("load", slideCenter());
