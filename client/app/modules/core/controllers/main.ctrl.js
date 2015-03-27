'use strict';

angular.module('com.module.core')
    .controller('MainCtrl', function ($scope, $rootScope, $state, $location ) {


        $scope.menuoptions = $rootScope.menu;


    })
;

