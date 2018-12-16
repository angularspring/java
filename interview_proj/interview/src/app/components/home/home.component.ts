import { Component, OnInit } from '@angular/core';
import { topics } from './../../conf/topics';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  hometopics:any=[];
  constructor() {
   }

  ngOnInit() {
    this.hometopics=topics;
  }

}
