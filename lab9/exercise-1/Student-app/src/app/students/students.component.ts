import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  title="My list of students"
  constructor() { }

  ngOnInit() {
  }

  getTitle(){
    return this.title;
  }
  getCurrentDate(){
    return new Date();
  }

}
