import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { LoginUserComponent } from './users/login-user/login-user.component';
import { TopnavComponent } from './shared/topnav/topnav.component';
import { AuthGuard } from './auth.guard';
import { CanActivate } from '@angular/router';
import { GrantComponent } from './admin-module/grant/grant.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AddGrantComponent } from './admin-module/add-grant/add-grant.component';
import { EditGrantComponent } from './admin-module/edit-grant/edit-grant.component';
import { ApplicationComponent } from './applicant/application/application.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:"login",
    pathMatch:'full'
  },
  {
    path: 'add',
    component: AddUserComponent
  },
  {
    path: 'login',
    component: LoginUserComponent
  },
  {
    path: 'home',
    component: TopnavComponent,
    canActivate:[AuthGuard] 

  },
  {
    path:'sidenav',
    component:SidenavComponent,
  },
  {
    path:'grant',
    component:GrantComponent,
  },
  {
    path:'add-grant',
    component:AddGrantComponent,
  },
  {
    path:'edit-grant/:id',
    component:EditGrantComponent
  },
  {
    path:'application',
    component:ApplicationComponent
  }
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
