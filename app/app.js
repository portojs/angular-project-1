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
              stars: 5,
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
              stars: 5,
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
              stars: 5,
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
              stars: 5,
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
              stars: 5,
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
    .directive('productInfo', function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/product-info.html'
      }
    })
    .directive('productForm', function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/product-form.html',
        controller: function() {
          this.review = {};
          this.addReview = function(item) {
            item.reviews.push(this.review);
            this.review = {};
          };
        },
        controllerAs: 'reviewCtrl'
      };
    })
    .directive('productPanels', function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/product-panels.html',
        controller: function(){
          this.tab = 1;
          this.selectTab = function(setTab) {
            this.tab = setTab;
          };
          this.isSelected = function(checkTab) {
            return checkTab === this.tab;
          };
        },
        controllerAs: 'panelCtrl'
      };
    });
})();