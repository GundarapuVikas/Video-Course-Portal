import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RoutesRecognized } from '@angular/router';
import { UserType, courseType } from 'src/app/core/models/userType';
import { UserServiceService } from 'src/app/core/services/user-service.service';

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
  public active_user:any;
  public getCourses():void{
    this.courses=(this.active_user?.courses.slice(0,4) || []);
  }
  constructor(private router:Router,private route:ActivatedRoute,private _userService:UserServiceService,private cdr:ChangeDetectorRef) {}
  ngOnInit(): void {
    this.user=this.router.url.split('/')[1];
    this.active_user=this._userService.getUsers().find(user=>user.email.match(this.user))
    this.getCourses();
  }


  addCourse(){
    this.router.navigate(['../new-course'],{relativeTo:this.route});
  }

  editCourse=(course:courseType):void=>{
    this.router.navigate(['../new-course',course],{relativeTo:this.route});
  }
  deleteCourse=(course:courseType):void=>{
    let idx:number=this.active_user?.courses.findIndex((c:courseType)=>c.course_id===course.course_id);
    this.active_user?.courses.splice(idx,1);
    this.getCourses();
  }

  load(){
    this.courses=this.active_user.courses;
    console.log(this.active_user)
    this.loadFlag=false;
  }

  renderDisplayPage(){
    console.log("display courses re-render")
  }
}

