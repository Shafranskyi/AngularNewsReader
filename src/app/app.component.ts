import { Component, OnInit } from '@angular/core';
import { NewsService } from "./news.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {4

  ngOnInit(): void {
    this.news.initArticles().subscribe(data => this.mArticles = data['articles']);
    this.news.initSources().subscribe(data => this.mSources = data['sources']);
  }

  mArticles: Array<any>;
  mSources: Array<any>;

  constructor (private news: NewsService) {}

  searchArticles(source: string) {
    this.news.getActiclesById(source).subscribe(data => this.mArticles = data['articles']);
  }

}
