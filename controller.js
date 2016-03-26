app.controller("myController", function ($scope, catService, $timeout, $sce) {
    $scope.catURL = "0";
    $scope.getNextCat = function () {
        //go get the next image
        //since we are passing html we need to see how to handle that since it could be unsafe. I decided to use $sce and I injected it above and use it like below. 
        $scope.catURL = $sce.trustAsHtml(catService.getCatURL());
        //Wait thirty seconds then start the process over again. This will be called recursively creating a never ending loop.
        $timeout($scope.getNextCat, 30000);
    };
    $scope.startCatShow = function () {
        //Kick off the process.
         $scope.getNextCat();
    }


})