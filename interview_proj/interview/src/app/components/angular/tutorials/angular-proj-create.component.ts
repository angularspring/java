import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'app-angular-proj-create',
  templateUrl: './angular-proj-create.component.html',
  styles: []
})
export class AngularProjCreateComponent implements OnInit {
  currentUrl:string;

  constructor(private state:StateService) { }

  ngOnInit() {
    this.currentUrl=this.state.current.name;
  }

}
