import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  keyword:string;

  constructor(private state:StateService) { }

  ngOnInit() {
  }

  search(){
    if(this.keyword){
      let keyword=this.keyword;
      this.keyword='';
      this.state.go('search',{keyword:keyword});
    }
  }

}
