import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';
import { UserServiceService } from 'src/app/core/services/users/user-service.service';
import { courseType } from 'src/app/core/models/userType';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class NewCourseFormComponent implements OnInit{
  public user!:string;
  public editFlag:boolean=false;
  public numberValue!:string;
  public id:string="";
  public data:courseType={
      course_id:"",
      course_title:"",
      course_description:"",
      course_duration:"",
      course_date:"",
      course_authors:"",
  };
  constructor(private router:Router,private route:ActivatedRoute,private _userService:UserServiceService,private cdr:ChangeDetectorRef) {
  }
  ngOnInit(): void {
    this.user=this._userService.sessionUser;
    console.log(this.route.params)
    this.id=this.route.snapshot.paramMap?.get('id') || "";
    if(this.id){
      let data=this._userService.getCourseById(this.id)
      console.log("edited data:",data);
      if(data){
        this.newCourseForm.setValue(data);
        this.editFlag=true;
      }
      console.warn("edited data in form ",this.newCourseForm.value)
    }
    this.numberValue=this.newCourseForm.value.course_duration;
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

  addCourseToUser=()=>{
    if(!this.editFlag){
      let newCourse={
        ...this.newCourseForm.value,
        course_id:this.getRand()
      }
      this._userService.addCourse(newCourse);
      alert("course added! goto courses to view!");
    }
    else{
      // let data=this._userService.getCourseById(this.id || "")
      // Object.assign(data,this.newCourseForm.value);
      this._userService.updateCourseById(this.newCourseForm.value)
      this.cancelCourse();
    }
  }

  cancelCourse(){
    this.newCourseForm.reset();
    if(!this.editFlag){
      this.router.navigate(['../courses'],{relativeTo:this.route});
    }
    else{
      this.router.navigate(['../../courses'],{relativeTo:this.route});
    }
  }


  renderNewCourse(){
    console.log("new-course re-render")
  }
}
