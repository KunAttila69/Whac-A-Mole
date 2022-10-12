var holes = [[175,125,100],[175,425,100],[175,725,100],[485,125,100],[485,425,100],[485,725,100],[800,125,100],[800,425,100],[800,725,100]]

function DrawHole(x,y,size){
    ctx.beginPath();
    ctx.arc(x,y,size,0,2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
}

for (let hole = 0; hole < holes.length; hole++) {
    DrawHole(holes[hole][0],holes[hole][1],holes[hole][2])
}