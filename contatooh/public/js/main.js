angular.module('contatooh', ['ngRoute'])
  .config(function($routeProvider) {

    $routeProvider.otherwise({redirectTo: '/contatos'});

    $routeProvider.when('/contatos', {
      templateUrl: 'partials/contatos.html',
      controller: 'ContatosController'
    });

    $routeProvider.when('/contato/:contatoId', {
      templateUrl: 'partials/contato.html',
      controller: 'ContatoController'
    });
  });
