import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.less']
})

export class PersonComponent {
  name: string = "Não definido";
  person: any = {
    name: "Luís",
    age: 21
  }

  constructor() { }
}
