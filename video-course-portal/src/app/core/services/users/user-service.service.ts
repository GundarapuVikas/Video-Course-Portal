import { Injectable, OnInit } from '@angular/core';
import { userMockData } from '../../data/userMockData';
import { UserType, courseType } from '../../models/userType';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public sessionUser:string="";
  public totalCourses:courseType[]=[]
  public courses!:courseType[];
  public id:number=3;
  public currId:number=3;

  constructor() { 
    this.totalCourses=this.setCourses();
    this.courses=this.setInitialCourses();
  }

  getUsers(){
    return userMockData;
  }

  setCourses(){
    return this.getUsers().find((user)=>user.email.match(this.sessionUser))?.courses || [];
  }

  setInitialCourses(){
    return [...this.totalCourses.slice(0,this.id)];
  }

  loadCourses(){
    this.courses=[
      ...this.courses,
      ...this.totalCourses.slice(this.currId,this.currId+this.id)
    ]
    this.currId+=3;
    console.log(this.courses)
  }

  getCourseById(id:string){
    return this.courses.find(course=>course.course_id===id);
  }

  deleteCourseById(id:string){
    this.courses=[...(this.courses.filter(course=>course.course_id!==id))]
  }
}
