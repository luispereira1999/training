import { PersonComponent } from './person.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PersonComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PersonComponent]
})
export class PersonModule { }
