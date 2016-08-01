
var braintreeWeb = require('braintree-web');
var braintreeFactory = require('./services/braintree-factory');
var abi = angular.module('zeatful.angular-braintree-integration', []);

abi.factory('$braintree', [
  'clientTokenPath',
  '$http',
  braintreeFactory(braintreeWeb)
]);

abi.directive('basicBrainTreeForm', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
          amount: "=",
          options: "="
      },
      template: '<form id="bt-dropin">' +
                  '<div class="form-group">'+
                    '<label for="full-name">Card Holder Full Name</label>'+
                    '<input type="text" class="form-control" id="full-name" placeholder="Full Name of Card Holder">'+
                  '</div>'+
                  '<button type="submit" class="btn btn-default">Submit</button>'+
                  '</form>',
      controller: ['$scope', '$braintree', function($scope, $braintree){
        var options = $scope.options || {};
        options.container = 'bt-dropin';
        $braintree.setupDropin(options);
      }]
    };
  });

module.exports = abi;
