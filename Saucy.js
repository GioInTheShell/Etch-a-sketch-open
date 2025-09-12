let container1 = document.getElementById("container1"); /*puts the div called 'container' into a variable so it can be manuipulated */
let sketchb = document.getElementById("sketchboard");

function setupDraw(){
    let pixels = document.querySelectorAll('.pixel');
    console.log("Function called");
    for (let x = 0; x < pixels.length; x++){
        pixels[x].addEventListener("mouseover", function change(e){
            draw(e);
        })
         console.log("Event listenter should added" + x);
    }
}

function draw(e) {
   if (e.target.matches('.pixel')){
    e.target.style.backgroundColor = "black";
   }
}

function canvasMake(size){
    let res = size * size;
    let pDim = 400 / size;

    for (let i = 0; i < res; i++){
       let pixel = document.createElement('div');
       pixel.style.width = pDim + "px";
       pixel.style.height = pDim + "px";
       pixel.classList.add('pixel');
       pixel.innerHTML += i + 1;
       sketchb.appendChild(pixel);
    }
}
canvasMake(16);
setupDraw();