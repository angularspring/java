import { Component, OnInit } from '@angular/core';
import { topics } from './../../conf/topics';

@Component({
  selector: 'app-spring',
  templateUrl: './spring.component.html',
  styles: []
})
export class SpringComponent implements OnInit {

  springtopics:any=[];
  constructor() { }

  ngOnInit() {
    let dummy = topics.find(c=>c.name=='Spring');
    if(dummy){
      this.springtopics=dummy.subtopics;
    }
  }

}
