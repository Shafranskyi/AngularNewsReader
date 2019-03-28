import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiKey = 'ecd5e22765984fad9943acc61257093c';
  apiURL = 'https://newsapi.org/v2/';

  constructor(private client: HttpClient) { }

  initSources() {
    return this.client.get(this.apiURL + 'sources?language=en&apiKey=' + this.apiKey);
  }

  initArticles() {
    return this.client.get(this.apiURL + 'top-headlines?sources=techcrunch&apiKey=' + this.apiKey);
  }

  getActiclesById(source: string) {
    return this.client.get(this.apiURL + 'top-headlines?sources=' + source + '&apiKey=' + this.apiKey);
  }
}
