import { Component, OnInit, Input } from '@angular/core';
import { Transition } from '@uirouter/core';

import { topics } from './../../conf/topics';
import { angular_tutorials } from './../../conf/tutorials';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  keyword:string;
  searchTopics:any=[];
  searchTutorials:any=[];
  searchWord:string;

  constructor(private trans:Transition) { }

  ngOnInit() {
    this.keyword=this.trans.params().keyword;
    this.searchWord=this.keyword;
    this.keyword=this.keyword.toString().toLowerCase();
    this.searchTopic(topics);
    let tutorialsNew=[];
    tutorialsNew=tutorialsNew.concat(angular_tutorials);
    this.searchTutorial(tutorialsNew);
  }

  searchTopic(top:any){
    for(let obj of top){
      if(obj.keywords.toString().toLowerCase().includes(this.keyword)){
        this.searchTopics.push(obj);
      }
      if(obj.subtopics && obj.subtopics.length>0){
        this.searchTopic(obj.subtopics);
      }
    }
  }

  searchTutorial(top:any){
    for(let obj of top){
      if(obj.keywords.toString().toLowerCase().includes(this.keyword)){
        this.searchTutorials.push(obj);
      }
    }
  }

}
