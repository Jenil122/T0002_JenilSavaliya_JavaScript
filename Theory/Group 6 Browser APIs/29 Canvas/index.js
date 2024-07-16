const myCanvas = document.getElementById("myCanvas");
const canvasObject = myCanvas.getContext("2d");

// Line
canvasObject.beginPath();
canvasObject.moveTo(20, 0);
canvasObject.lineTo(20, 100);
canvasObject.lineTo(11, 50);
canvasObject.lineTo(100, 50);
canvasObject.lineTo(50, 90);
canvasObject.lineTo(0, 0);
canvasObject.fillStyle = "red";
canvasObject.fill();
canvasObject.stroke();

// circle
canvasObject.arc(100, 100, 15, 0 * Math.PI, 1.5 * Math.PI, false);
canvasObject.fillStyle = "orange";
canvasObject.fill();
canvasObject.stroke();

// Rect
canvasObject.fillStyle = "blue";
canvasObject.fillRect(120, 10, 50, 50);
canvasObject.clearRect(130, 15, 20, 10);

// canvasObject.strokeStyle = "green"
canvasObject.strokeRect(75, 70, 45, 50);
canvasObject.stroke();

// quadraticCurveTo
canvasObject.beginPath();
canvasObject.moveTo(200, 100);
canvasObject.strokeStyle = "green";
canvasObject.quadraticCurveTo(150, 150, 50, 30);
canvasObject.quadraticCurveTo(350, 150, 50, 30);
canvasObject.stroke();
