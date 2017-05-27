
module.exports = function(app){
    var stages = app.controllers.stagesController;
   
    app.get('/', stages.stage0);
    app.get('/stage0', stages.stage0);
    app.get('/stage1', stages.stage1);
    app.get('/stage2', stages.stage2)
    app.get('/stage3', stages.stage3)

    app.get('/cylon0',stages.stage0Cylon);
    app.get('/cylon1',stages.stage1Cylon);
    app.get('/cylon2',stages.stage2Cylon);
    

    app.get('/sucess', stages.sucess);
    
}