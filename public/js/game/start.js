
function start(vector_fun, n){
 t = vector_fun.length;
 
 var init = [500,150];

 switch(n){
     case 2: init = [520, 290];
     break;     
 }

engine(vector_fun ,init);

    
}