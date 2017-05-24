
var Cylon = require('cylon');


module.exports = function(){
    var controller = {};
    controller.stage1 = function(req, res){
    /*
        Cylon.robot({
        connections: {
            sphero: { adaptor: 'sphero', port: '/dev/rfcomm0' }
        },

        devices: {
            sphero: { driver: 'sphero' }
        },

        work: function(my) {
           my.sphero.startCalibration();
           my.sphero.finishCalibration();
          
           after(100,function(){
            my.sphero.color(0xFFFF00);
           });

          after(500,function(){
            my.sphero.color(0xFF5000);
           });

            after(1000,function(){
            my.sphero.color(0xFFFF00);
           });

           after(2000, function(){
             my.sphero.roll(40,0);
            
           });
          

           after(5000, function(){
             my.sphero.roll(40,60);
           });


           after(9000, function(){
             my.sphero.roll(40,120);
           });
            /*every((1).second(), function() {
            my.sphero.roll(60, Math.floor(Math.random() * 360));
            });
        }
        }).start();
*/
        res.render('stage1');
    };
    controller.stage2 = function(req,res){
        res.render('stage2');
    }

    return controller;
}