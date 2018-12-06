import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  newValue: string;

  arrayNames = [
    'ana', 'joao', 'maria', 'guilherme'
  ];

  constructor() { }

  ngOnInit() {
  }

  newItem(item) {
    if (item) {
      this.arrayNames.push(item.productName);
    }
  }

}
