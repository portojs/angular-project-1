(function(){
  angular.module('listApp', [])
    .controller('ListController', function() {
      this.listItems = [
        {
          url: "img/numbers-01.jpg",
          author: "Provided by: &copy; Tom Sawyer, 1889.",
          canPurchase: false
        },
        {
          url: "img/numbers-02.jpg",
          author: "Provided by: &copy; Jimi Hendrix, 1969.",
          canPurchase: true
        },
        {
          url: "img/numbers-06.jpg",
          author: "Provided by: &copy; Freddy Mercury, 1989.",
          canPurchase: true
        },
        {
          url: "img/numbers-09.jpg",
          author: "Provided by: &copy; Kurt Cobain, 1991.",
          canPurchase: true
        },
        {
          url: "img/numbers-12.jpg",
          author: "Provided by: &copy; Jim Morrison, 1970.",
          canPurchase: true
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