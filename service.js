app.factory("catService", function ($http, $timeout) {

    var service = {
        catURL: "",
        getCatURL: function () {
            var tempCat = service.catURL;
            getCat();
            return tempCat;
        }


    };
    var i = 1;
    getCat = function() {
       // $http.get('data.json').then(function(r) {
            service.catURL = i.toString();
            i++;
            //$timeout(getCat, 5000);
       // });
    }

    service.getCatURL();

    return service;
})