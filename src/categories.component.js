(function() {
  'use strict';
  angular.module('data')
  .component('categoriescompo',{
    templateUrl:"templates/categories-list.template.html",
    bindings: {
      list : '<'
    }
    // controller:'CategoriesController as catctrl'
  });
}());
