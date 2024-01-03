import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from '../components/home/home.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    NavbarComponent,
    ToolbarComponent
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    SharedModule,
  ],
  exports:[
    MainComponent
  ],
})

export class MainModule { }
