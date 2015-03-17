//service
angular.module('app').factory("myService", function ($resource) {
    return $resource("/api/test/:id");

    var z = 1;
});