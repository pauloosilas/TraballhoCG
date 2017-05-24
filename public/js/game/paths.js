function draw_caminho_frente(qtd,x,y, path){

    while(qtd >= 1){
       var chao = new Image();
       chao.src = path;

       desenha_img(chao, x * qtd , y, 100, 150);
       qtd--;
    }

}