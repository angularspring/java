import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tutorial-widgets',
  templateUrl: './tutorial-widgets.component.html',
  styles: []
})
export class TutorialWidgetsComponent implements OnInit {

  @Input('tutorials') searchTutorials;
  @Input() align_cards;

  constructor() { 
    
  }

  ngOnInit() {
    if(!this.align_cards){
      this.align_cards='justify-content-center';
    }
  }

}
