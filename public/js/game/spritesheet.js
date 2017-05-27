function Spritesheet(context, img, srcX, srcY) { 
   this.context = context; 
   this.img = img; 
   this.srcX = srcX;
   this.srcY = srcY;
   this.x = 0;
   this.y = 0;
} 
Spritesheet.prototype = { 
  
   desenhar: function(x, y, xt , yt, srcX, srcY) {
      this.x = x;
      this.y = y;
      this.srcX = srcX;
      this.srcY = srcY; 

      context.drawImage(
            this.img,
            this.srcX,
            this.srcY,
            xt ,
            yt ,
            this.x, // Posição no canvas onde quero desenhar
            this.y,
            xt,
            yt 
         );

   },

   colisao: function(posX , posY){
       if(this.x > posX-50 && this.x < posX+50)
        if(this.y > posY-20 && this.y < posY+20){
          return true;
        }
        return false;
   }



}
