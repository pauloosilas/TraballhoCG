
function desenha_img(img , x, y, xt , yt){
    
      img.onload = function() {
       
         // Desenhando no Canvas
         var context =
             document.getElementById('game_area').getContext('2d');
         context.drawImage(
            img,
            0,
            0,
            img.width ,
            img.height ,
            x, // Posição no canvas onde quero desenhar
            y,
            xt,
            yt 
         );
   
      }
    
}