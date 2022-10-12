function DrawHole(x,y,size){
    ctx.beginPath();
    ctx.arc(x,y,size,0,2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
}