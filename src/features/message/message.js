angular.module( 'AngularMail' )
    .directive( 'message', function() {
        return {
            templateUrl:  './src/features/message/message.html'
            , restrict: 'E'
            , replace: true
            , scope: {
                  message: '='
                  , selectMessage: '&'
            }
        }
    } )
