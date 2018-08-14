import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Movie } from '../../models/models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public resultList: Array<any>
  constructor(public searchService: SearchService) { }

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
}
