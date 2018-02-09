namespace app.people {
  'use strict';

  interface IPersonVm {
    title: string;
  }
  export class PersonModalController implements IPersonVm {
    title: string;
    person: any = {};
    private isFromState: boolean = false;

    static $inject: Array<string> = ['dataservice', '$uibModalInstance', 'data'];
    constructor(
      private dataservice: app.core.IDataService,
      private $uibModalInstance: any,
      private data: any
    ) {

      this.title = data.id ? `Edit ${data.firstName} ${data.lastName}` :  'Add New Person';
      this.person = data;
    }

    save() {
      this.$uibModalInstance.close(this.person);
    }
  }

  angular
    .module('app.people')
    .controller('PersonModalController', PersonModalController);
}
