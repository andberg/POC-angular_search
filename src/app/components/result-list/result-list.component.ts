import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../../models/models';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  public movieList: Array<Movie> = [];
  public subscription: Subscription;

  constructor(private messageService: MessageService) {

    this.subscription = this.messageService.getNewMovies().subscribe((movie) => {
      if (!this.isDuplicate(movie)) {
        this.movieList.push(movie);
        sessionStorage.setItem('movieList', JSON.stringify(this.movieList));
      }
    });
  }

  ngOnInit() {
    const list = sessionStorage.getItem('movieList');
    const parsedList = JSON.parse(list);
    if (parsedList && parsedList.length > 0) {
      this.movieList = parsedList;
    }
  }

  isDuplicate(newMovie){
    let isDuplicate = false;
    this.movieList.forEach((movie)=>{
      if (movie.name.indexOf(newMovie.name) !== -1){
        isDuplicate = true;
      }
    });
    return isDuplicate;
  }
}
