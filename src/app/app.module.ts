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
import { GrantComponent } from './admin-module/grant/grant.component';
import { AddGrantComponent } from './admin-module/add-grant/add-grant.component';
import { EditGrantComponent } from './admin-module/edit-grant/edit-grant.component';


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    LoginUserComponent,
    SidenavComponent,
    GrantComponent,
    AddGrantComponent,
    EditGrantComponent,
    
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
    
    
    
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
