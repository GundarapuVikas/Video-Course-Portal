import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';
import { UserServiceService } from 'src/app/core/services/user-service.service';
import { UserType, courseType } from 'src/app/core/models/userType';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class NewCourseFormComponent implements OnInit{
  public userName!:string;
  public editFlag:boolean=false;
  public numberValue:number=0;
  public data:courseType={
      course_id:"",
      course_title:"",
      course_description:"",
      course_duration:0,
      course_date:"",
      course_authors:"",
  };
  constructor(private router:Router,private route:ActivatedRoute,private _userService:UserServiceService,private cdr:ChangeDetectorRef) {
  }
  ngOnInit(): void {
    this.userName=this.router.url.split('/')[1]
    let routeData=this.route.snapshot.params;
    if(Object.keys(routeData).length!==0){
      Object.assign(this.data,routeData);
      console.log(this.data)
      this.newCourseForm.setValue(this.data);
      this.editFlag=true;
    }
  }

  newCourseForm=new FormGroup({
    course_id:new FormControl(),
    course_title:new FormControl(),
    course_description:new FormControl(),
    course_duration:new FormControl(),
    course_date:new FormControl(),
    course_authors:new FormControl(),
  })

  getRand(){ return new Date().getTime().toString() + Math.floor(Math.random()*100); }

  addCourseToUser(){
    const active_user=this._userService.getUsers().find(user=>user.email.match(this.userName))
    if(!this.editFlag){
      let newCourse={
        ...this.newCourseForm.value,
        course_id:this.getRand()
      }
      console.log(newCourse)
      active_user?.courses.push(newCourse);
      alert("course added! goto courses to view!");
    }
    else{
      const userCourse=active_user?.courses.find((course:courseType)=>course.course_id===this.data.course_id);
      Object.assign(userCourse,this.newCourseForm.value);
      this.cancelCourse();
    }
  }

  cancelCourse(){
    this.newCourseForm.reset();
    this.router.navigate(['../courses'],{relativeTo:this.route});
  }


  renderNewCourse(){
    console.log("new-course re-render")
  }
}
