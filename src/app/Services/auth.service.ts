import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }
  
  loginUser(loginUserRequest: Login): any{
    return this.http.post(this.baseApiUrl + '/api/Details/LoginUsers' , loginUserRequest);      
   }

   IsLoggedIn(){
    
    return localStorage.getItem('jwtToken');
   }

}
