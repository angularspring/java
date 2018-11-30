import { Component, OnInit, Input } from '@angular/core';
import { angular_tutorials } from './../../conf/tutorials';

@Component({
  selector: 'app-related-articles',
  templateUrl: './related-articles.component.html',
  styles: []
})
export class RelatedArticlesComponent implements OnInit {

  tutorials:any=[];
  relatedUrl:any=[];
  @Input('url') currentUrl;

  constructor() { }

  ngOnInit() {
    let host=angular_tutorials.find(c=>c.url==this.currentUrl);
    this.relatedUrl=host.relatedUrl;
    for(let obj of this.relatedUrl){
      this.tutorials.push(angular_tutorials.find(c=>c.url==obj));
    }
  }

}
