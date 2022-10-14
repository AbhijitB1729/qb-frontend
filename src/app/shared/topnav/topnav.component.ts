import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedModule } from '../shared.module';
import { FooterComponent } from '../footer/footer.component';
import { UsersService } from 'src/app/Services/users.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})

export class TopnavComponent implements OnInit {

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  currentUser: string | null | undefined;
  role:string|null|undefined;
  
  


  constructor(private usersService: UsersService, private router: Router,private http: HttpClient) { }
 
  ngOnInit(): void {
    this.currentUser=localStorage.getItem('currentUser');
    this.role=localStorage.getItem('role')
  }

  SideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

  LogOut(){
    // this.toast.success({detail:'Success', summary:'User Logged Out Successfully', duration: 3000});
    this.router.navigate(['']);
    localStorage.removeItem('currentUser');
   
  }



}
