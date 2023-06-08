import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { UserServiceService } from '../../services/users/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit{
  public user!:string;
  constructor(private router:Router,private cdr:ChangeDetectorRef,private _userService:UserServiceService) {
    
  }
  ngOnInit(): void {
    this.setUser();
  }

  setUser(){
    this.router.events.subscribe((data)=>{
      if(data instanceof RoutesRecognized){
        let tempUser=this.user;
        this.user=data.state.root.firstChild?.params['userName'];
        this._userService.sessionUser=this.user;
        if(tempUser!==this.user) this.cdr.detectChanges();
      }
    })
  }

  logout(){
    this.router.navigate(['login']);
  }

  renderHeader(){
    console.log("header re-render");
  }

}
