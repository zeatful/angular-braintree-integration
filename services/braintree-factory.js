function braintreeFactory (braintree) {
  return function braintreeAngular (clientTokenPath, $http) {
    var $braintree = {};

    $braintree.clientToken = null;

    Object.keys(braintree).forEach(function (key) {
      $braintree[key] = braintree[key]
    })

    $braintree.getClientToken = function (params) {
      var path = clientTokenPath;

      if (params) {
        path += '?';
        path += Object.keys(params).map(function (key) {
          var value = params[key];
          return key + '=' + value
        }).join('&')
      }

      return $http.get(path)
    };

    $braintree.setupBasic = function (options) {
      $braintree.getClientToken()
        .success(function (token) {
          braintree.setup(token, 'custom', options)
        })
        .error(function (data, status) {
          console.error('error fetching client token at ' + clientTokenPath, data, status)
        })
    };

    return $braintree
  }
}

module.exports = braintreeFactory;
