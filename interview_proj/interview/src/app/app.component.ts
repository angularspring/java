import { Component } from '@angular/core';
import { TransitionService } from '@uirouter/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interview';  
  constructor(private trans:TransitionService){
    this.trans.onSuccess({},function(){
      window.scroll(0,0);
    });
  }
}
