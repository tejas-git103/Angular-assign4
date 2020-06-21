(function() {
  'use strict';
  angular.module('data')
  .component('itemscompo',{
    templateUrl:"templates/items-list.template.html",
    bindings: {
      items : '<'
    }
    // controller:'CategoriesController as catctrl'
  });
}());
