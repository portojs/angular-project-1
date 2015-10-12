(function(){
  angular.module('listApp', [])
    .controller('ListController', function() {
      this.listItems = [
        {
          url: "img/numbers-01.jpg",
          author: "Provided by: &copy; Tom Sawyer, 1889.",
          description: "A unique piece of art made by one of the brightest minds in human history.",
          reviews: [
            {
              text: "Fabulous!",
              author: "dean@gmail.com"
            }
          ],
          price: 20.05,
          canPurchase: false,
          soldOut: false
        },
        {
          url: "img/numbers-02.jpg",
          author: "Provided by: &copy; Jimi Hendrix, 1969.",
          description: "A unique piece of art made by one of the brightest minds in human history.",
          reviews: [
            {
              text: "Fantastic!",
              author: "dean@gmail.com"
            }
          ],
          price: 71.20,
          canPurchase: true,
          soldOut: false
        },
        {
          url: "img/numbers-06.jpg",
          author: "Provided by: &copy; Freddy Mercury, 1989.",
          description: "A unique piece of art made by one of the brightest minds in human history.",
          reviews: [
            {
              text: "Formidable!",
              author: "dean@gmail.com"
            }
          ],
          price: 35.00,
          canPurchase: true,
          soldOut: false
        },
        {
          url: "img/numbers-09.jpg",
          author: "Provided by: &copy; Kurt Cobain, 1991.",
          description: "A unique piece of art made by one of the brightest minds in human history.",
          reviews: [
            {
              text: "Ferocious!",
              author: "dean@gmail.com"
            }
          ],
          price: 99.99,
          canPurchase: true,
          soldOut: false
        },
        {
          url: "img/numbers-12.jpg",
          author: "Provided by: &copy; Jim Morrison, 1970.",
          description: "A unique piece of art made by one of the brightest minds in human history.",
          reviews: [
            {
              text: "Fearsome!",
              author: "dean@gmail.com"
            }
          ],
          price: 114.21,
          canPurchase: true,
          soldOut: false
        }
      ];
    })
    .controller('PanelController', function() {
      this.tab = 1;
      this.selectTab = function(setTab) {
        this.tab = setTab;
      };
      this.isSelected = function(checkTab) {
        return checkTab === this.tab;
      };
    })
    .directive('mainHeader', function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/main-header.html'
      };
    });
})();