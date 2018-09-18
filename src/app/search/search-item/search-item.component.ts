import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from './search-item';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  @Input()
  searchItem: SearchItem;

  constructor() { }

  ngOnInit() {
  }

}
