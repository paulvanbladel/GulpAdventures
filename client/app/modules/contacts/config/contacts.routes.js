'use strict';
angular.module('com.module.contacts')
 .config(function($stateProvider) {
    $stateProvider.state('app.contacts', {
      abstract: true,
      url: '/contacts',
      templateUrl: 'app/modules/contacts/views/main.html',
      controller: 'ContactsCtrl'
    })
    .state('app.contacts.list', {
      url: '',
        templateUrl: 'app/modules/contacts/views/list.html',
      controller: 'ContactsCtrl'
    })
    .state('app.contacts.add', {
      url: '/add',
      templateUrl: 'app/modules/contacts/views/form.html',
      controller: 'ContactsCtrl'
    })
    .state('app.contacts.edit', {
      url: '/:id/edit',
      templateUrl: 'app/modules/contacts/views/form.html',
      controller: 'ContactsCtrl'
    })
    .state('app.contacts.view', {
      url: '/:id',
      templateUrl: 'app/modules/contacts/views/view.html',
      controller: 'ContactsCtrl'
    });
  });
