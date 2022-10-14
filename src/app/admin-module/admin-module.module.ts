import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrantComponent } from './grant/grant.component';
import { BrowserModule } from '@angular/platform-browser'
import { SharedModule } from '../shared/shared.module';
import { TopnavComponent } from '../shared/topnav/topnav.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import {MatButtonModule} from '@angular/material/button'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatDividerModule } from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu'

@NgModule({
  declarations: [
    GrantComponent,
    TopnavComponent
  ],
  imports: [
    NgModule,
    CommonModule,
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatMenuModule,
    
  ]
})
export class AdminModuleModule { }
