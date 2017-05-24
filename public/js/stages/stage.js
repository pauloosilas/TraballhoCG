
var canvas = document.getElementById('game_area');
var context = canvas.getContext('2d');

context.fillStyle = "#556654";

function stage1(qtd, x , y){
    let prox = x;
    for(let i = 0; i < qtd ; i++){
        context.fillRect(x*i ,y,85,75);
        context.restore();
    }
}

 
