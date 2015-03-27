'use strict';


angular.module('com.module.contacts')
  .controller('ContactsCtrl', function ($scope, $state, $stateParams,  Contact) {

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
      $scope.contact = {};
    }

    function loadItems() {
      $scope.contacts = Contact.query();
    }

    loadItems();

    //$scope.delete = function (id) {
    //  CoreService.confirm(gettextCatalog.getString('Are you sure?'), gettextCatalog.getString('Deleting this cannot be undone'), function () {
    //    Post.deleteById(id, function () {
    //      CoreService.toastSuccess(gettextCatalog.getString('Post deleted'), gettextCatalog.getString('Your post is deleted!'));
    //      loadItems();
    //      $state.go('app.posts.list');
    //    }, function (err) {
    //      CoreService.toastError(gettextCatalog.getString('Error deleting post'), gettextCatalog.getString('Your post is not deleted: ') + err);
    //    });
    //  }, function () {
    //    return false;
    //  });
    //};
    //
    //$scope.formFields = [
    //  {
    //    key: 'title',
    //    type: 'text',
    //    label: 'Title',
    //    required: true
    //  },
    //  {
    //    key: 'content',
    //    type: 'textarea',
    //    label: 'Content',
    //    required: true
    //  },
    //  {
    //    key: 'image',
    //    type: 'text',
    //    label: 'image',
    //    required: true
    //  }
    //];
    //
    //$scope.formOptions = {
    //  uniqueFormId: true,
    //  hideSubmit: false,
    //  submitCopy: 'Save'
    //};
    //
    $scope.onSubmit = function () {
      Contact.save($scope.contact, function () {
        //CoreService.toastSuccess(gettextCatalog.getString('Contact saved'), gettextCatalog.getString('Your contact is safe with us!'));
        $state.go('^.list');
      }, function (err) {
        console.log(err);
      });
    };

  });
