import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'app-angular-install',
  templateUrl: './angular-install.component.html',
  styles: []
})
export class AngularInstallComponent implements OnInit {

  currentUrl:string;

  constructor(private state:StateService) { }

  ngOnInit() {
    this.currentUrl=this.state.current.name;
  }

}
