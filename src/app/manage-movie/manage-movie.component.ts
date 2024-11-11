import { Component } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { Movie } from '../../ts/entities/Movie';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ManageService } from '../service/manage.service';

@Component({
  selector: 'app-manage-movie',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './manage-movie.component.html',
  styleUrl: './manage-movie.component.css',
})
export class ManageMovieComponent {
  movieForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    certificate: new FormControl('', [Validators.required]),
    duration: new FormControl(0, [Validators.required, Validators.min(1)]),
    imgURL: new FormControl('', [Validators.required]),
    trailerURL: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    nation: new FormControl('', [Validators.required]),
    producer: new FormControl('', [Validators.required]),
    director: new FormControl('', [Validators.required]),
    cast: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  submitted: boolean = false;
  request: string = 'add';
  movieList: Movie[] = [];
  updatingMovieID = '';

  constructor(
    private movieService: MovieService,
    private manageService: ManageService
  ) {}

  ngOnInit() {
    this.movieList = this.movieService.getMovieList();
  }

  add() {
    this.submitted = true;
    if (this.movieForm.invalid) {
      return;
    }
    let name = String(this.movieForm.value.name);
    let certificate = String(this.movieForm.value.certificate);
    let duration = Number(this.movieForm.value.duration);
    let imgURL = this.movieForm.value.imgURL;
    let trailerURL = this.movieForm.value.trailerURL;
    imgURL = '/assets/img/movies/default.jpg';
    trailerURL = '/assets/img/MyHien/trailer1.mp4';
    let date = String(this.movieForm.value.date);
    let nation = String(this.movieForm.value.nation);
    const producerList = String(this.movieForm.value.producer).split('; ');
    const directorList = String(this.movieForm.value.director).split('; ');
    let castList = String(this.movieForm.value.cast).split('; ');
    let categoryList = String(this.movieForm.value.category).split('; ');
    let description = String(this.movieForm.value.description);
    this.manageService.addMovie(
      name,
      certificate,
      duration,
      imgURL,
      trailerURL,
      date,
      nation,
      producerList,
      directorList,
      castList,
      categoryList,
      description
    );
    this.submitted = false;
    this.movieForm.reset();
    this.movieForm.controls.certificate.setValue('');
    confirm('Thêm thành công');
  }

  update() {
    this.submitted = true;
    if (this.movieForm.invalid || this.updatingMovieID.length == 0) {
      return;
    }
    if (this.movieForm.pristine) {
      alert('Chưa có thay đổi');
      return;
    }
    let name = String(this.movieForm.value.name);
    let certificate = String(this.movieForm.value.certificate);
    let duration = Number(this.movieForm.value.duration);
    let imgURL = String(this.movieForm.value.imgURL);
    let trailerURL = String(this.movieForm.value.trailerURL);
    let date = String(this.movieForm.value.date);
    let nation = String(this.movieForm.value.nation);
    const producerList = String(this.movieForm.value.producer).split('; ');
    const directorList = String(this.movieForm.value.director).split('; ');
    let castList = String(this.movieForm.value.cast).split('; ');
    let categoryList = String(this.movieForm.value.category).split('; ');
    let description = String(this.movieForm.value.description);
    this.manageService.updateMovie(
      this.updatingMovieID,
      name,
      certificate,
      duration,
      imgURL,
      trailerURL,
      date,
      nation,
      producerList,
      directorList,
      castList,
      categoryList,
      description
    );
    this.submitted = false;
    this.movieForm.reset();
    this.movieForm.controls.certificate.setValue('');
    confirm('Sửa thành công');
  }

  remove(ID: string) {
    let comfirmed = confirm('Xác nhận xóa');
    if (!comfirmed) {
      return;
    }
    this.manageService.deleteMovie(ID);
  }

  isAdd() {
    return this.request == 'add';
  }

  isUpdate() {
    return this.request == 'update';
  }

  openUpdate(ID: string) {
    this.submitted = true;
    this.request = 'update';
    this.updatingMovieID = ID;
    const movie = this.movieService.getMovieByID(ID);
    if (movie == null) {
      return;
    }
    this.movieForm.controls.name.setValue(movie.name);
    this.movieForm.controls.certificate.setValue(movie.certificate);
    this.movieForm.controls.duration.setValue(movie.duration);
    this.movieForm.controls.imgURL.removeValidators([Validators.required]);
    this.movieForm.controls.trailerURL.removeValidators([Validators.required]);
    this.movieForm.controls.imgURL.setValue('');
    this.movieForm.controls.trailerURL.setValue('');
    this.movieForm.controls.date.setValue(movie.date);
    this.movieForm.controls.nation.setValue(movie.nation);
    this.movieForm.controls.producer.setValue(movie.producerList.join('; '));
    this.movieForm.controls.director.setValue(movie.directorList.join('; '));
    this.movieForm.controls.cast.setValue(movie.castList.join('; '));
    this.movieForm.controls.category.setValue(movie.categoryList.join('; '));
    this.movieForm.controls.description.setValue(movie.description);
  }

  openAdd() {
    this.request = 'add';
    this.submitted = false;
    this.movieForm.controls.imgURL.addValidators(Validators.required);
    this.movieForm.controls.trailerURL.addValidators(Validators.required);
    this.movieForm.reset();
    this.movieForm.controls.certificate.setValue('');
  }

  getInputFileWrapperClass(formControl: FormControl) {
    if (formControl.pristine && !this.submitted && formControl.untouched) {
      return 'form-wrapper-default';
    }
    if (formControl.valid) {
      return 'form-wrapper-valid';
    }
    return 'form-wrapper-invalid';
  }

  getInputWrapperClass(formControl: FormControl) {
    if (formControl.pristine && !this.submitted) {
      return 'form-wrapper-default';
    }
    if (formControl.valid) {
      return 'form-wrapper-valid';
    }
    return 'form-wrapper-invalid';
  }
}
