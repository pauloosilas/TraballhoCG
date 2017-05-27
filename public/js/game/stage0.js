 function engine(posicoes, init){
	 
  var canvasWidth = 650; 
			var canvasHeight = 450;
			
			var spriteWidth = 700; 
			var spriteHeight = 450; 
			
			var rows = 1; 
			var cols = 25; 
			
			var trackRight = 0; 
			var trackLeft = 1; 
			
			var passos = 140;

    		var bull = new Image(); 
			bull.src = "/imagens/bull.png";
			
			var girassol = new Image();
			girassol.src="/imagens/girassol.png";

			var width = bull.width/cols; 
			var height = bull.height/rows; 
			
			var curFrame = 0; 
			var frameCount = 16; 
			
			var x=init[0];
			var y=init[1]; 
			
			var srcX; 
			var srcY; 
			
			var left = false; 
			var right = true;
			
			var speedX = 3;
			var speedY = 4; 
			var contapassosX = 0;
			
			var canvas = document.getElementById('game_area');
			canvas.width = canvasWidth;
			canvas.height = canvasHeight; 
			
			var ctx = canvas.getContext("2d");

			var zumb = new Spritesheet(ctx, bull, srcX, srcY);
			var girass = new Spritesheet(ctx, girassol,srcX,srcY);


			var interval = setInterval(draw, 40);

			function moveFrente(){
			//	zumbi.src ="/imagens/bull.png";
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
			//	zumbi.src ="/imagens/bull.png";
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
		//	contapassosX = 0;
			if(sprite.img == girassol){
				console.log("girassol");
			
			}else{
			 //	sprite.img.src= "/imagens/carnivora21.png";
			}
			 	clearInterval(interval);
				 interval = setInterval(update_colisao, 10);
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
	
			girass.desenhar(150,160,85,110, 0, 0);;
			
			colisao(girass.colisao(init[0], init[1]), girass);
			
			

}

}


