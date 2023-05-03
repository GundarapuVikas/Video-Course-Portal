import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/core/services/users/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit{
  public invalidFlag:Boolean=false;

  constructor(private router:Router,private _userService:UserServiceService,private cdr:ChangeDetectorRef) {}

  ngOnInit(): void {}

  loginForm=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })

  checkUser(){
    const loggedUser=this._userService.getUsers().find(user=>{
      return ((user.email===this.loginForm.value.email) && (user.password===this.loginForm.value.password))
    })
    if(loggedUser){
      if(this.invalidFlag) this.invalidFlag=false
      let userName=this.loginForm.value.email.split('@')[0];
      this.router.navigate([`${userName}`]);
    }
    else{
      this.invalidFlag=true;
    }   
    this.loginForm.reset();
  }

  renderLoginPage(){
    console.log('login-page re-render')
  }
}

