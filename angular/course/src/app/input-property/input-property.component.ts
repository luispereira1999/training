import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.less']
})

export class InputPropertyComponent {
  @Input() nameCourse: string;

  constructor() { }
}
