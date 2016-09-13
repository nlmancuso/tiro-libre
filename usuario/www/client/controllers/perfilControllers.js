angular.module('app.controllers', [])
 
.controller('misDatosController',['$scope',function function_name($scope) {
	
}])

.controller('misEquiposCtroller', ['$scope','$ionicModal', '$stateParams',function($scope,$ionicModal,$stateParams){
    
    $ionicModal.fromTemplateUrl('client/templates/dialogs/integrantes.html',{
    	scope: $scope,
    	animation:'slide-in-up',
    }).then(function(modal){
    	$scope.modalIntegrantes = modal;
    });

    $scope.openIntegrantes = function(){
    	console.log($scope.modalIntegrantes)
    	$scope.modalIntegrantes.show();
    }

    $scope.closeIntegrantes = function(){
    	$scope.modalIntegrantes.hide();
    }

}])

.controller('misGruposController',['$scope',function function_name($scope) {
	
}])

/*.controller('',['$scope',function function_name($scope) {
	Template para agregar controllers
}])*/