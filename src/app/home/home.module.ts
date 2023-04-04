import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { TopbarComponent } from './topbar/topbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatMenuModule
  ]
})
export class HomeModule { }
