import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  public list = [
    {
      name: "ett"
    },
    {
      name: "två"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
