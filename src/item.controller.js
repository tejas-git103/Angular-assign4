(function () {
  'use restrict';

  angular.module('data')
  .controller("menuItemController", MenuItemController);

  MenuItemController.$inject = ['items'];
  function MenuItemController(items) {
    var menu = this;
    menu.itemlist = items.menu_items;
    //menu.itemlist = items;
    //console.log(items.menu_items);
  };
})();
