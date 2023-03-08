
    var world = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,2,2,3,1,1,2,2,2,2,1,1,1,1,1,2,1],
    [1,1,1,1,1,1,1,2,1,1,2,1,2,3,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,1],
    [1,2,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,1],
    [1,2,2,2,1,2,1,1,1,1,1,1,1,1,1,2,3,1],
    [1,1,1,3,1,2,1,1,2,2,2,2,2,2,1,2,2,1],
    [1,2,2,2,2,2,2,2,2,2,1,1,2,2,1,2,2,1],
    [1,2,2,2,2,1,1,2,2,2,2,2,2,3,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

    
];
var worldDict = {
    0: 'blank',
    1: 'wall' ,
    2: 'punto', 
    3: 'cereza',
}

function drawWorld(){
    output = "";

    for(var row = 0; row < world.length; row++){
        output += "<div class = 'row'>"
        for(var x = 0; x < world[row].length; x++){
            output += "<div class = '" + worldDict [world[row][x]] +"'></div>"
            // worldDict [world[row][x]]
        }
    }

    document.getElementById('world').innerHTML = output;
}
drawWorld()

var pacman = {
    x: 1,
    y: 1
}



function drawPacman(){
    document.getElementById('pacman').style.top = pacman.y * 40 + 'px'
    document.getElementById('pacman').style.left = pacman.x * 40 + 'px'

}
drawPacman()

document.onkeydown = function(e){
    if(e.keyCode == 37){
        if(world[pacman.y] [pacman.x - 1] != 1){
        pacman.x--;
        }
    }
    if(e.keyCode == 39){
        if(world[pacman.y] [pacman.x + 1] != 1){
        pacman.x++;
        }
    }
    if(e.keyCode == 40){
        if(world[pacman.y + 1] [pacman.x] != 1){
        pacman.y++;
        }
    }
    if(e.keyCode == 38){
        if(world[pacman.y - 1] [pacman.x] != 1){
        pacman.y--;
        }
    }

world[pacman.y] [pacman.x] =0;
drawPacman()
drawWorld()
}


fantasma.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      fantasma.style.left = timePassed / 5 + 'px';

      if (timePassed > 3000) clearInterval(timer);

    }, 20);
  }
