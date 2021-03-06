import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'app-add-bootstap-to-angular',
  templateUrl: './add-bootstap-to-angular.component.html',
  styles: []
})
export class AddBootstapToAngularComponent implements OnInit {

  currentUrl:string;

  constructor(private state:StateService) { }

  ngOnInit() {
    this.currentUrl=this.state.current.name;
  }

}
