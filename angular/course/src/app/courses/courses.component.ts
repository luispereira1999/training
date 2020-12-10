import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})

export class CoursesComponent implements OnInit {
  siteName: string;
  courses: string[];

  constructor(private coursesService: CoursesService) {
    this.siteName = "https://angular.io/";
    this.courses = this.coursesService.getCourses();
  }

  ngOnInit(): void {
  }

}
