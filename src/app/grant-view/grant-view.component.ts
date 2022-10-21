import { Component, OnInit,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-grant-view',
  templateUrl: './grant-view.component.html',
  styleUrls: ['./grant-view.component.css']
})
export class GrantViewComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;
 
  constructor(private observer :BreakpointObserver,private toast: NgToastService ) { }

  
  firstName :string|null|undefined;
  role:string|null|undefined;
  
  
  ngOnInit(): void {
    this.firstName=localStorage.getItem('firstName');
    this.role=localStorage.getItem('role');
    console.log(this.role)

    
  }

  logout(){
    localStorage.removeItem('jwtToken')
    this.toast.success({detail:'Success', summary:'Logout successfull', duration:2500})
  }
}
