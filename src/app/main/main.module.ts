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
import { RouteUrlService } from '../core/route-url.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerService } from '../core/spinner.service';
import { ArtistComponent } from '../components/artist/artist.component';
import { GenericTableComponent } from '../shared/components/generic-table/generic-table.component';
import { ArtistHeaderComponent } from '../components/artist/components/artist-header/artist-header.component';
import { ArtistTrackCardComponent } from '../components/artist/components/artist-track-card/artist-track-card.component';
import { ToolbarSearchComponent } from './components/toolbar/components/toolbar-search/toolbar-search.component';
import { ToolbarTitleComponent } from './components/toolbar/components/toolbar-title/toolbar-title.component';

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    ToolbarComponent,    
    HomeComponent,
    CardSpotifyComponent,  
    SpinnerComponent,  
    ArtistComponent,    
    ArtistHeaderComponent,
    ArtistTrackCardComponent,
    GenericTableComponent,
    ToolbarSearchComponent,
    ToolbarTitleComponent
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
    RouteUrlService,
    SpinnerService,    
    SpotifyService
  ],
})

export class MainModule { }
