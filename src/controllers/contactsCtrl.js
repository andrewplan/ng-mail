angular.module( 'AngularMail' )
    .controller( 'contactsCtrl', function( $scope, contactsService, $state ){
        $scope.contacts = contactsService.getContacts();
    } )
