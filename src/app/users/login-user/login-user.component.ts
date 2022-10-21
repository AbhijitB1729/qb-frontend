import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/Services/users.service';
import { Login } from 'src/app/Models/user.model';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { NgToastModule, NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

 
  loginUserRequest: Login  = {

    email : '',
    password:'',

  };

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private usersService:UsersService, private router:Router, private auth:AuthService, private toast:NgToastService ) { }

  ngOnInit(): void {
  }

 loginUser(){
 
  this.auth
 .loginUser(this.loginUserRequest).subscribe((res:any) => {     
     console.log(res);
     localStorage.setItem('firstName',res.firstName);
     localStorage.setItem('lastName',res.lastName);
     localStorage.setItem('jwtToken',res.jwtToken);
     localStorage.setItem('role',res.role);
     localStorage.setItem('email',res.email)

      this.toast.success({detail:'Success',summary:'User LoggedIn Succesfully',position:'tr',duration:2000});
    
     this.router.navigate(['/navs']);
  },

this.toast.error({detail:'Incorrect credentials',summary:'Login Failed',position:'tr',duration:2000})

);


 }

}