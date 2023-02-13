// JS code for webpage interaction

// Toggle the hovered class of a point
function pointHovered(point) {
    point.classList.toggle("hovered");
}

// Toggle the clicked class of a point and the visibility of its corresponding text
function pointClicked(point, pointText) {
    point.classList.toggle("clicked"); 
    let newText = "Last Point Clicked: " + pointText;
    document.getElementById("selected_point").innerHTML = newText;
}

// Add point from user input
function addUserPoint() {
    let x = document.getElementById("selectX").value;
    let y = document.getElementById("selectY").value;

    // Only adding the point if the user selects both x and y coordinates
    if(x != "X-Coordinate" && y != "Y-Coordinate"){
        let xPos = Number(x) * 50
        let yPos = 500 - (Number(y) * 50)

        // Create point in frame
        let frame = document.getElementById("frame");
        let point = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        point.setAttribute("cx", xPos);
        point.setAttribute("cy", yPos);
        point.setAttribute("r", 10);
        frame.appendChild(point);
    
        // Add point functionality
        point.addEventListener("mouseover", function(){pointHovered(point)});
        point.addEventListener("mouseout", function(){pointHovered(point)});
        let pointText = "(" + x + ", " + y + ")"
        point.addEventListener("click", function(){pointClicked(point, pointText)}); 
    }
}

// Add event listeners to each point
let points = document.getElementsByClassName("point");
    for (let i = 1; i <= points.length; i++){

            let pointID = "point" + i
            let pointTextID = "pointText" + i

            // Adding hover functionality
            let point = document.getElementById(pointID);
            let pointText = document.getElementById(pointTextID).textContent
            point.addEventListener("mouseover", function(){pointHovered(point)});
            point.addEventListener("mouseout", function(){pointHovered(point)});

            // Adding click functionality
            point.addEventListener("click", function(){pointClicked(point, pointText)});
    }

// Add button functionality
document.getElementById("subButton").addEventListener("click", addUserPoint);