import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.less']
})

export class DataBindingComponent {

  url: string = "https://angular.io/";
  imageUrl: string = "https://images.unsplash.com/photo-1607579771747-1aa92c36515c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80";
  title: string = "Hello World"
  writtenText: string = "";
  savedText: string = "";
  dataCourse: string = "Angular";
  initialValue: number = 1;

  getValue() {
    return 15;
  }

  buttonClicked() {
    alert("Botão clicado!");
  }

  onKeyUp(event: KeyboardEvent) {
    this.writtenText = (<HTMLInputElement>event.target).value;
  }

  saveText(text: string) {
    this.savedText = text;
  }

  onChangeValue(event) {
    console.log(event);
  }

  constructor() { }

}
