import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  input = new FormControl();

  newValue: string;

  arrayNames = [
    'ana', 'joao', 'maria', 'guilherme'
  ];

  constructor() { }

  ngOnInit() {
    this.input.valueChanges.subscribe(value => {
      this.newValue = value;
    });
  }

  addItem() {
    this.arrayNames.push(this.newValue);
  }

}
