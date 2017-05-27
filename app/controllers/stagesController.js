
var Cylon = require('cylon');


module.exports = function () {
    var controller = {};
    controller.stage0 = function (req, res) {
        res.render("stage0", { stage: 0 });
    }
    controller.stage1 = function (req, res) {
        res.render('stage1', { stage: 1 });
    };
    controller.stage2 = function (req, res) {
        res.render('stage2', { stage: 2 });
    };

     controller.stage3 = function (req, res) {
        res.render('stage3', { stage: 1 });
    };

    controller.stage0Cylon = function(req, res){
     
           
             Cylon.robot({
            connections: {
                sphero: { adaptor: 'sphero', port: '/dev/rfcomm0' }
            },

            devices: {
                sphero: { driver: 'sphero' }
            },

            work: function (my) {

                after(1000, function () {
                    my.sphero.startCalibration();
                });
                after(2000, function () {
                    my.sphero.finishCalibration();
                });

                after(100, function () {
                    my.sphero.color(0xFFFF00);
                });

                after(500, function () {
                    my.sphero.color(0xFF5000);
                });


                after(2000, function () {
                    my.sphero.roll(50, 0);

                });


                after(5000, function () {
                    my.sphero.roll(50, 60);
                });

                after(8000, function () {
                    my.sphero.color(0xFFFF00);
                });

            }
        }).start();

    };

    controller.stage1Cylon = function(req, res){

        Cylon.robot({
            connections: {
                sphero: { adaptor: 'sphero', port: '/dev/rfcomm0' }
            },

            devices: {
                sphero: { driver: 'sphero' }
            },

            work: function (my) {

                after(1000, function () {
                    my.sphero.startCalibration();
                });
                after(2000, function () {
                    my.sphero.finishCalibration();
                });

                after(100, function () {
                    my.sphero.color(0xFFFF00);
                });

                after(500, function () {
                    my.sphero.color(0xFF5000);
                });


                after(2000, function () {
                    my.sphero.roll(50, 0);

                });


                after(5000, function () {
                    my.sphero.roll(50, 60);
                });

                after(8000, function () {
                    my.sphero.color(0xFFFF00);
                });

            }
        }).start();

    }

    controller.stage2Cylon = function(req, res){
        
        Cylon.robot({
            connections: {
                sphero: { adaptor: 'sphero', port: '/dev/rfcomm0' }
            },

            devices: {
                sphero: { driver: 'sphero' }
            },

            work: function (my) {

                after(1000, function () {
                    my.sphero.startCalibration();
                });
                after(2000, function () {
                    my.sphero.finishCalibration();
                });
                after(4000, function () {
                    my.sphero.roll(0, 0);
                });
                after(5000, function () {
                    my.sphero.roll(0, 180);
                });
                 after(6000, function () {
                   my.sphero.roll(0, 0);
                });

                 after(7000, function () {
                    my.sphero.roll(0, 180);
                });

                 after(8000, function () {
                    my.sphero.roll(0, 0);
                });

                 after(9000, function () {
                    my.sphero.roll(0, 180);
                });

                 after(10000, function () {
                    my.sphero.roll(0, 0);
                });


                 after(11000, function () {
                   my.sphero.roll(0, 180);
                });

            }
        }).start();

    }

    controller.sucess = function(req, res){
          after(8000, function () {
                    my.sphero.color(0x000080);
          });
    }
    return controller;
}