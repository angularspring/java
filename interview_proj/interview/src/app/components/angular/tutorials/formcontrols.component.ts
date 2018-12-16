import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'app-formcontrols',
  templateUrl: './formcontrols.component.html',
  styles: []
})
export class FormcontrolsComponent implements OnInit {
  currentUrl:string;

  constructor(private state:StateService) { }

  ngOnInit() {
    this.currentUrl=this.state.current.name;
  }

}
