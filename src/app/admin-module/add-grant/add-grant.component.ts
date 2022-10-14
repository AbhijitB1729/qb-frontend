import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Grant } from '../../Models/grant.model';
import {Router} from '@angular/router'
import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { GrantService } from '../../Services/grant.service';

@Component({
  selector: 'app-add-grant',
  templateUrl: './add-grant.component.html',
  styleUrls: ['./add-grant.component.css']
})
export class AddGrantComponent implements OnInit {
      
  addGrantRequest: Grant = {
     id:'',
    grantName:'',
    programCode:'',
    startDate:new Date(),
    endDate:new Date()

  };

  constructor(private formBuilder:FormBuilder, private router:Router, private grantservice:GrantService) { }

  ngOnInit(): void {
    
  }
  

 addGrant(){
  console.log(this.addGrantRequest);
  
    this.grantservice.addGrant(this.addGrantRequest)
    .subscribe({
      next: (grant:any) => {
        this.router.navigate(['grant-view']);
        
      }})
 } 

}
