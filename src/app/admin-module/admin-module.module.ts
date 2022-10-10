import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrantComponent } from './grant/grant.component';
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
  declarations: [
    GrantComponent
  ],
  imports: [
    NgModule,
    CommonModule,
    BrowserModule
    
  ]
})
export class AdminModuleModule { }
