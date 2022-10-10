import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Grant } from '../Models/grant.model';

@Injectable({
  providedIn: 'root'
})
export class GrantService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http:HttpClient) { }

getAllDetail(): any {
   return this.http.get<Grant[]>(this.baseApiUrl + '/api/Grant');
}

addGrant(addGrantRequest:Grant): Observable<Grant> {
  addGrantRequest.id='00000000-0000-0000-0000-000000000000';
  return this.http.post<Grant>(this.baseApiUrl + '/api/Grant', addGrantRequest);
}

deleteGrant(id:string): any{
  return this.http.delete(this.baseApiUrl + '/api/Grant/' + id);
}

getGrant(id:string) : any{
   return this.http.get<Grant[]>(this.baseApiUrl+'/api/Grant/' + id)
}

updateGrant(id:string , updateGrantRequest: Grant ): any{
   return this.http.put<Grant>(this.baseApiUrl + '/api/Grant/' + id , updateGrantRequest);
}
}

