const MAX_DIMENSION = 640;  //max pixel dimension to fit in etch pad
let GRID = 16*16; //global grid size value


generatePixels();

document.getElementById("clear_grid").addEventListener("click", erase);

function drawing(e){
    document.getElementById(e.target.id).style.backgroundColor = "black";
}

function erase(){   //erase colored pixels and start prompt for new size
    const pixels = document.getElementsByClassName("pixel");
    for(let j = 0; j < GRID; j++){
        pixels[j].style.backgroundColor = "white";
    }
    newDimensions();
}

function newDimensions(){   //user prompt for new grid size. also initates delete of existing divs and generation of new divs
    pixelsPerSide = prompt("How many squares per side do you want?\n(The maximum is 100)", "16");
    pixelInputCheck();
    removePixels(document.getElementById("grid"));
    GRID = pixelsPerSide * pixelsPerSide;
    generatePixels();
    document.getElementById("grid").style.gridTemplateColumns = 'repeat(' + pixelsPerSide + ', ' + MAX_DIMENSION / pixelsPerSide + 'px)';
    document.getElementById("grid").style.gridTemplateRows = 'repeat(' + pixelsPerSide + ', ' + MAX_DIMENSION / pixelsPerSide + 'px)';
}

function pixelInputCheck(){ //verifies user input
    if(pixelsPerSide > 100 || pixelsPerSide < 1 || pixelsPerSide % 1 != 0 ){
        pixelsPerSide = prompt("ERROR, please enter a valid dimension value (integer between 1 - 100)")
        pixelInputCheck();
    }
}

function generatePixels(){  //generate new pixel divs under "grid"
    for(let i = 0; i < GRID; i++){
        const div = document.createElement("div");
        div.className = "pixel";
        div.id = "p" + i;
        document.getElementById("grid").appendChild(div);
        document.getElementById(div.id).addEventListener("mouseover", function(e){ drawing(e) });
    }
}

function removePixels(parent){  //removes all divs under parent
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}