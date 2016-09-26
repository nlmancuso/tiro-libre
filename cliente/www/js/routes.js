angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('tirolibre', {
    url: '/tirolibre',
    templateUrl: 'templates/default.html',
    abstract:true
  })

  .state('tirolibre.noticias', {
    url: '/noticias',
    views:{
        'contenido':{
            templateUrl:'templates/noticias.html'
        }
    }
  })
  
  .state('tirolibre.eventos', {
    url: '/eventos',
    views:{
        'contenido':{
            templateUrl:'templates/eventos.html'
        }
    }
  })
  
  .state('tirolibre.canchas', {
    url: '/canchas',
    views:{
        'contenido':{
            templateUrl:'templates/canchas.html'
        }
    }
  })
  
  .state('tirolibre.torneos', {
    url: '/torneos',
    views:{
        'contenido':{
            templateUrl:'templates/torneos.html'
        }
    }
  })
  
  .state('tirolibre.misreservas', {
    url: '/misreservas',
    views:{
        'contenido':{
            templateUrl:'templates/misreservas.html'
        }
    }
  })
  
  .state('tirolibre.perfil', {
    url: '/perfil',
    views:{
        'contenido':{
            templateUrl:'templates/perfil.html'
        }
    }
  })
  
  .state('tirolibre.misgrupos', {
    url: '/misgrupos',
    views:{
        'contenido':{
            templateUrl:'templates/misgrupos.html'
        }
    }
  })
  
  .state('tirolibre.misequipos', {
    url: '/misequipos',
    views:{
        'contenido':{
            templateUrl:'templates/misequipos.html'
        }
    }
  })

  .state('tirolibre.contacto', {
    url: '/contacto',
    views:{
        'contenido':{
            templateUrl:'templates/contacto.html'
        }
    }
  })
  
  $urlRouterProvider.otherwise('/tirolibre/canchas');

});