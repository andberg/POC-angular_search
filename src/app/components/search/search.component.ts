import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Movie } from '../../models/models';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public resultList: Array<any>
  @ViewChild('searchInput') searchInput: ElementRef;
  constructor(public searchService: SearchService, public messageService: MessageService) { }

  ngOnInit() {
  }

  onKeyUp(event) {
    if (event.srcElement.value.length < 2) {
      return;
    }
    this.searchService.searchMovies(event.srcElement.value).subscribe(res => {
      this.handleResponse(res);
    });
  }

  handleResponse(resObj) {
    if (resObj.Response.indexOf('True') !== -1) {
      const movies = resObj.Search.map((imdbMovie) => {
        return new Movie(new Date(), imdbMovie.Title);
      })
      this.resultList = movies;
    } else {
      this.resultList = [];
    }
  }

  resetList() {
    this.searchInput.nativeElement.value = '';
    this.resultList = [];
  }

  addToMyMovies(nameOfMovie) {
    const movie = new Movie(new Date(), nameOfMovie);
    this.resetList();
    this.messageService.addNewMovie(movie);
  }
}
