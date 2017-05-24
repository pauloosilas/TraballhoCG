
module.exports = function(app){
    var stages = app.controllers.stagesController;
   
    app.get('/', stages.stage1);
    app.get('/stage1', stages.stage1);
    app.get('/stage2', stages.stage2)
    
}