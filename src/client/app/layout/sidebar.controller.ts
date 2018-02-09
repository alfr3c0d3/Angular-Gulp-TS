namespace app.layout {
  'use strict';

  export interface IStateExtra extends ng.ui.IState {
    settings: any;
  }

  let useCustomEvent= true;

  export class SidebarController {
    static $inject: Array<string> = ['$state', '$rootScope'];

    private layout: string;

    constructor(private $state: ng.ui.IStateService, private $rootScope: any) {
      this.layout = sessionStorage.getItem("layout") ? sessionStorage.getItem("layout") : "layout1";
      this.getNavRoutes();
    }

    navRoutes: IStateExtra[];
    states: IStateExtra[] = <IStateExtra[]>this.$state.get();

    isCurrent(route: { title: string }) {
      var currentState: any = this.$state.current;
      if (!route.title || !currentState || !currentState.title) {
        return '';
      }
      var menuName: string = route.title;
      return currentState.title.substr(0, menuName.length) === menuName ? 'current' : '';
    }

    private getNavRoutes() {
      this.navRoutes = this.states
        .filter((state) => state.settings && state.settings.nav)
        .sort((state1, state2) => state1.settings.nav - state2.settings.nav);
    }

    changeLayout() {
      
      this.layout === "layout1" ? sessionStorage.setItem("layout", "layout2") : sessionStorage.setItem("layout", "layout1");
      
      if(useCustomEvent === true){
        this.layout = this.layout === "layout1" ? "layout2" : "layout1";
        this.$rootScope.$broadcast('refreshLayout');
      }
      else{
        window.location.reload();
      }    
    }

  }

  angular
    .module('app.layout')
    .controller('SidebarController', SidebarController);
}
