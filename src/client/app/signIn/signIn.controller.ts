namespace app.signIn {
  'use strict';

  export class SignInController  {
    static $inject: Array<string> = ['$rootScope', 'logger'];
    private userName: string;
    constructor(private $rootScope: ng.IRootScopeService, private logger: blocks.logger.ILogger) {}

    signIn() {
      if(this.userName)
        this.$rootScope.$broadcast("signedIn", this.userName);
      else
        this.logger.warning("Enter a username");
    }
  }

  angular
    .module('app.signIn')
    .controller('SignInController', SignInController);
}
