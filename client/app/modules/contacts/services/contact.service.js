//'use strict';
////service
//angular.module('app').factory("Contact", function ($resource) {
//    return $resource("/api/customer/:id",{ id: '@_id' }, {
//        update: {
//            method: 'PUT'
//        }
//    } );
//});
'use strict';
//service
angular.module('app').factory("Contact", function (Resource) {
    return Resource("/api/customer/:id", {id: '@_id'});
});

