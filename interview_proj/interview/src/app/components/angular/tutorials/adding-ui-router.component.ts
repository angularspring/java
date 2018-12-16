import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'app-adding-ui-router',
  templateUrl: './adding-ui-router.component.html',
  styles: []
})
export class AddingUiRouterComponent implements OnInit {

  currentUrl:string;

  constructor(private state:StateService) { }

  ngOnInit() {
    this.currentUrl=this.state.current.name;
  }

}
