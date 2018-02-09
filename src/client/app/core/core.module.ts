namespace app.core {
  'use strict';

  angular
    .module('app.core', [
      'ui.bootstrap',
      'ngAnimate', 'ngSanitize',
      'blocks.exception', 'blocks.logger', 'blocks.router',
      'ui.router', 'ngplus'
    ]);
}
