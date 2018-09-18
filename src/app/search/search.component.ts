import { Component, OnInit } from '@angular/core';
import { SearchItem } from './search-item/search-item';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchItems: Array<SearchItem> = [];

  constructor() { }

  ngOnInit() {
  }

  onAddSearchItem() {
    let item = new SearchItem("", "");
    this.searchItems.push(item);
  }

  onFindNext() { }
  onReplace() { }
  onReplaceAll() { }
}
