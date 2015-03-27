'use strict';
angular.module ('com.module.core')
    .run (function ($rootScope  ) {

    // Left Sidemenu
    $rootScope.menu = [];

    // Add Sidebar Menu
    $rootScope.addMenu = function (name, uisref, icon) {
        $rootScope.menu.push ({
            name: name,
            sref: uisref,
            icon: icon
        });
    };

    // Add Menu Dashboard
    $rootScope.addMenu ('Dashboard', 'app.home', 'fa-dashboard');

    // Dashboard
    $rootScope.dashboardBox = [];

    // Add Dashboard Box
    $rootScope.addDashboardBox = function (name, color, icon, quantity, href) {
        $rootScope.dashboardBox.push ({
            name: name,
            color: color,
            icon: icon,
            quantity: quantity,
            href: href
        });
    };



});
