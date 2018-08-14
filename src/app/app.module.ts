import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchComponent } from './components/search/search.component';
import { ResultListComponent } from './components/result-list/result-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SearchComponent,
    ResultListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
