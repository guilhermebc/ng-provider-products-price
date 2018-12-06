import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output('inputSearch') inputSearch: EventEmitter<any> = new EventEmitter();

  controlSearch = new FormControl();

  constructor() { }

  ngOnInit() {
    this.controlSearch.valueChanges.subscribe(value => {
      this.inputSearch.emit(value);
    });
  }

}
