import { Injectable } from '@angular/core';
import dataNewsList from '../../ts/list/dataNewsList';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  protected newsList = dataNewsList;

  constructor() {}

  getNewsList() {
    return this.newsList;
  }
}
