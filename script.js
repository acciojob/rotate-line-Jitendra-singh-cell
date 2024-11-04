//your JS code here. If required.
const line = document.getElementById('line');
let angle = 0; // Starting angle

function rotateLine() {
    angle += 2; // Increase the angle
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; // Rotate the line
    requestAnimationFrame(rotateLine); // Request the next frame for smooth animation
}

// Start the rotation
rotateLine();
