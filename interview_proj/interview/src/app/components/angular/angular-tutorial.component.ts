import { Component, OnInit } from '@angular/core';
import { angular_tutorials } from './../../conf/tutorials';

@Component({
  selector: 'app-angular-tutorial',
  templateUrl: './angular-tutorial.component.html',
  styles: []
})
export class AngularTutorialComponent implements OnInit {

  tutorials:any=[];
  constructor() { }

  ngOnInit() {
    this.tutorials=angular_tutorials;
  }

}
