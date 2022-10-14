import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';


@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css']
})
export class NavsComponent implements OnInit {


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
  open(){
    
  }

  // ngAfterViewInit(){
  //   this.observer.observe(['{max-width:800px}']).subscribe((res)=> {
  //     if(res.matches){
  //       this.sidenav.mode='over';
  //       this.sidenav.close();
  //     }
  //     else{
  //       this.sidenav.mode='side';
  //       this.sidenav.open();
  //     }
  //   })
 // }
}
