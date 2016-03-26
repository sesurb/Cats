app.factory("catService", function ($http, $timeout) {
    var catUrl = "Nothing yet"
    var service = {
        //This is the exposed public service that will be returned and is available to the calling
        getCatURL: function () {
            //Storing the current cat in a temp variable to show but we will also beging the process of getting the next cat image.
            var tempCat = service.catURL;
            getCat();
            //Return the cat url we want to show.
            return tempCat;
        }


    };
    
    //This is the method to get the cat image, we could do a timeout here and load it every thirty seconds but I would rather handle the business logic in the controller.
    getCat = function() {
        //The get request to pull the next image. A quick look at the documentation provides a few ways to retrieve the image. I chose to return an html image tag, we could have also got
        //the binary or xml and just referenced the url.
       $http.get('http://thecatapi.com/api/images/get?format=html&type=gif').then(function(r) {
           //After looking at what was returned with the link above I could tell I needed the data potion.
           service.catURL = r.data;
       });
    }
    
    //When the service is loaed for the first time we need to load the image.
    service.getCatURL();

    //Returns the service object. Note the {} int eh service variable above. {} denotes an object.
    return service;
})