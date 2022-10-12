function DrawPlayer(player) {
    ctx.beginPath();
    ctx.arc(player.x,player.y,player.size,0,2 * Math.PI);
    ctx.fillStyle = player.color;
    ctx.fill();
    ctx.stroke();
}

function PlayerMove(player,pressed) {
    if (pressed.key == "w") {
        player.y-=player.speed
    }
    if (pressed.key == "a") {
        player.x-=player.speed
    }
    if (pressed.key == "s") {
        player.y+=player.speed
    }
    if (pressed.key == "d") {
        player.x+=player.speed
    }
    if(pressed.key == " "){
        player.size = 50
        player.color = "brown"
    }
}