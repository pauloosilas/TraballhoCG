
function start(vector_fun, n){
 t = vector_fun.length;
 
 var init = [500,150];

 switch(n){
     case 0: init = [500,150];
     break;
     case 2: init = [520, 290];
     break;     
     case 4: init = [520,15];
     break;
 }

engine(vector_fun ,init);

    
}