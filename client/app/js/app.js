'use strict';
/**
 * @ngdoc overview
 * @name loopbackApp
 * @description
 * # loopbackApp
 *
 * Main module of the application.
 */
angular.module('app', [
    //'angular.filter',
    //'angularBootstrapNavTree',
    //'angularFileUpload',
    //'btford.markdown',
    //'oitozero.ngSweetAlert',
    //'config',
    //'formly',
    //'lbServices',
    //'monospaced.elastic',
    //'ngAnimate',
    //'ngCookies',
    'ngResource',
    //'ngRoute',
    //'ngSanitize',
    //'ngTouch',
    //'ui.bootstrap',
    //'ui.codemirror',
    //'ui.gravatar',
    //'ui.grid',
    'ui.router',
    //'toasty',
    //'autofields',
    //'gettext',
    'com.module.core',
    'com.module.contacts'

])
    .run(function ($rootScope) {


    });

angular.module('app').factory('Resource', ['$resource', function ($resource) {
    return function (url, params, methods) {
        var defaults = {
            update: {method: 'put', isArray: false},
            create: {method: 'post'}
        };

        methods = angular.extend(defaults, methods);

        var resource = $resource(url, params, methods);

        resource.prototype.$save = function () {
            if (!this._id) {
                return this.$create();
            }
            else {
                return this.$update();
            }
        };
        resource.save = function (entity) {
            if (!entity._id) {
                return this.create(entity);
            }
            else {
                return this.update(entity);
            }
        };

        return resource;
    };
}]);