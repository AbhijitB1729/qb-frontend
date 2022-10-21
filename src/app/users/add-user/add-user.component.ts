import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MustMatch } from 'src/app/providers/confirm-password-validator'
import { UsersService } from 'src/app/Services/users.service'
import { User } from 'src/app/Models/user.model';
import { NgToastService } from 'ng-angular-popup';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  title = 'Register';
  registerForm!: FormGroup;
    submitted = false;
 
    constructor(private formBuilder: FormBuilder , private usersService:UsersService, private toast: NgToastService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  };
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

     // let registerData = this.registerForm.value;
       var registerRequest: User ={

          email: this.registerForm.get("email")?.value,
          firstName:this.registerForm.get("firstName")?.value,
          lastName:this.registerForm.get("lastName")?.value,
          password:this.registerForm.get("password")?.value,
          role:"user",
          
       }
     
     
       if (this.registerForm.invalid) {
        return;
      }

      console.log("working");
      this.usersService.onSubmit(registerRequest).subscribe((res:any)=>{
          console.log(res)
          this.toast.success({detail:'Success', summary:'New User Added', sticky:true})
      }
      );


      
     
      

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}
