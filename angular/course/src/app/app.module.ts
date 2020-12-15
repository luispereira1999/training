import { PersonModule } from './person/person.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoursesModule } from './courses/courses.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputPropertyComponent } from './input-property/input-property.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DataBindingComponent,
    InputPropertyComponent
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PersonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
