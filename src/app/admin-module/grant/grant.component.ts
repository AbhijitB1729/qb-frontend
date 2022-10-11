import { Component, OnInit } from '@angular/core';
import { Grant } from 'src/app/Models/grant.model';
import { GrantService } from 'src/app/Services/grant.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {Router, RouterLink} from '@angular/router'
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-grant',
  templateUrl: './grant.component.html',
  styleUrls: ['./grant.component.css']
})
export class GrantComponent implements OnInit {
  
  grants: Grant[] = [
   
];
    
  
  constructor(private grantService :GrantService,private router:Router) { }

  ngOnInit(): void {
    this.grantService.getAllDetail().subscribe((res:any) => {     
      console.log(res);
      this.grants = res;
      
      
      
    
    
  })};

 
  delete(id:string){
    this.grantService.deleteGrant(id).subscribe({
      next : (response:any) => {
        this.router.navigate(['grant']);
        alert("Grant Deleted");
        this.ngOnInit();

      }
    })
  }
  

   
    
   
}
