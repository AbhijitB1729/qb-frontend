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
import { HomeComponent } from './home/home.component';
import { NavsComponent } from './navs/navs.component';
import { GrantViewComponent } from './grant-view/grant-view.component';
import { AddGrantViewComponent } from './add-grant-view/add-grant-view.component';
import { EditGrantViewComponent } from './edit-grant-view/edit-grant-view.component';
import { MainComponent } from './main/main.component';
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
    path: 'topnav',
    component: TopnavComponent,

  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path:'navs',
    component: NavsComponent,
    canActivate:[AuthGuard] 
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthGuard] 
  },
  {
    path:'sidenav',
    component:SidenavComponent,
  },
  {
    path:'main',
    component:MainComponent,
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
  },
  {
    path:'grant-view',
    component:GrantViewComponent
  },
  { 
    path:'add-grant-view',
    component:AddGrantViewComponent
  },
  { 
    path:'edit-grant-view/:id',
    component:EditGrantViewComponent
  },

  

  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
