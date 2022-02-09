const GRID = 16*16; //global grid size value

for(var i = 0; i < GRID; i++){
    const div = document.createElement("div");
    const node = document.createTextNode(i);
    div.appendChild(node);
    div.className = "pixel";
    document.getElementById("grid").appendChild(div);
}

