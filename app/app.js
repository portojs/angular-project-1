(function(){
  angular.module('listApp', [])
    .controller('ListController', function() {
      this.listItems = [
        {
          url: "img/numbers-01.jpg",
          author: "Provided by: &copy; Tom Sawyer, 1889."
        },
        {
          url: "img/numbers-02.jpg",
          author: "Provided by: &copy; Jimi Hendrix, 1969."
        },
        {
          url: "img/numbers-06.jpg",
          author: "Provided by: &copy; Freddy Mercury, 1989."
        },
        {
          url: "img/numbers-09.jpg",
          author: "Provided by: &copy; Kurt Cobain, 1991."
        },
        {
          url: "img/numbers-12.jpg",
          author: "Provided by: &copy; Jim Morrison, 1970."
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