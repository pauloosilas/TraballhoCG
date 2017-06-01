
var Cylon = require('cylon');


module.exports = function () {
    var controller = {};
    controller.stage0 = function (req, res) {
        res.render("stage0", { stage: 0 , msg: " Seu codigo será inicializado na Função Principal. Arraste uma instrução para seguir em frente!"});
    }
    controller.stage1 = function (req, res) {
        res.render('stage1', { stage: 1,msg: " IF( encontrar Plantas afrente) { faça um DESVIO! }" });
    };
    controller.stage2 = function (req, res) {
        res.render('stage2', { stage: 2, msg:" Evite Repetir codigo, faça um loop aqui!"  });
    };

     controller.stage3 = function (req, res) {
        res.render('stage3', { stage: 1, msg:" Você vai precisar de um METODO diferente para passar pelas plantas aqui!" });
    };

     controller.stage4 = function (req, res) {
        res.render('stage4', { stage: 4, msg: " Faça coisas mais complexas" });
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
                    my.sphero.color(0xADD8E6);
                });

               

                after(2000, function () {
                    my.sphero.roll(50, 0);

                });


                after(5000, function () {
                    my.sphero.roll(50, 60);
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
                    my.sphero.color(0x00FFFF);
                });



                after(2000, function () {
                    my.sphero.roll(50, 0);

                });


                after(5000, function () {
                    my.sphero.roll(50, 60);
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
               after(3000, function () {
                    my.sphero.color(0xFF0000);
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

      controller.stage3Cylon = function(req, res){
        
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
             
                after(3000, function () {
                    my.sphero.roll(60, 0);
                });


                after(4000, function () {
                    my.sphero.roll(60, 0);
                });

                  after(5000, function () {
                    my.sphero.color(0x00008B);
                });

                after(7000, function () {
                    my.sphero.roll(60, 180);
                });
               
            }
        }).start();

    }

  controller.stage4Cylon = function(req, res){
        
        Cylon.robot({
            connections: {
                sphero: { adaptor: 'sphero', port: '/dev/rfcomm0' }
            },

            devices: {
                sphero: { driver: 'sphero' }
            },

            work: function (my) {

               after(1000, function () {
                    my.sphero.color(0x7B68EE);
                });

                 after(2000, function () {
                    my.sphero.color(0x00FA9A);
                });


                 after(3000, function () {
                    my.sphero.color(0xDAA520);
                });

                 after(4000, function () {
                    my.sphero.color(0x48D1CC);
                });

                 after(5000, function () {
                    my.sphero.color(0xDAA520);
                });

                   after(6000, function () {
                    my.sphero.color(0x00FA9A);
                });

                 after(7000, function () {
                    my.sphero.color(0xADD8E6);
                });

                 after(8000, function () {
                    my.sphero.color(0xFF8C00);
                });
                  after(8000, function () {
                    my.sphero.color(0xADD8E6);
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