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

			var carnivora1 = new Image();
			carnivora1.src="/imagens/carnivora.png";

			var carnivora2 = new Image();
			carnivora2.src="/imagens/carnivora.png";

			var carnivora3 = new Image();
			carnivora3.src="/imagens/carnivora.png";

			var carnivora4 = new Image();
			carnivora4.src="/imagens/carnivora.png";
			
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
			var speedY = 4; 
			var contapassosX = 0;
			
			var canvas = document.getElementById('game_area');
			canvas.width = canvasWidth;
			canvas.height = canvasHeight; 
			
			var ctx = canvas.getContext("2d");

			var zumb = new Spritesheet(ctx, zumbi, srcX, srcY);
			var girass = new Spritesheet(ctx, girassol,srcX,srcY);

			var sp1 = new Spritesheet(ctx, carnivora1, srcX, srcY);
			var sp2 = new Spritesheet(ctx, carnivora2, srcX, srcY);
			var sp3 = new Spritesheet(ctx, carnivora3, srcX, srcY);
			var sp4 = new Spritesheet(ctx, carnivora4, srcX, srcY);

			var interval = setInterval(draw, 40);

			function moveFrente(){
				zumbi.src ="/imagens/zumbi.png";
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

				zumb.desenhar(init[0], init[1], width, height, srcX, srcY);

				desenha_oponentes()

				if(contapassosX >= passos)
				  i++;
				  
			}

	function colisao(testeColisao, sprite){
		if(testeColisao){
			contapassosX = -40;
			if(sprite.img == girassol){
				console.log("girassol");
			}else{
			 	sprite.img.src= "/imagens/carnivora21.png";
			}
			 	clearInterval(interval);
				 interval = setInterval(update_colisao, 60);
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

			girass.desenhar(115,160,85,110, srcX, srcY);
			sp1.desenhar(330, 150 , 85, 110, srcX, srcY);
			sp2.desenhar(330, 200 , 85, 110, srcX, srcY);
			sp3.desenhar(330, 250 , 85, 110, srcX, srcY);
			sp4.desenhar(330, 300 , 85, 110, srcX, srcY);
			
			colisao(girass.colisao(init[0], init[1]), girass);
		
			colisao(sp1.colisao(init[0], init[1]), sp1);
			colisao(sp2.colisao(init[0], init[1]), sp2);
			colisao(sp3.colisao(init[0], init[1]), sp3);
			colisao(sp4.colisao(init[0], init[1]), sp4);

}

}


