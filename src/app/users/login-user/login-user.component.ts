import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/Services/users.service';
import { Login } from 'src/app/Models/user.model';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { ThisReceiver } from '@angular/compiler';
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

  constructor(private usersService:UsersService, private router:Router, private auth:AuthService) { }

  ngOnInit(): void {
  }

 loginUser(){
  console.log("login click")
 this.auth
 .loginUser(this.loginUserRequest).subscribe((res:any) => {     
     console.log(res);
     localStorage.setItem('currentUser',res.name);
     localStorage.setItem('jwtToken',res.jwtToken);
     localStorage.setItem('role',res.role);

     //this.toast.success({detail:'Success',summary:'User LoggedIn Succesfully'})
     alert("login successfull");
     this.router.navigate(['/main']);
  },

);
//var result = JSON.parse("success");

 }



}