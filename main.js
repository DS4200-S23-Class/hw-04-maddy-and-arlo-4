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

function addUserPoint() {
    let vals = document.getElementsByTagName("input");

        let x = vals[0].value * 50;
        let y = 500 - (vals[1].value * 50);
        console.log(x, y);

       
        let frame = document.getElementById("frame");
        let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", 10);
        frame.appendChild(circle);

        // Add functionality? Maybe not necessary is points list includes this? -- HOVER FUNCTIONALITY STILL DOESNT WORK BUT CLICKED DOES
        //circle.addEventListener("mouseover", function(){pointHovered(point)});
        //circle.addEventListener("mouseout", function(){pointHovered(point)});

        let pointText = "(" + x + ", " + y + ")"
        circle.addEventListener("click", function(){pointClicked(circle, pointText)});
    
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

document.getElementById("subButton").addEventListener("click", addUserPoint)
