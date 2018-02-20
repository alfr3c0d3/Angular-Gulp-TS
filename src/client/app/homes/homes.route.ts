namespace app.homes {
  'use strict';

  angular
    .module('app.homes')
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
        state: 'home1',
        config: {
          url: '/',
          templateUrl: 'app/homes/home1.html',
          controller: 'Home1Controller',
          controllerAs: 'vm',
          title: 'home1',
          options: {reload : true}
        }
      },
      {
        state: 'home2',
        config: {
          url: '/home2',
          templateUrl: 'app/homes/home2.html',
          controller: 'Home2Controller',
          controllerAs: 'vm',
          title: 'home2',
          options: {reload : true}
        }
      }
    ];
  }
}
