(function () {
'use strict';

var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController)
  .filter('custom' , customFilter);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope) {
  $scope.shoppingList3=[
    {name:"shreejit",desc:"godbole"},
    {name:"kunji",desc:"shreejit"},
    {name:"ray",desc:"suresh"},
    {name:"suresh",desc:"ray"},
  ];
  $scope.shoppingList = shoppingList;
}

  function containsFilter(value) {
    return value.indexOf(search) !== -1;
  }
function customFilter(){
  return function(input, search){
    console.log(`searched item is ${search}`);
    input.forEach(function(item){
      console.log(`item name ${item.name}`);
    });
    var newArr = input.filter(function(item){
      return item.name.indexOf(search) !== -1;
    });
    console.log(`new array size ${newArr.length}`);
    if(search == undefined){
      return input;
    }
    return newArr;
  }
}

})();
