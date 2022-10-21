import { Component, OnInit,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-edit-grant-view',
  templateUrl: './edit-grant-view.component.html',
  styleUrls: ['./edit-grant-view.component.css']
})
export class EditGrantViewComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;
 
  constructor(private observer :BreakpointObserver) { }

  firstName :string|null|undefined;
  role:string|null|undefined;
  
  
  ngOnInit(): void {
    this.firstName=localStorage.getItem('firstName');
    this.role=localStorage.getItem('role')
    console.log(this.role)
  }

}
