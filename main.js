var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth/2;
canvas.height = window.innerHeight/1.1;
var ctx = canvas.getContext("2d")

function Animate(){
    canvas.width = window.innerWidth/2;
    canvas.height = window.innerHeight/1.1;
    requestAnimationFrame(Animate);
}
Animate();