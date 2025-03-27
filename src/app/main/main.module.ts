import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { SpotifyService } from '../core/spotify.service';
import { CardSpotifyComponent } from '../components/card-spotify/card-spotify.component';
import { ArtistComponent } from '../components/artist/artist.component';
import { ArtistHeaderComponent } from '../components/artist/components/artist-header/artist-header.component';
import { ArtistTrackCardComponent } from '../components/artist/components/artist-track-card/artist-track-card.component';
import { SearchSpotifyComponent } from '../components/search-spotify/search-spotify.component';
import { AlbumComponent } from '../components/album/album.component';
import { AlbumTrackCardComponent } from '../components/album/components/album-track-card/album-track-card.component';
@NgModule({
  declarations: [
    // BASE COMPONENTS
    MainComponent,
    
    // EXTRA COMPONENTS
    HomeComponent,
    CardSpotifyComponent,  
    ArtistComponent,    
    ArtistHeaderComponent,
    ArtistTrackCardComponent,    
    SearchSpotifyComponent,
    AlbumComponent,    
    AlbumTrackCardComponent, 
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
