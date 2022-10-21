import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver} from '@angular/cdk/layout';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css']
})
export class NavsComponent implements OnInit {


  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;
 
  constructor(private observer :BreakpointObserver, private toast: NgToastService) { }

  firstName :string|null|undefined;
  role:string|null|undefined;
  
  
  ngOnInit(): void {
    this.firstName=localStorage.getItem('firstName');
    this.role=localStorage.getItem('role')
    
  }
  logout(){
    localStorage.removeItem('jwtToken')
    this.toast.success({detail:'Success', summary:'Logout successfull', duration:2500})
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
