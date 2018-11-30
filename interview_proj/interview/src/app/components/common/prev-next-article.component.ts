import { Component, OnInit, Input } from '@angular/core';
import { angular_tutorials } from './../../conf/tutorials';

@Component({
  selector: 'app-prev-next-article',
  templateUrl: './prev-next-article.component.html',
  styles: []
})
export class PrevNextArticleComponent implements OnInit {

  prev:string;
  next:string;
  @Input('url') currentUrl;

  constructor() { }

  ngOnInit() {
    let host=angular_tutorials.find(c=>c.url==this.currentUrl);
    this.prev=host.prev;
    this.next=host.next;
  }

}
