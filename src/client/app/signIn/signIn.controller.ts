namespace app.signIn {
  'use strict';

  export class SignInController {
    static $inject: Array<string> = ['$rootScope', 'logger', 'dataservice'];
    private userName: string;
    private password: string;
    constructor(private $rootScope: ng.IRootScopeService, private logger: blocks.logger.ILogger, private dataservice: app.core.IDataService) { }

    signIn() {

      if (!this.userName) {
        this.logger.error("Username is empty")
        return;
      }

      this.dataservice.getPeople()
        .then(response => {
          var user = _.find(response, (item: any) => {
            return item.userName === this.userName;
          });

          sessionStorage.setItem("user", JSON.stringify(user));
          this.$rootScope.$broadcast("signedIn");
        })
        .catch(() => { this.logger.error("Sing in failed, please try again") })
    }
  }

  angular
    .module('app.signIn')
    .controller('SignInController', SignInController);
}
