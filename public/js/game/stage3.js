 function engine(posicoes, init){
	 
  var canvasWidth = 650; 
			var canvasHeight = 450;
			
			var spriteWidth = 700; 
			var spriteHeight = 450; 
			
			var rows = 1; 
			var cols = 16; 
			
			var trackRight = 0; 
			var trackLeft = 1; 
			
			var passos = 23;

    		var zumbi = new Image(); 
			zumbi.src = "/imagens/zumbi.png";
			
			var girassol = new Image();
			girassol.src="/imagens/girassol.png";

			var oponente1 = new Image();
			oponente1.src="/imagens/cherrybomb.png";

			var oponente2 = new Image();
			oponente2.src="/imagens/cherrybomb.png";

			var oponente3 = new Image();
			oponente3.src="/imagens/cherrybomb.png";

			var oponente4 = new Image();
			oponente4.src="/imagens/cherrybomb.png";

			var oponente5 = new Image();
			oponente5.src="/imagens/cherrybomb.png";

			var oponente6 = new Image();
			oponente6.src="/imagens/cherrybomb.png";
			
			var width = zumbi.width/cols; 
			var height = zumbi.height/rows; 
			
			var curFrame = 0; 
			var frameCount = 16; 
			
			var x=init[0];
			var y=init[1]; 
			
			var srcX; 
			var srcY; 
			
			var left = false; 
			var right = true;
			
			var speedX = 4;
			var speedY = 3; 
			var contapassosX = 0;
			
			var canvas = document.getElementById('game_area');
			canvas.width = canvasWidth;
			canvas.height = canvasHeight; 
			
			var ctx = canvas.getContext("2d");

			var zumb = new Spritesheet(ctx, zumbi, srcX, srcY);
			var girass = new Spritesheet(ctx, girassol,srcX,srcY);

			var sp1 = new Spritesheet(ctx, oponente1, srcX, srcY);
			var sp2 = new Spritesheet(ctx, oponente2, srcX, srcY);
			var sp3 = new Spritesheet(ctx, oponente3, srcX, srcY);
			var sp4 = new Spritesheet(ctx, oponente4, srcX, srcY);
			var sp5 = new Spritesheet(ctx, oponente5, srcX, srcY);
			var alterado = false;

			var interval = setInterval(draw, 50);

			function moveFrente(path){
				zumbi.src = path;
				if(contapassosX < passos){
					if(init[0] > 25){
						x-=speedX; 
						init[0] -= speedX;
					}
						contapassosX++;
				}else{
					//clearInterval(interval);
					contapassosX = 0;
				}
				init[0] = x;
				
				
			}
		
			function moveDireita(){

				 if(contapassosX < passos){
					 if(init[1] > 5){
						y -= speedY;
						init[1] -= speedY;
					 }
					 contapassosX++;
				 }else{
			    //	 clearInterval(interval);
				    	contapassosX = 0;
				 }
				 init[1] = y;
				
			}

				function moveTras(path){
				zumbi.src =path;
				if(contapassosX < passos){
					if(init[0] < 520){
						x+=speedX; 
						init[0] += speedX;
					}
					contapassosX++;
				}else{
					//clearInterval(interval);
					contapassosX = 0;
				}
				init[0] = x;
						
			}
		
			function moveEsquerda(){

				 if(contapassosX < passos){
					if(init[1] < 280){
						y += speedY;
						init[1] += speedY;
					}
					 contapassosX++;
				 }else{
			    //	 clearInterval(interval);
				    	contapassosX = 0;
				 }
				 init[1] = y;
				
			}


			function updateFrame(n){
				curFrame = ++curFrame % frameCount; 	
				ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
				
				srcX = curFrame * width; 
				srcY = trackRight * height; 

				switch(n){
					case 1: moveFrente("/imagens/zumbi.png") ;
							alterado = false;
					break;
					case 2: moveDireita();
							alterado = false;
					break;
					case 3: moveEsquerda() ;
							alterado = false;
					break;
					case 4: moveTras();
							alterado = false;
					break;
					case 8: moveFrente("/imagens/balao.png");
							alterado = true;
					break;

					case 9: moveTras("/imagens/balao.png");
							alterado = true;
					break;
					
					case 10: moveFrente("/imagens/pulapula1.png");
							alterado = true;
					break;

				}

				
				
			}
			var i = 0;

	function t(){
    	 modal.style.display = "block";
	}


		function draw(){
			if(i < posicoes.length)
				updateFrame(posicoes[i].id);
			else{
				clearInterval(interval);
				console.log(init[0]);
				console.log(init[1]);
			}

			
				desenha_oponentes()
				zumb.desenhar(init[0], init[1], width, height, srcX, srcY);

				if(contapassosX >= passos)
				  i++;
				  
			}

	function colisao(testeColisao, sprite){
		if(testeColisao){
			contapassosX = 0;
			if(sprite.img == girassol){
				clearInterval(interval);
				t();
				
			}else if(!alterado){
				sprite.img.src= "/imagens/explosao.png";
			    clearInterval(interval);
				
				zumbi.src = "/imagens/incenerado.png";
				zumb = new Spritesheet(ctx, zumbi, srcX, srcY);
				zumb.desenhar(sprite.x + 50,sprite.y, width, height, srcX, srcY);
				
				 interval = setInterval(update_colisao, 60); 
				
			}
			 	
		}
	}


		function update_colisao(){
			
			if(i < posicoes.length)
				updateFrame(posicoes[i].id);
			else{
				clearInterval(interval);
				console.log(init[0]);
				console.log(init[1]);
			}
			desenha_oponentes();
			
				if(contapassosX >= passos)
				  i++;
				  
			}

function desenha_oponentes(){
			
			girass.desenhar(50,140,85,110, srcX, srcY);
		
			sp1.desenhar(260, 0 , 85, 110, srcX, srcY);
			sp2.desenhar(260, 70 , 85, 110, srcX, srcY);
			sp3.desenhar(260, 140 , 85, 110, srcX, srcY);
			sp4.desenhar(260, 210 , 85, 110, srcX, srcY);
			sp5.desenhar(260, 280 , 85, 110, srcX, srcY);
			
			
			colisao(girass.colisao(init[0], init[1]), girass);
		
			colisao(sp1.colisao(init[0], init[1]), sp1);
			colisao(sp2.colisao(init[0], init[1]), sp2);
			colisao(sp3.colisao(init[0], init[1]), sp3);
			colisao(sp4.colisao(init[0], init[1]), sp4);
			colisao(sp5.colisao(init[0], init[1]), sp5);

}

}


