import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application/application.component';
import { TopnavComponent } from '../shared/topnav/topnav.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ApplicationComponent,
    
    
  ],
  imports: [
    SharedModule,
    CommonModule,
  
    
  ]
})
export class ApplicantModule { }
