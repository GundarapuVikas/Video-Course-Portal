import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit,OnChanges{
  public newCourseFlag:boolean=false;
  constructor(private router:Router,private cdr:ChangeDetectorRef) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('main ng on change');
    
  }
  ngOnInit(): void {
    let tempFlag=this.newCourseFlag;
    if(this.router.url.includes('new-course')){
      this.newCourseFlag=true;
    }
    else{
      this.router.events.subscribe((data)=>{
        if(data instanceof RoutesRecognized){
          if(data.url.includes('new-course')){
            this.newCourseFlag=true;
          }
          else{
           this.newCourseFlag=false;
          }
        }
      })
    }
    if(tempFlag!==this.newCourseFlag) this.cdr.markForCheck();
  }
  

  renderMainPage(){
    console.log("MainPage re-render")
  }
  
}
