angular.module( 'AngularMail' )
    .controller( 'draftCtrl', function( $scope, $stateParams ) {
      $scope.newMessage = {
        to: $stateParams.email || '' // don't actually need || '', will be empty string by default.
      };

      $scope.sendMessage = function() {
        $scope.newMessage = {};
      };
} )
