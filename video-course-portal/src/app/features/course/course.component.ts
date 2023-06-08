import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { courseType } from 'src/app/core/models/userType';


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
  constructor(private router:Router,private cdr:ChangeDetectorRef,private modalService: NgbModal) {
    
  }
  ngOnInit(): void {
    this.user=this.router.url.split('/')[1];
  }

  renderCourseItem(){
    console.log('course item rerender');
  }

  open(content:any){
    console.log('open modal clicked')
    this.modalService.open(content, { centered: true, backdropClass: 'modal-backdrop-dark' });
  }

  onDelete(){
    this.deleteCourse(this.course);
    this.modalService.dismissAll();
  }
}
