(function(){
  angular.module('listApp', [])
    .controller('ListController', function() {
      this.listItems = [
        {
          url: "img/numbers-01.jpg",
          author: "Provided by: &copy; Tom Sawyer, 1889.",
          price: 20.05,
          canPurchase: false,
          soldOut: false
        },
        {
          url: "img/numbers-02.jpg",
          author: "Provided by: &copy; Jimi Hendrix, 1969.",
          price: 71.20,
          canPurchase: true,
          soldOut: false
        },
        {
          url: "img/numbers-06.jpg",
          author: "Provided by: &copy; Freddy Mercury, 1989.",
          price: 35.00,
          canPurchase: true,
          soldOut: false
        },
        {
          url: "img/numbers-09.jpg",
          author: "Provided by: &copy; Kurt Cobain, 1991.",
          price: 99.99,
          canPurchase: true,
          soldOut: false
        },
        {
          url: "img/numbers-12.jpg",
          author: "Provided by: &copy; Jim Morrison, 1970.",
          price: 114.21,
          canPurchase: true,
          soldOut: false
        }
      ];
    })
    .directive('mainHeader', function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/main-header.html'
      };
    });
})();