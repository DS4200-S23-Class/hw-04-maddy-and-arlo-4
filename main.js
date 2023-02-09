// JS code for webpage interaction

// Toggle the hovered class of a point
function pointHovered(point) {
    point.classList.toggle("hovered");
}

// Toggle the clicked class of a point and the visibility of its corresponding text
function pointClicked(point, pointText) {
    point.classList.toggle("clicked"); 
    pointText.classList.toggle("invisible"); //text not working
}

// loop idea-> for i in range #of points, pointid="point"+str(i) pointtext="pointText"+str(i) then the following
let points = document.getElementsByClassName("point");

    // Check is each input is check
    for (let i = 1; i <= points.length; i++){

            let pointID = "point" + i
            let pointTextID = "pointText" + i

            // Adding hover functionality - works
            let point = document.getElementById(pointID)
            let pointText = document.getElementById(pointTextID)
            point.addEventListener("mouseover", function(){pointHovered(point)});
            point.addEventListener("mouseout", function(){pointHovered(point)});

            // Adding click functionality - border works, text does not
            point.addEventListener("click", function(){pointClicked(point, pointTextID)});
    }
