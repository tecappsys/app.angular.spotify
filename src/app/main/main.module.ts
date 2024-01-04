import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from '../components/home/home.component';
import { SpotifyService } from '../core/spotify.service';
import { CardSpotifyComponent } from '../components/card-spotify/card-spotify.component';
import { NoimagePipe } from '../pipes/noimage.pipe';
import { DomseguroPipe } from '../pipes/domseguro.pipe';

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    ToolbarComponent,    
    HomeComponent,
    CardSpotifyComponent,    
    NoimagePipe,
    DomseguroPipe,
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    SharedModule,
  ],
  exports:[
    MainComponent
  ],
  providers:[
    SpotifyService
  ],
})

export class MainModule { }