angular.module('zeatful.angular-braintree-integration', []).
  directive('basicBrainTreeForm', function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
          amount: "="
      },
      template: '<form>' +
                  '<div class="form-group">'+
                    '<label for="full-name">Card Holder Full Name</label>'+
                    '<input type="text" class="form-control" id="full-name" placeholder="Full Name of Card Holder">'+
                  '</div>'+
                  '<button type="submit" class="btn btn-default">Submit</button>'+
                  '</form>',
      link: function(scope, element, attrs) {
          // functional logic
      }
    };
  });
