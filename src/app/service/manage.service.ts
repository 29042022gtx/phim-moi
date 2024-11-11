import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { MovieService } from './movie.service';
import { createUser } from '../../ts/entities/User';
import { createMovie } from '../../ts/entities/Movie';

@Injectable({
  providedIn: 'root',
})
export class ManageService {
  constructor(
    private userService: UserService,
    private movieService: MovieService
  ) {}

  updateMovie(
    ID: string,
    name = '',
    certificate = '',
    duration = 0,
    imgURL = '',
    trailerURL = '',
    date = '',
    nation = '',
    producerList: string[] = [],
    directorList: string[] = [],
    castList: string[] = [],
    categoryList: string[] = [],
    description = ''
  ) {
    const movie = this.movieService.getMovieByID(ID);
    if (movie == null) {
      return;
    }
    movie.name = name;
    movie.certificate = certificate;
    movie.duration = duration;
    // movie.imgURL = imgURL;
    // movie.trailerURL = trailerURL;
    movie.date = date;
    movie.nation = nation;
    movie.producerList = producerList;
    movie.directorList = directorList;
    movie.castList = castList;
    movie.categoryList = categoryList;
    movie.description = description;
  }

  addMovie(
    name = '',
    certificate = '',
    duration = 0,
    imgURL = '',
    trailerURL = '',
    date = '',
    nation = '',
    producerList: string[] = [],
    directorList: string[] = [],
    castList: string[] = [],
    categoryList: string[] = [],
    description = ''
  ) {
    const movie = createMovie(
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
    this.movieService.getMovieList().push(movie);
  }

  deleteMovie(ID: string) {
    let movieIndex = this.movieService.getMovieList().findIndex((movie) => {
      return movie.ID == ID;
    });
    if (movieIndex == -1) {
      return;
    }
    this.movieService.getMovieList().splice(movieIndex, 1);
    this.userService.getUserList().forEach((user) => {
      user.favouriteList = user.favouriteList.filter((item) => {
        return item != ID;
      });
    });
  }

  addUser(name = '', username = '', email = '', phone = '', password = '') {
    this.userService
      .getUserList()
      .push(createUser(name, username, email, phone, password));
  }
}
