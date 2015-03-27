'use strict';


angular.module('com.module.contacts')
    .controller('ContactsCtrl', function ($scope, $state, $stateParams, Contact) {

        var contactId = $stateParams.id;
        console.log("contact id = " + contactId);
        if (contactId) {
            $scope.contact = Contact.get({
                id: contactId
            }, function () {
            }, function (err) {
                console.log(err);
            });
        } else {
            $scope.contact = new Contact();
        }

        function loadItems() {
            $scope.contacts = Contact.query();
        }

        loadItems();


        $scope.onSubmit = function () {
            //if($scope.contact._id) {

            $scope.contact.$save().then(function () {
                    //CoreService.toastSuccess(gettextCatalog.getString('Contact saved'), gettextCatalog.getString('Your contact is safe with us!'));
                    $state.go('^.list');
                },
                function (err) {
                    console.log(err);
                });

            //Contact.save($scope.contact).$promise.then(function () {
            //    //CoreService.toastSuccess(gettextCatalog.getString('Contact saved'), gettextCatalog.getString('Your contact is safe with us!'));
            //    $state.go('^.list');
            //}).catch(function (err) {
            //    console.log(err);
            //});
            //}
            //else {
            //  Contact.save($scope.contact, function () {
            //    //CoreService.toastSuccess(gettextCatalog.getString('Contact saved'), gettextCatalog.getString('Your contact is safe with us!'));
            //    $state.go('^.list');
            //  }, function (err) {
            //    console.log(err);
            //  });
            //}


        };

    });
