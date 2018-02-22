namespace applayout {
  'use strict';

  interface IHtTopNavScope {
    navline: string
  }

  class HtTopNav implements ng.IDirective {
    static $inject: Array<string> = [''];
    constructor() { }

    static instance(): ng.IDirective {
      return new HtTopNav();
    }

    bindToController: boolean = true;
    controller: any = TopNavController;
    controllerAs: string = 'vm';
    link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
    restrict: string = 'EA';
    scope: IHtTopNavScope = {
      'navline': '='
    };
    // templateUrl: string = 'app/layout/ht-top-nav.html';
    templateUrl: Function = function(element: ng.IAugmentedJQuery, attrs: ng.IAttributes) {
      return !attrs.user ? 'app/layout/ht-top-nav.1.html' : 'app/layout/ht-top-nav.html';
    }
  }

  class TopNavController {
    constructor() { 
      // this.activate();
    }

    activate() {
      // var plugins = {rdNavbar : $(".rd-navbar")};
      // if (plugins.rdNavbar.length) {
      //   plugins.rdNavbar.RDNavbar({
      //     //autoHeight: false,
      //     stickUpClone: (plugins.rdNavbar.attr("data-stick-up-clone")) ? plugins.rdNavbar.attr("data-stick-up-clone") === 'true' : false
      //   });
      //   if (plugins.rdNavbar.attr("data-body-class")) {
      //     document.body.className += ' ' + plugins.rdNavbar.attr("data-body-class");
      //   }
      // }
    }
  }

  angular
    .module('app.layout')
    .directive('htTopNav', HtTopNav.instance);
}
