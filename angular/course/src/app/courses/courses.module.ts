import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesComponent
  ],
  providers:[
    CoursesService
  ]
})
export class CoursesModule { }
