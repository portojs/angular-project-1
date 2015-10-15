(function(){
  angular.module('listApp', ['list-products'])
    .controller('ListController', ['$http', function($http) {
      var list = this;
      list.listItems = [];
      list.itemTypes = [];
      $http.get('products.json').success(function(data) {
        list.listItems = data;
      });
      $http.get('products-types.json').success(function(data) {
        list.itemTypes = data;
      });
    }])
    .directive('mainHeader', function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/main-header.html',
        controller: function() {
          this.button = 1;
          this.selectButton = function(setButton) {
            this.button = setButton;
          };
          this.buttonSelected = function(checkButton) {
            return checkButton === this.button;
          };
        },
        controllerAs: 'navCtrl'
      };
    });
})();