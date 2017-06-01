 function engine(posicoes, init){
	 
  var canvasWidth = 650; 
			var canvasHeight = 450;
			
			var spriteWidth = 700; 
			var spriteHeight = 450; 
			
			var rows = 1; 
			var cols = 16; 
			
			var trackRight = 0; 
			var trackLeft = 1; 
			
			var passos = 15;

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

			var carnivora5 = new Image();
			carnivora5.src="/imagens/carnivora.png";

			var carnivora6 = new Image();
			carnivora6.src="/imagens/carnivora.png";

			var carnivora7 = new Image();
			carnivora7.src="/imagens/carnivora.png";

			var carnivora8 = new Image();
			carnivora8.src="/imagens/carnivora.png";
			

			var carnivora9 = new Image();
			carnivora9.src="/imagens/carnivora.png";

			var carnivora10 = new Image();
			carnivora10.src="/imagens/carnivora.png";

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
			var speedY = 5; 
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

			var sp5 = new Spritesheet(ctx, carnivora5, srcX, srcY);
			var sp6 = new Spritesheet(ctx, carnivora6, srcX, srcY);
			var sp7 = new Spritesheet(ctx, carnivora7, srcX, srcY);
			var sp8 = new Spritesheet(ctx, carnivora8, srcX, srcY);


			var sp9 = new Spritesheet(ctx, carnivora9, srcX, srcY);
			var sp10 = new Spritesheet(ctx, carnivora10, srcX, srcY);

			var interval = setInterval(draw, 40);
//-----------------------------------
			var i = 0;
//-----------------------------------
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
			function loop_while(){
				
				let l = [{
      				    	name: "Avanca",
     					    title: "avanca",
     					    id : 1
   						 },
     					{
							name: "Esquerda",
							title: "esquerda",
							id : 2
						},
						
						{
      				    	name: "Avanca",
     					    title: "avanca",
     					    id : 1
   						 },
     					{
							name: "Esquerda",
							title: "esquerda",
							id : 2
						},
						{
      				    	name: "Avanca",
     					    title: "avanca",
     					    id : 1
   						 },
     					{
							name: "Esquerda",
							title: "esquerda",
							id : 2
						},
						{
      				    	name: "Avanca",
     					    title: "avanca",
     					    id : 1
   						 },
     					{
							name: "Esquerda",
							title: "esquerda",
							id : 2
						},
						{
      				    	name: "Avanca",
     					    title: "avanca",
     					    id : 1
   						 }];

				var novo = posicoes.slice(i+1,posicoes.length);
				for(let pi = 0; pi < novo.length; pi++){
					l.push(novo[pi]);
				}		
			    
				posicoes = l;
				console.log(posicoes);
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
					case 5: loop_while();
					break;

				}
				
			}
	
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
			contapassosX = -40;
			if(sprite.img == girassol){
				console.log("girassol");
				clearInterval(interval);
				t();
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

			girass.desenhar(200,0,85,110, srcX, srcY);
			
			sp1.desenhar(175, 80 , 85, 110, srcX, srcY);
			sp2.desenhar(260, 140 , 85, 110, srcX, srcY);
			sp3.desenhar(340, 220 , 85, 110, srcX, srcY);
			sp4.desenhar(400, 300 , 85, 110, srcX, srcY);
			
			sp5.desenhar(325, 300 , 85, 110, srcX, srcY);
			sp6.desenhar(260, 220 , 85, 110, srcX, srcY);
			sp7.desenhar(550, 140 , 85, 110, srcX, srcY);
			sp8.desenhar(480, 80 , 85, 110, srcX, srcY);

			sp5.desenhar(340, 0 , 85, 110, srcX, srcY);
			sp6.desenhar(410, 80 , 85, 110, srcX, srcY);
			sp7.desenhar(480, 140 , 85, 110, srcX, srcY);
			sp8.desenhar(550, 220 , 85, 110, srcX, srcY);

			sp9.desenhar(100, 80 , 85, 110, srcX, srcY);
			sp10.desenhar(40, 80 , 85, 110, srcX, srcY);
			
			
			colisao(girass.colisao(init[0], init[1]), girass);
		
			colisao(sp1.colisao(init[0], init[1]), sp1);
			colisao(sp2.colisao(init[0], init[1]), sp2);
			colisao(sp3.colisao(init[0], init[1]), sp3);
			colisao(sp4.colisao(init[0], init[1]), sp4);

			colisao(sp5.colisao(init[0], init[1]), sp5);
			colisao(sp6.colisao(init[0], init[1]), sp6);
			colisao(sp7.colisao(init[0], init[1]), sp7);
			colisao(sp8.colisao(init[0], init[1]), sp8);

			colisao(sp9.colisao(init[0], init[1]), sp9);
			colisao(sp10.colisao(init[0], init[1]), sp10);
			
}

}


