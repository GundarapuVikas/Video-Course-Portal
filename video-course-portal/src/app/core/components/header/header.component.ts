import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit{
  public user!:string;
  constructor(private router:Router,private cdr:ChangeDetectorRef) {
    
  }
  ngOnInit(): void {
    //this is used when we try to access componennts that are not in router outlet 
    this.setUser();
  }

  setUser(){
    this.router.events.subscribe((data)=>{
      if(data instanceof RoutesRecognized){
        let tempUser=this.user;
        this.user=data.state.root.firstChild?.params['userName'];
        if(tempUser!==this.user) this.cdr.detectChanges();
      }
    })
  }

  logout(){
    this.router.navigate(['login']);
  }

  demo(){
    console.log("header re-render");
  }
  
  
}
