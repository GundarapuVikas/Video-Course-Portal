import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RoutesRecognized } from '@angular/router';
import { UserType, courseType } from 'src/app/core/models/userType';
import { UserServiceService } from 'src/app/core/services/users/user-service.service';

@Component({
  selector: 'app-display-courses',
  templateUrl: './display-courses.component.html',
  styleUrls: ['./display-courses.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DisplayCoursesComponent implements OnInit {
  public user!:string;
  public courses:courseType[]=[];
  public loadFlag:boolean=true;
  public getCourses():void{
    this.courses=this._userService.courses;
  }
  constructor(private router:Router,private route:ActivatedRoute,private _userService:UserServiceService,private cdr:ChangeDetectorRef) {}
  ngOnInit(): void {
    this.user=this._userService.sessionUser;
    this.getCourses();
  }


  addCourse(){
    this.router.navigate(['../new-course'],{relativeTo:this.route});
  }

  editCourse=(course:courseType):void=>{
    // this.router.navigate(['../new-course',course],{relativeTo:this.route});
    this.router.navigate([`../new-course/${course.course_id}`],{relativeTo:this.route});
  }
  deleteCourse=(course:courseType):void=>{
    this._userService.deleteCourseById(course.course_id);
    this.getCourses();
    
  }

  load(){
    this._userService.loadCourses();
    this.courses=[
      ...this._userService.courses
    ]
    console.log("need to load")
  }

  renderDisplayPage(){
    console.log("display courses re-render")
  }
}

