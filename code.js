const gridContainerBox = document.getElementsByClassName("gridcontainer");  //remember this is an array-like thing
let gridSquare = document.createElement("div");
gridSquare.setAttribute("id", "gridbox");



function createChildElements(maxBoxes) {    // a function like this can be presented to user to select a number of sqaures
    for(i = 0; i < maxBoxes; i++ ) {
        let gridSquare = document.createElement("div");
        gridContainerBox[0].appendChild(gridSquare);
        gridSquare.setAttribute("id", "gridbox");
        gridSquare.addEventListener("mouseover", hover);
    }
    
}


function hover() {
    this.style.backgroundColor = "green";
}

createChildElements(1024);   //128, 256, 512, 1024




