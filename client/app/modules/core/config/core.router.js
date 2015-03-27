'use strict';
angular.module ('com.module.core')
    .config (function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state ('router', {
        url: '/router',
        template: '<div class="lockscreen" style="height: 100%"></div>',
        controller: 'RouteCtrl'
    })
        .state ('app', {
        abstract: true,
        url: '/app',
        templateUrl: 'app/modules/core/views/app.html',
        controller: 'MainCtrl'
    })
        .state ('app.home', {
        url: '',
        templateUrl: 'app/modules/core/views/home.html',
        controller: 'HomeCtrl'
    });
    $urlRouterProvider.otherwise ('/router');
});
