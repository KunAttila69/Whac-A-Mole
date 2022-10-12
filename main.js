var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth/2;
canvas.height = window.innerHeight/1.1;
var ctx = canvas.getContext("2d")
var holes = [[175,125,100],[175,425,100],[175,725,100],[485,125,100],[485,425,100],[485,725,100],[800,125,100],[800,425,100],[800,725,100]]
var player = {
    x:10,
    y:10,
    speed:10,
    size:10,
    color:"grey"
}


document.addEventListener("keydown", (event) => {
    PlayerMove(player,event)
})

function Update() {
    canvas.width = window.innerWidth/2;
    canvas.height = window.innerHeight/1.1;
    for (let hole = 0; hole < holes.length; hole++) {
        DrawHole(holes[hole][0],holes[hole][1],holes[hole][2])
    }
    DrawPlayer(player)
}
function Animate(){
    Update()
    requestAnimationFrame(Animate);
}
Animate();