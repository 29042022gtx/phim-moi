import { Component, Inject } from '@angular/core';
import { AppModule } from '../app.module';
// import data from '../../ts/data';
import { CommonModule, DOCUMENT } from '@angular/common';
import { NewsService } from '../service/news.service';
import select from '../../ts/select';
import { News } from '../../ts/entities/News';

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [CommonModule, AppModule],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.css',
})
export class NewsPageComponent {
  newsList: News[] = [];
  // Pagination ne
  currentPage: number = 1;
  itemsPerPage: number = 4;

  constructor(
    private newsService: NewsService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.newsList = this.newsService.getNewsList();
    select.run(this.document);
  }

  getTotalPages() {
    return Math.ceil(this.newsList.length / this.itemsPerPage);
  }

  getNewsList() {
    const startIdx = (this.currentPage - 1) * this.itemsPerPage;
    const endIdx = startIdx + this.itemsPerPage;
    return this.newsList.slice(startIdx, endIdx);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.getTotalPages()) {
      this.currentPage = page;
    }
  }
  // Hàm sắp xếp
  onSortChange(event: Event): void {
    const sortBy = (event.target as HTMLSelectElement).value;
    switch (sortBy) {
      case 'newest':
        this.newsList.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
      case 'mostViewed':
        this.newsList.sort((a, b) => b.view - a.view);
        break;
      case 'bestRated':
        // Sắp xếp theo số lượng like (lượt thích) trừ đi dislike (lượt không thích)
        this.newsList.sort(
          (a, b) => b.likes - b.dislikes - (a.likes - a.dislikes)
        );
        break;
      default:
        // Trường hợp không chọn gì (hoặc trở về mặc định)
        this.newsList = this.newsService.getNewsList(); // Gán lại dữ liệu ban đầu nếu không sắp xếp
        break;
    }
  }
}
