import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserType, courseType } from 'src/app/core/models/userType';
import { UserServiceService } from 'src/app/core/services/user-service.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit{
  @Input() public course!:courseType;
  @Input() public editCourse!:(course:courseType)=>void;
  @Input() public deleteCourse!:(course:courseType)=>void;
  public user!:string; 
  public active_user!:any;
  constructor(private router:Router,private cdr:ChangeDetectorRef) {
    
  }
  ngOnInit(): void {
    this.user=this.router.url.split('/')[1];
  }

  renderCourseItem(){
    console.log('course item rerender');
  }
}
