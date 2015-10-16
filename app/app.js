(function(){
  var marksList = ["splendid", "terrific", "fantastic", "wonderful", "sucks", "mediocre", "worst"];

  angular.module('listApp', ['list-products'])
    .controller('ListController', ['$http', function($http) {
      var listCtrl = this;
      this.itemMarks = marksList;
      listCtrl.listItems = [];
      //listCtrl.itemTypes = [];
      $http.get('products.json').success(function(data) {
        listCtrl.listItems = data;
      });
      //$http.get('products-types.json').success(function(data) {
      //  list.itemTypes = data;
      //});
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
    })
    .directive('testForm', function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/test-form.html',
        controller: function() {
          this.showForm = false;
          this.item = {type:{}};
        },
        controllerAs: 'testFormCtrl',
        scope: {
          items: "=",
          types: "="
        }
      }
    });

})();