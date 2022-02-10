const GRID = 16*16; //global grid size value

for(var i = 0; i < GRID; i++){
    const div = document.createElement("div");
    /*
    const node = document.createTextNode(i);
    div.appendChild(node);
    */
    div.className = "pixel";
    div.id = "p" + i;
    document.getElementById("grid").appendChild(div);
    document.getElementById(div.id).addEventListener("mouseover", function(e){ drawing(e) });
}

function drawing(e){
    document.getElementById(e.target.id).style.backgroundColor = "black";
}