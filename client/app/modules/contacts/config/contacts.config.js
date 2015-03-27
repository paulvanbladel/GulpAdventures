'use strict';
angular.module('com.module.contacts')
  .run(function ($rootScope ) {
    $rootScope.addMenu('Contacts', 'app.contacts.list', 'fa-edit');

    //Contact.find(function (contacts) {
    //  $rootScope.addDashboardBox(gettextCatalog.getString('Contacts'), 'bg-red', 'ion-document-text', contacts.length, 'app.contacts.list');
    //});

  });
