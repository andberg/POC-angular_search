import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Movie } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public newMovieAdded = new Subject<any>();
  constructor() { }

  addNewMovie(movie: Movie) {
    this.newMovieAdded.next(movie);
  }

  getNewMovies(): Observable<any> {
    return this.newMovieAdded.asObservable();
  }

}
