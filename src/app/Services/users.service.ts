import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login ,User } from 'src/app/Models/user.model';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }
  
  loginUser(loginUserRequest: Login): any{
    return this.http.post(this.baseApiUrl + '/api/Details/LoginUsers' , loginUserRequest);      
   }

   onSubmit(registerRequest:User):any{
    return this.http.post(this.baseApiUrl+'/api/Details',registerRequest)
  }
}
