namespace app.signIn {
  'use strict';

  angular
    .module('app.signIn')
    .config(configureStates);

  configureStates.$inject = ['$stateProvider'];
  /* @ngInject */
  function configureStates($stateProvider: ng.ui.IStateProvider) {
    var states = getStates();
    states.forEach(function(state) {
      $stateProvider.state(state.state, state.config);
    });
  }

  function getStates() {
    return [
      {
        state: 'signIn',
        config: {
          url: '/signIn',
          templateUrl: 'app/signIn/signIn.html',
          controller: 'SignInController',
          controllerAs: 'vm',
          title: 'signIn'
        }
      }
    ];
  }
}
