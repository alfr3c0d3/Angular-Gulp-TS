namespace app.layout {
  'use strict';
  
  export class ShellController {
    static $inject: Array<string> = ['$rootScope', '$timeout', 'config', 'logger', '$state', '$scope'];

    private layout: string;
    private navline: {};


    constructor(private $rootScope: any,
      private $timeout: ng.ITimeoutService,
      private config: { appTitle: string },
      private logger: blocks.logger.Logger,
      private $state: ng.ui.IStateService,
      private $scope: ng.IScope
    ) {
      this.logger.success(config.appTitle + ' loaded!', null);
      this.hideSplash();
      this.$rootScope.showSplash = true;
      
      this.layout = sessionStorage.getItem("layout") ? sessionStorage.getItem("layout") : "layout1";

      this.$scope.$on('refreshLayout', _ => {
        this.applyChanges();
      });

      this.activate();
    }

    applyChanges() {
      this.$timeout(() => {
        this.layout = sessionStorage.getItem("layout");
        this.activate();
       })
    }

    activate() {
      
      var statePromise = (this.layout === 'layout1') ?  this.$state.go('dashboard') : this.$state.go('people', { isFromState: true }, {reload: true} );

      statePromise.then(_ => {
          this.navline = {
            title: this.layout === "layout1" ? this.config.appTitle : "People",
            text: this.layout === "layout1" ? 'Created by John Papa' : 'Created by Alfredo Morales',
            link: this.layout === "layout1" ? 'http://twitter.com/john_papa' : 'https://maps.google.com/'
          };
        });
    }

    busyMessage = 'Please wait ...';
    isBusy = true;


    hideSplash() {
      //Force a 1 second delay so we can see the splash.
      this.$timeout(() => { this.$rootScope.showSplash = false; }, 1000);
    }
  }

  angular
    .module('app.layout')
    .controller('ShellController', ShellController);
}
