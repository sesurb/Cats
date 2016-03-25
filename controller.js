app.controller("myController", function ($scope, catService, $timeout) {
    $scope.catURL = "0";
    $scope.getNextCat = function () {
        $scope.catURL = catService.getCatURL();
    }


})