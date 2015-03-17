/**
 * Created by paul on 13/03/2015.
 */
//controller
angular.module('app').controller('myController', function ($scope, $http, myService) {
   $scope.serviceOutput  =  myService.query();//.$promise;


    //$http.get('/api/test').then(function (d) {
    //    $scope.serviceOutput = d.data;
    //})

});
