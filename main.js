// JS code for webpage interaction

// Toggle the hovered class of a point
function pointHovered() {
    let point = document.getElementById("point");
    point.classList.toggle("hovered");
}

// Toggle the clicked class of a point and the visibility of its corresponding text
function pointClicked() {
    let point = document.getElementById("point");
    point.classList.toggle("clicked"); 
    let text = document.getElementById("pointText");
    text.classList.toggle("invisible");
}

// Adding hover functionality
document.getElementById("point")
            .addEventListener("mouseover", pointHovered);
document.getElementById("point")
            .addEventListener("mouseout", pointHovered);

// Adding click functionality
document.getElementById("point")
            .addEventListener("click", pointClicked);
