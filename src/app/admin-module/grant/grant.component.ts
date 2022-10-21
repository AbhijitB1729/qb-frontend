import { Component, OnInit } from '@angular/core';
import { Grant } from 'src/app/Models/grant.model';
import { GrantService } from 'src/app/Services/grant.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {Router, RouterLink} from '@angular/router'
import { SharedModule } from 'src/app/shared/shared.module';
import {DatePipe} from '@angular/common'; 
import { ThisReceiver } from '@angular/compiler';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-grant',
  templateUrl: './grant.component.html',
  styleUrls: ['./grant.component.css']
})
export class GrantComponent implements OnInit {
  
  grants: Grant[] = [
    
  
];
  
  role:string|null|undefined;
  isDisabled:boolean;

  
  constructor(private grantService :GrantService,private router:Router, private toast: NgToastService) { 
   
    this.role=localStorage.getItem('role');
    console.log(this.role);
    if(this.role== 'admin'){
      this.isDisabled=false;
    }else{
      this.isDisabled=true;
    }
  }

   
  ngOnInit(): void {

   

    this.grantService.getAllDetail().subscribe((res:any) => {     
      console.log(res);
      this.grants = res;
      
      
      
    
    
  })};

 
  delete(id:string){
    this.grantService.deleteGrant(id).subscribe({
      next : (response:any) => {
        this.router.navigate(['grant-view']);
        this.toast.error({ detail:'Grant deleted', duration:2000})
        this.ngOnInit();

      }
    })
  }
  

   
    
   
}
