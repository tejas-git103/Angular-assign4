(function() {
  'use strict';
  angular.module('MenuApp')
  .component('categoriescompo',{
    templateUrl:"templates/categories-list.template.html",
    bindings: {
      list : '<'
    },
    controller:'CategoriesController as catctrl'
  });
}());
