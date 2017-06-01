angular.module('app', ['ngDraggable'])
  .controller('controller', function($scope, $http) {



    $scope.listItems = [{
      name: "Avanca()",
      title: "avanca",
      id : 1
    },
     {
      name: "IF(Plantas Afrente) Vá Para Direita",
      title: "direita",
      id : 2
    }, {
      name: "IF(Plantas Afrente) Vá Para Esquerda",
      title: "esquerda",
      id : 3
    },
     {
      name: "Retorne()",
      title: "voltar",
      id : 4
    }, {
      name: "Enguanto Não Chegar Faça Isso!",
      title: "loop1",
      id : 5
    },
     {
      name: "Enguanto Não Chegar Faça Isso!",
      title: "avance_ate",
      id : 6
    },
     {
      name: "Enguanto Não Chegar Faça Isso!",
      title: "voltar_ate",
      id : 7
    },
     {
      name: "Metodo()",
      title: "b_frente",
      id : 8
    },
     {
      name: "Metodo()",
      title: "b_voltar",
      id : 9
    },
    {
      name: "Metodo()",
      title: "pula",
      id : 10
    },
     {
      name: "Metodo()",
      title: "pula2",
      id : 11
    }];

    $scope.droppedObjects = [];
    $scope.input = {};
  
    $scope.onDragComplete = function(data, evt) {
      var index = $scope.droppedObjects.indexOf(data);
      if (index > -1) {
        $scope.droppedObjects.splice(index, 1);
       
      }
    }
    
    $scope.onDropComplete = function(data, evt) {
      
      var index = $scope.droppedObjects.indexOf(data);
      if (index == -1)
        $scope.droppedObjects.push(data);
      
      if(index > -1){
       
        var t = angular.copy(data);
         $scope.droppedObjects.push(t);
      }
      
    }
    
    $scope.onDropCompleteInput = function(data, evt) {
      $scope.input = data;
    }
    
    $scope.onDropCompleteRemove = function(data, evt) {
      var index = $scope.droppedObjects.indexOf(data);
      if (index != -1)
        $scope.droppedObjects.splice(index);
        
    }

    $scope.start_game = function(n){
      start($scope.droppedObjects,n);
    }

    $scope.cylon_start = function(uri){
      $http.get(uri);
    }

    var onDraggableEvent = function(evt, data) {
     // console.log("128", "onDraggableEvent", evt, data);
    }
    $scope.$on('draggable:start', onDraggableEvent);
    $scope.$on('draggable:move', onDraggableEvent);
    $scope.$on('draggable:end', onDraggableEvent);
  
  });