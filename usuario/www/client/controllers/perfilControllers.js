angular.module('app.controllers', [])
 
.controller('misDatosController',['$scope','$ionicPopup',function function_name($scope,$ionicPopup,$ionicAlert) {
	
	$scope.perfil = {
		nombre:'Piñeyro, Miguel Ángel',
		telefono: 1558956295,
		mail:'miguelpiñeyro@gmail.com',
		club:'Sportivo Dock Sud',
		jugadorPref:'Javier Gandolfi',
		posicion:'Central'
	};


	$scope.openPopUp = function(obj,nombre){
		$ionicPopup.show({
		    template: '<input type="text" ng-model="perfil.'+obj+'">',
		    title: 'Modificación de ' + nombre,
		    subTitle: 'Ingrese el nuevo ' + nombre,
		    scope: $scope,
		    buttons: [
		      {
		        text: '<b>Guardar</b>',
		        type: 'button-positive',
		        onTap: function(e) {
		          /*if (!$scope.perfil.obj) {
		            //don't allow the user to close unless he enters wifi password
		            e.preventDefault();
		          } else { 	*/
		            $ionicPopup.alert({template:'Modificación exitosa!'});
		          	
		        }
		      },
		      { text: 'Cerrar' }
		    ]
		  })
	};

	/*$ionicModal.fromTemplateUrl('dialogtelefono.html',{
    	scope: $scope,
    	animation:'slide-in-up',
    }).then(function(modal){
    	$scope.dialogTel = modal;
    });

    $ionicModal.fromTemplateUrl('dialogtelefono.html',{
    	scope: $scope,
    	animation:'slide-in-up',
    }).then(function(modal){
    	$scope.dialogMail = modal;
    });

    $scope.openDialog = function (dialog) {
    	dialog.show()
    }

    $scope.closeDialog = function (dialog) {
    	dialog.hide();
    }*/

}])

.controller('misEquiposCtroller', ['$scope','$ionicModal', '$stateParams',function($scope,$ionicModal,$stateParams){
    
    $ionicModal.fromTemplateUrl('client/templates/dialogs/integrantes.html',{
    	scope: $scope,
    	animation:'slide-in-up',
    }).then(function(modal){
    	$scope.modalIntegrantes = modal;
    });

    $scope.openIntegrantes = function(){
    	$scope.modalIntegrantes.show();
    }

    $scope.closeIntegrantes = function(){
    	$scope.modalIntegrantes.hide();
    }

}])

.controller('misGruposController',['$scope',function function_name($scope) {
	
}])

