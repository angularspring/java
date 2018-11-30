import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interview-widgets',
  templateUrl: './interview-widgets.component.html',
  styles: []
})
export class InterviewWidgetsComponent implements OnInit {

  @Input('topics') searchTopics;
  @Input() align_cards;
  constructor() { }

  ngOnInit() {
    if(!this.align_cards){
      this.align_cards='justify-content-center';
    }
  }

}
