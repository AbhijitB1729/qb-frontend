import { Component, OnInit,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-grant-view',
  templateUrl: './grant-view.component.html',
  styleUrls: ['./grant-view.component.css']
})
export class GrantViewComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;
 
  constructor(private observer :BreakpointObserver) { }

  currentUser :string|null|undefined;
  role:string|null|undefined;
  
  
  ngOnInit(): void {
    this.currentUser=localStorage.getItem('currentUser');
    this.role=localStorage.getItem('role')
    console.log(this.role)
  }
}
