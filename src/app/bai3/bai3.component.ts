import { Component } from '@angular/core';
import { Articles3 } from './articles3';

@Component({
  selector: 'app-bai3',
  templateUrl: './bai3.component.html',
  styleUrl: './bai3.component.css',
})
export class Bai3Component {
  searchString: any;
  articles_array: any[] = [];
  // The data model. These items would normally be requested via AJAX,
  // but are hardcoded here for simplicity.
  articles: Articles3[] = [
    {
      title: 'Taya Bánh Mì đen',
      url: 'http://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/',
      image: '/bread/bread1.jpg',
    },
    {
      title: 'Bánh mì nướng',
      url: 'http://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/',
      image: '/bread/bread2.jpg',
    },
    {
      title: 'Hạnh Nhân nướng',
      url: 'http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/',
      image: '/bread/bread3.jpg',
    },
    {
      title: 'Bready cuộn nhân dừa',
      url: 'http://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/',
      image: '/bread/bread4.jpg',
    },
    {
      title: 'Muffin cam hạnh nhân',
      url: 'http://tutorialzine.com/2016/01/learn-sql-in-20-minutes/',
      image: '/bread/bread5.jpg',
    },
    {
      title: 'Đan mạch ca dé',
      url: 'http://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/',
      image: '/bread/bread6.jpg',
    },
    {
      title: 'Baguette ngũ hạt dài',
      url: 'http://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/',
      image: '/bread/bread7.jpg',
    },
  ];
  filterName() {
    this.articles_array = this.articles;
    var str = this.searchString;
    if (!str) {
      return this.articles_array;
    }
    str = str.trim().toLowerCase();
    this.articles_array = this.articles_array.filter(function (item) {
      if (item.title.toLowerCase().indexOf(str) !== -1) {
        return item;
      }
    });
    return this.articles_array;
  }
}
