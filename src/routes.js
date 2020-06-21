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
      templateUrl:'templates/categories.template.html',
      controller:'CategoriesController as catctrl',
      resolve: {
        list: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
        // list: function () {
        //     return ['ds','rt','ghd','sddsf'];
        // }
      }
    })
    .state('item', {
      url: '/item/{shortName}',
      templateUrl: 'templates/items.template.html',
      controller: 'menuItemController as menu',
      resolve: {
          items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
              return MenuDataService.getItemsForCategory($stateParams.shortName);
          }]
          // items: function () {
          //   return [80,81,82,83];
          // }
      }
  });

  }
}());
