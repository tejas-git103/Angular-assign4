(function() {
  'use strict';
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = [ '$stateProvider', '$urlRouterProvider' ];
  function RoutesConfig($stateProvider, $urlRouterProvider ) {
    $urlRouterProvider
    .otherwise('/home');
    $stateProvider
    .state('home',{
      url:'/home',
      templateUrl: 'templates/home.template.html'
      // template:'<h1>hiiiii</h1>'
    })
    .state('categories',{
      url:'/categories',
      templateUrl:'templates/categories.template.html'
    });
  }
}());
