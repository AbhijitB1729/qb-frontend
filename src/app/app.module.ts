import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { LoginUserComponent } from './users/login-user/login-user.component';
import { AuthService } from './Services/auth.service';
import { AuthGuard } from './auth.guard';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import {MatButtonModule} from '@angular/material/button'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatDividerModule } from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu'

import { GrantComponent } from './admin-module/grant/grant.component';
import { AddGrantComponent } from './admin-module/add-grant/add-grant.component';
import { EditGrantComponent } from './admin-module/edit-grant/edit-grant.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import {DatePipe} from '@angular/common';
import { NavsComponent } from './navs/navs.component';
import { GrantViewComponent } from './grant-view/grant-view.component';
import { AddGrantViewComponent } from './add-grant-view/add-grant-view.component';
import { EditGrantViewComponent } from './edit-grant-view/edit-grant-view.component';
import { MainComponent } from './main/main.component';
import { NgToastModule } from  'ng-angular-popup';
import { ApplicantModule } from './applicant/applicant.module';


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    LoginUserComponent,
    SidenavComponent,
    GrantComponent,
    AddGrantComponent,
    EditGrantComponent,
    HomeComponent,
    NavsComponent,
    GrantViewComponent,
    AddGrantViewComponent,
    EditGrantViewComponent,
    MainComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatMenuModule,
    SharedModule,
    NgToastModule,
    ApplicantModule
    
    
    
    
  ],
  providers: [AuthService,AuthGuard,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
