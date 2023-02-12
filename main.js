// JS code for webpage interaction

// Toggle the hovered class of a point
function pointHovered(point) {
    point.classList.toggle("hovered");
}

// Toggle the clicked class of a point and the visibility of its corresponding text
function pointClicked(point, pointText) {
    point.classList.toggle("clicked"); 
    let newText = "Last Point Clicked: " + pointText;
    document.getElementById("selected_point").innerHTML = newText 
}

// Add point from user input
function addUserPoint() {
    let vals = document.getElementsByTagName("input");

        let x = vals[0].value * 50;
        let y = 500 - (vals[1].value * 50);

        // Create point in frame
        let frame = document.getElementById("frame");
        let point = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        point.setAttribute("cx", x);
        point.setAttribute("cy", y);
        point.setAttribute("r", 10);
        frame.appendChild(point);
 
        // Add point functionality
        point.addEventListener("mouseover", function(){pointHovered(point)});
        point.addEventListener("mouseout", function(){pointHovered(point)});
        let pointText = "(" + vals[0].value + ", " + vals[1].value + ")"
        point.addEventListener("click", function(){pointClicked(point, pointText)}); 
}

// Add event listeners to each point
let points = document.getElementsByClassName("point");
    for (let i = 1; i <= points.length; i++){

            let pointID = "point" + i
            let pointTextID = "pointText" + i

            // Adding hover functionality
            let point = document.getElementById(pointID)
            let pointText = document.getElementById(pointTextID).textContent
            point.addEventListener("mouseover", function(){pointHovered(point)});
            point.addEventListener("mouseout", function(){pointHovered(point)});

            // Adding click functionality
            point.addEventListener("click", function(){pointClicked(point, pointText)});
    }

// Add
document.getElementById("subButton").addEventListener("click", addUserPoint)
