namespace app.homes {
  'use strict';

  export class Home1Controller  {
    static $inject: Array<string> = [];
    private title = "Home 1";
    constructor() {}
  }

  export class Home2Controller  {
    static $inject: Array<string> = [];
    private title = "Home 2";
    constructor() {}
  }


  angular
    .module('app.homes')
    .controller('Home1Controller', Home1Controller)
    .controller('Home2Controller', Home2Controller);
}
