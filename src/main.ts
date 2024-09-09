import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import swiper from './ts/swiper';
import select from './ts/select';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

select.run();
swiper.run();
