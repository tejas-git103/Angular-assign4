(function() {
  'use strict';
  angular.module('MenuApp')
  .controller('CategoriesController',CategoriesController);

  CategoriesController.$inject = [ 'MenuDataService' ];
  function CategoriesController(MenuDataService) {

    var catctrl = this;

    catctrl.$init = function functionName() {
      catctrl.categories=["we","sd","sd","ty"];
      catctrl.asach="checkcomplete";

    }

  // var promise = MenuDataService.getAllCategories();
  // promise.then(function (response) {
  //   catctrl.categories=response.data;
  //   console.log(catctrl.categories);
  // }).catch(function (error) {
  //   console.log("something's wrong !!");
  // });
  }
}());
