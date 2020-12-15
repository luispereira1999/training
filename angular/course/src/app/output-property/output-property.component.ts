import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.less']
})

export class OutputPropertyComponent implements OnInit {
  @Input() num: number = 0;
  @Output() changeValue = new EventEmitter();

  decrement() {
    this.num -= 1;
    this.changeValue.emit({ newValue: this.num });
  }

  increment() {
    this.num += 1;
    this.changeValue.emit({ newValue: this.num });
  }

  constructor() { }

  ngOnInit(): void {
  }
}
