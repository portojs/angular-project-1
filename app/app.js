(function(){
  angular.module('listApp', ['list-products'])
    .controller('ListController', ['$http', function($http) {
      var listCtrl = this;
      //listCtrl.listItems = doom;
      listCtrl.itemTypes = [];
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
    });
  var doom = [
    {
      url: "img/numbers-01.jpg",
      author: "Provided by: &copy; Tom Sawyer, 1889.",
      description: "A unique piece of art made by one of the brightest minds in human history.",
      type: {"borrowed": true, "graphics": true},
      reviews: [
        {
          stars: 5,
          text: "Fabulous!",
          author: "dean@gmail.com"
        }
      ],
      price: 20.05,
      canPurchase: false,
      soldOut: false
    }
  ];
})();