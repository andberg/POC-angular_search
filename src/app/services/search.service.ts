import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public KEY = 'b55daa5e';
  public url = 'http://www.omdbapi.com/?apikey=' + this.KEY + '&s=';

  constructor(public http: HttpClient,) { }

  searchMovies(name: String): any {
    return this.http.get(this.url + name);
  }

}
