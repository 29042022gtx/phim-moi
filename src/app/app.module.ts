import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { LikeDislikeComponent } from './like-dislike/like-dislike.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
    LikeDislikeComponent,
    RatingComponent,
  ],
  exports: [
    FormsModule,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
    LikeDislikeComponent,
    RatingComponent,
  ],
})
export class AppModule {}
