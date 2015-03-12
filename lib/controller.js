

angular.module('myApp', ['ngRoute']).controller('flightController', function ($scope, $http, getDataService) {

    $scope.findValue = function(enteredValue) {
        alert("Searching for = " + enteredValue);

        $scope.MyData = [];

        getDataService.getData(function(data) {

            $scope.MyData = airports[1];

        });
    }

});

angular.module('myApp', []).factory('getDataService', function($http) {
    return {
        getData: function(done) {
            $http.get('/airports.json')
                .success(function(data) {
                    done(data);
                })
                .error(function(error) {
                    alert('An error occured');
                });
        }
    }
});