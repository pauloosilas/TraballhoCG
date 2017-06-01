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
		
			var alterado = false;
			var interval = setInterval(draw, 40);

			function moveFrente(path){
				zumbi.src = path;
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
		
			function moveDireita(path){
			zumbi.src = path;
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
				zumbi.src = path;
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
		
			function moveEsquerda(path){
				zumbi.src = path;
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

function loop_voltar(){
				
				let l = [{
      				    	name: "Avanca",
     					    title: "avanca",
     					    id : 4
   						 },
     					{
							name: "Esquerda",
							title: "esquerda",
							id : 4
						},
						
						{
      				    	name: "Avanca",
     					    title: "avanca",
     					    id : 4
   						 },
     					{
							name: "Esquerda",
							title: "esquerda",
							id : 4
						},
						{
      				    	name: "Avanca",
     					    title: "avanca",
     					    id : 4
   						 },
     					{
							name: "Esquerda",
							title: "esquerda",
							id : 4
						},
						{
      				    	name: "Avanca",
     					    title: "avanca",
     					    id : 4
   						 },
     					{
							name: "Esquerda",
							title: "esquerda",
							id : 4
						},
						{
      				    	name: "Avanca",
     					    title: "avanca",
     					    id : 4
   						 }];

				var novo = posicoes.slice(i+1,posicoes.length);
				for(let pi = 0; pi < novo.length; pi++){
					l.push(novo[pi]);
				}		
			    
				posicoes = l;
				console.log(posicoes);
			}

			function loop_avanca(){
				
				let l = [{
      				    	name: "Avanca",
     					    title: "avanca",
     					    id : 1
   						 },
							{
      				    	name: "Avanca",
     					    title: "avanca",
     					    id : 1
   						 },
							{
      				    	name: "Avanca",
     					    title: "avanca",
     					    id : 1
   						 },
							{
      				    	name: "Avanca",
     					    title: "avanca",
     					    id : 1
   						 }
     					];

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
					case 1: moveFrente("/imagens/zumbi.png") ;
							alterado = false;
					break;	
					case 2: moveDireita("/imagens/zumbi.png");
							alterado = false;
					break;
					case 3: moveEsquerda("/imagens/zumbi.png") ;
							alterado = false;
					break;
					case 4: moveTras("/imagens/zumbi2.png");
							alterado = false;
					break;
					case 5: loop_while();
							alterado = false;
					break;
					case 6: loop_avanca();
							alterado = false;
					break;
					case 7: loop_voltar();
							alterado = false;
					break;

					case 8: moveFrente("/imagens/balao.png");
							alterado = true;
					break;

					case 9: moveTras("/imagens/balao2.png");
							alterado = true;
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
	function t(){
     modal.style.display = "block";
}

	function colisao(testeColisao, sprite){
		if(testeColisao){
			contapassosX = -10;
		
		if(sprite.img == girassol){
				console.log("girassol");
				t();
				clearInterval(interval);
		}else{
			if(!alterado)
			if(sprite.img == oponente1){
					sprite.img.src= "/imagens/explosao.png";
					zumbi.src = "/imagens/incenerado.png";
					zumb = new Spritesheet(ctx, zumbi, srcX, srcY);
					zumb.desenhar(sprite.x + 50,sprite.y, width, height, srcX, srcY);
					 clearInterval(interval);
				 interval = setInterval(update_colisao, 50);
			}else{
				if(!alterado)
				 if(sprite.img == oponente2){
				
					sprite.img.src= "/imagens/explosao.png";
					zumbi.src = "/imagens/incenerado.png";
					zumb = new Spritesheet(ctx, zumbi, srcX, srcY);
					zumb.desenhar(sprite.x - 60,sprite.y, width, height, srcX, srcY);
					 clearInterval(interval);
				 interval = setInterval(update_colisao, 50);
			}
				else  if(sprite.img == oponente3){
				
					sprite.img.src= "/imagens/explosao.png";
					zumbi.src = "/imagens/incenerado.png";
					zumb = new Spritesheet(ctx, zumbi, srcX, srcY);
					zumb.desenhar(sprite.x + 60,sprite.y, width, height, srcX, srcY);
					 clearInterval(interval);
				 interval = setInterval(update_colisao, 50); 
			}
			
			else{
			 	sprite.img.src= "/imagens/carnivora21.png";
				  clearInterval(interval);
				 interval = setInterval(update_colisao, 50);
			}
		
				 
		}
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


