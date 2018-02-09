namespace app.people {
  'use strict';

  interface IPeopleVm {
    title: string;
  }
  export class PeopleController implements IPeopleVm {
    title: string = 'People';
    people: Array<any> = [];
    private isFromState: boolean = false;

    static $inject: Array<string> = ['dataservice', 'logger', '$state' , '$stateParams', '$uibModal'];
    constructor(
      private dataservice: app.core.IDataService, 
      private logger: blocks.logger.Logger, 
      private $state: ng.ui.IStateService,
      private $stateParams: ng.ui.IStateParamsService,
      private $uibModal: any
    ) {
      this.logger.info('Activated People View');
      this.getPeople().then(_ => {
        if(this.$stateParams && this.$stateParams.isFromState)
          this.isFromState = true;
      });
    }

    getPeople() {
      return this.dataservice.getPeople().then((data) => {
        this.people = data;
        return this.people;
      });
    }

    edit(id: number): void {

      var originalPerson = {};
      this.dataservice.getPerson(id).then((data) => {
        originalPerson = data;
      });

      var modalInstance =  this.$uibModal.open({
        templateUrl: "app/people/person-modal.html",
        controller: "PersonModalController",
        controllerAs: "vm",
        size: 'md',
        resolve: {
          data: () => this.dataservice.getPerson(id).then((data) => data)
        }
      });
      
      modalInstance.result
        .then((response: any) => {
          if(originalPerson !== response)  
            this.logger.warning(`Eddited ${response.firstName} ${response.lastName}`);
        })
        .catch(() => modalInstance.close());

    }

    changeColor(): string {
      return (this.isFromState) ? "wgreen" : "wviolet";
    }
  }

  angular
    .module('app.people')
    .controller('PeopleController', PeopleController);
}
