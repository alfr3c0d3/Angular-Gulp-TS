namespace app.people {
  'use strict';

  angular
    .module('app.people')
    .config(configureStates);

  configureStates.$inject = ['$stateProvider'];
  /* @ngInject */
  function configureStates($stateProvider: ng.ui.IStateProvider) {
    var states: any[] = getStates();
    states.forEach(function(state) {
      $stateProvider.state(state.state, state.config);
    });
  }

  function getStates(): any[] {
    return [
      {
        state: 'people',
        config: {
          url: '/people',
          templateUrl: 'app/people/people.html',
          controller: 'PeopleController',
          controllerAs: 'vm',
          title: 'People',
          params: { isFromState: false }
          // settings: {
          //   nav: 3,
          //   content: '<i class="fa fa-users"></i> People'
          // }
        }
      }
    ];
  }
}
