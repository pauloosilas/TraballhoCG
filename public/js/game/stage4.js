 function engine(posicoes, init){
	 
  			
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

		

			var oponente7 = new Image();
			oponente7.src="/imagens/carnivora.png";

			var oponente8 = new Image();
			oponente8.src="/imagens/carnivora.png";

			var oponente9 = new Image();
			oponente9.src="/imagens/carnivora.png";

			var oponente10 = new Image();
			oponente10.src="/imagens/carnivora.png";

			var oponente11 = new Image();
			oponente11.src="/imagens/carnivora.png";

			var oponente12 = new Image();
			oponente12.src="/imagens/carnivora.png";
		

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
			
			var speedX = 5;
			var speedY = 5; 
			var contapassosX = 0;
			
			var canvas = document.getElementById('game_area');
			
			var ctx = canvas.getContext("2d");

			var zumb = new Spritesheet(ctx, zumbi, srcX, srcY);
			var girass = new Spritesheet(ctx, girassol,srcX,srcY);

			var sp1 = new Spritesheet(ctx, oponente7, srcX, srcY);
			var sp2 = new Spritesheet(ctx, oponente8, srcX, srcY);
			var sp3 = new Spritesheet(ctx, oponente9, srcX, srcY);
			var sp4 = new Spritesheet(ctx, oponente10, srcX, srcY);
			var sp5 = new Spritesheet(ctx, oponente11, srcX, srcY);
			var sp11 = new Spritesheet(ctx, oponente12, srcX, srcY);

			var sp6 = new Spritesheet(ctx, oponente1, srcX, srcY);
			var sp7 = new Spritesheet(ctx, oponente1, srcX, srcY);
			var sp8 = new Spritesheet(ctx, oponente1, srcX, srcY);
			var sp9 = new Spritesheet(ctx, oponente1, srcX, srcY);
			var sp10 = new Spritesheet(ctx, oponente1, srcX, srcY);

			var sp12 = new Spritesheet(ctx, oponente2, srcX, srcY);
			var sp13 = new Spritesheet(ctx, oponente3, srcX, srcY);
		
			var interval = setInterval(draw, 30);

			function moveFrente(){
				zumbi.src ="/imagens/zumbi.png";
				if(contapassosX < passos){
					if(init[0] > 0){
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

				function moveTras(){
				zumbi.src ="/imagens/zumbi2.png";
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
					case 1: moveFrente() ;
					break;
					case 2: moveDireita();
					break;
					case 3: moveEsquerda() ;
					break;
					case 4: moveTras();
					break;

				}

				
				
			}
			var i = 0;

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
				console.log("girassol");
				init[0]=1000;
				clearInterval(interval);
		}else{
			if(sprite.img == oponente1){
					sprite.img.src= "/imagens/explosao.png";
					zumbi.src = "/imagens/incenerado.png";
					zumb = new Spritesheet(ctx, zumbi, srcX, srcY);
					zumb.desenhar(sprite.x + 50,sprite.y, width, height, srcX, srcY);
			}else{
				 if(sprite.img == oponente2){
				
					sprite.img.src= "/imagens/explosao.png";
					zumbi.src = "/imagens/incenerado.png";
					zumb = new Spritesheet(ctx, zumbi, srcX, srcY);
					zumb.desenhar(sprite.x - 60,sprite.y, width, height, srcX, srcY);
				}
				else  if(sprite.img == oponente3){
				
					sprite.img.src= "/imagens/explosao.png";
					zumbi.src = "/imagens/incenerado.png";
					zumb = new Spritesheet(ctx, zumbi, srcX, srcY);
					zumb.desenhar(sprite.x + 60,sprite.y, width, height, srcX, srcY);
				}
			
			else{
			 	sprite.img.src= "/imagens/carnivora21.png";
			}
		
				 
		}
	}
	
			 	 clearInterval(interval);
				 interval = setInterval(update_colisao, 50);
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


			sp12.desenhar(240, 140 , 85, 110, srcX, srcY);
			sp13.desenhar(240, 260 , 85, 110, srcX, srcY);
			
		    sp1.desenhar(420, 210 , 85, 110, srcX, srcY);
			sp2.desenhar(320, 210, 85, 110, srcX, srcY);
			sp3.desenhar(220, 210 , 85, 110, srcX, srcY);
			sp4.desenhar(120, 210 , 85, 110, srcX, srcY);
			sp5.desenhar(20, 210 , 85, 110, srcX, srcY);
		
			
			sp6.desenhar(520, 70 , 85, 110, srcX, srcY);
			sp7.desenhar(420, 70 , 85, 110, srcX, srcY);
			sp8.desenhar(320, 70 , 85, 110, srcX, srcY);
			sp9.desenhar(220, 70 , 85, 110, srcX, srcY);
			sp10.desenhar(120, 70 , 85, 110, srcX, srcY);
			girass.desenhar(120,260,85,110, srcX, srcY);

			colisao(girass.colisao(init[0], init[1]), girass);
		
			colisao(sp1.colisao(init[0], init[1]), sp1);
			colisao(sp2.colisao(init[0], init[1]), sp2);
			colisao(sp3.colisao(init[0], init[1]), sp3);
			colisao(sp4.colisao(init[0], init[1]), sp4);
			colisao(sp5.colisao(init[0], init[1]), sp5);

			colisao(sp12.colisao(init[0], init[1]), sp12);
			colisao(sp13.colisao(init[0], init[1]), sp13);

			colisao(sp6.colisao(init[0], init[1]), sp6);
			colisao(sp7.colisao(init[0], init[1]), sp7);
			colisao(sp8.colisao(init[0], init[1]), sp8);
			colisao(sp9.colisao(init[0], init[1]), sp9);
			colisao(sp10.colisao(init[0], init[1]), sp10);


}

}


