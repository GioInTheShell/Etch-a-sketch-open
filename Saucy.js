let container1 = document.getElementById("container1"); /*puts the div called 'container' into a variable so it can be manuipulated */
let sketchb = document.getElementById("sketchboard");
let userVal = 0;
let field1 = document.getElementById("canvasRes");
field1.addEventListener("keydown", function getData(event){
    console.log(event);
    confirmSize(event);
})

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
    e.target.style.borderColor = "black";
    e.target.style.borderWidth = "1px";
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
       sketchb.appendChild(pixel);
    }
}
function canvasDestroy(){
    let dPixels = document.getElementById('sketchb');
    console.log("Destroy Function called");
    while(sketchb.firstChild){
        sketchb.removeChild(sketchb.firstChild);
    }
}


function confirmSize(e){
    if(e.code =='Enter'){
        canvasDestroy();
        canvasMake(document.getElementById('canvasRes').value);
        console.log(document.getElementById('canvasRes').value);
        setupDraw();
        // alert(e.value)
    }
}


canvasMake(16);
setupDraw();