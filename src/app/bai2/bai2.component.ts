import { Component } from '@angular/core';
import { Articles } from './articles';

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrl: './bai2.component.css',
})
export class Bai2Component {
  layout: string = 'grid'; //list
  articles: Articles[] = [
    {
      title: 'Taya Bánh Mì đen',
      url: 'https://tadiha.com/abc-bakery-mot-trong-10-thuong-hieu-banh-kem-noi-tieng-tai-tp-hcm-d28960.htm',
      image: {
        large: './bread/bread1.jpg',
        small: './bread/bread1.jpg',
      },
    },
    {
      title: 'Bánh mì nướng',
      url: 'https://tadiha.com/abc-bakery-mot-trong-10-thuong-hieu-banh-kem-noi-tieng-tai-tp-hcm-d28960.htm',
      image: {
        large: './bread/bread2.jpg',
        small: './bread/bread2.jpg',
      },
    },
    {
      title: 'Hạnh Nhân nướng',
      url: 'https://tadiha.com/abc-bakery-mot-trong-10-thuong-hieu-banh-kem-noi-tieng-tai-tp-hcm-d28960.htm',
      image: {
        large: './bread/bread3.jpg',
        small: './bread/bread3.jpg',
      },
    },
    {
      title: 'Bready cuộn nhân dừa',
      url: 'https://tadiha.com/abc-bakery-mot-trong-10-thuong-hieu-banh-kem-noi-tieng-tai-tp-hcm-d28960.htm',
      image: {
        large: './bread/bread4.jpg',
        small: './bread/bread4.jpg',
      },
    },
    {
      title: 'Muffin cam hạnh nhân',
      url: 'https://tadiha.com/abc-bakery-mot-trong-10-thuong-hieu-banh-kem-noi-tieng-tai-tp-hcm-d28960.htm',
      image: {
        large: './bread/bread5.jpg',
        small: './bread/bread5.jpg',
      },
    },
    {
      title: 'Đan mạch ca dé',
      url: 'https://tadiha.com/abc-bakery-mot-trong-10-thuong-hieu-banh-kem-noi-tieng-tai-tp-hcm-d28960.htm',
      image: {
        large: './bread/bread6.jpg',
        small: './bread/bread6.jpg',
      },
    },
    {
      title: 'Baguette ngũ hạt dài',
      url: 'https://tadiha.com/abc-bakery-mot-trong-10-thuong-hieu-banh-kem-noi-tieng-tai-tp-hcm-d28960.htm',
      image: {
        large: './bread/bread7.jpg',
        small: './bread/bread7.jpg',
      },
    },
  ];

  switchTo(mode: string) {
    this.layout = mode;
  }
}
