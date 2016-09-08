angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('tirolibre', {
    url: '/tirolibre',
    templateUrl: 'client/templates/default.html',
    abstract:true
  })

  .state('tirolibre.noticias', {
    url: '/noticias',
    views:{
        'contenido':{
            templateUrl:'client/templates/noticias.html'
        }
    }
  })
  
  .state('tirolibre.eventos', {
    url: '/eventos',
    views:{
        'contenido':{
            templateUrl:'client/templates/eventos.html'
        }
    }
  })
  
  .state('tirolibre.canchas', {
    url: '/canchas',
    views:{
        'contenido':{
            templateUrl:'client/templates/canchas.html'            
        }
    }
  })
  
  .state('tirolibre.torneos', {
    url: '/torneos',
    views:{
        'contenido':{
            templateUrl:'client/templates/torneos.html'
        }
    }
  })
  
  .state('tirolibre.misreservas', {
    url: '/misreservas',
      controller:'canchasCtrl',
    views:{
        'contenido':{               templateUrl:'client/templates/reservas.html'
        }
    }
  })
  
  .state('tirolibre.perfil', {
    url: '/perfil',
    views:{
        'contenido':{
            templateUrl:'client/templates/perfil.html'
        }
    }
  })
  
  .state('tirolibre.misgrupos', {
    url: '/misgrupos',
    views:{
        'contenido':{
            templateUrl:'client/templates/misgrupos.html'
        }
    }
  })
  
  .state('tirolibre.misequipos', {
    url: '/misequipos',
    views:{
        'contenido':{
            templateUrl:'client/templates/misequipos.html'
        }
    }
  })

  .state('tirolibre.contacto', {
    url: '/contacto',
    views:{
        'contenido':{
            templateUrl:'client/templates/contacto.html'
        }
    }
  })
  
  $urlRouterProvider.otherwise('/tirolibre/canchas');

});