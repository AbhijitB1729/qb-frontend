import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedModule } from '../shared.module';
import { FooterComponent } from '../footer/footer.component';
import { UsersService } from 'src/app/Services/users.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';



@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})

export class TopnavComponent implements OnInit {

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  firstName: string | null | undefined;
  role:string|null|undefined;
  
  


  constructor(private usersService: UsersService, private router: Router,private http: HttpClient, private toast:NgToastService) { }
 
  ngOnInit(): void {
    this.firstName=localStorage.getItem('firstName');
    this.role=localStorage.getItem('role')
  }

  // SideNavToggle() {
  //   this.menuStatus = !this.menuStatus;
  //   this.sideNavToggled.emit(this.menuStatus);
  // }

  logout(){
    localStorage.removeItem('jwtToken')
    this.toast.success({detail:'Success', summary:'Logout successfull', duration:2500})
  }



}
