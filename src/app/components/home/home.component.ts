import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from '@src/app/core/spotify.service';
import { LOCAL_STORAGE_KEY } from '@src/app/shared/enums/local-storage-key.enum';
import { SearchItemSpotify, ArtistSpotify, Spotify, TokenSpotify } from '@src/app/shared/interface/spotify.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public songs:SearchItemSpotify[];
  private token:TokenSpotify;
  private URL_ARTIST:string = '/artist/'

  public constructor(private spotifyService:SpotifyService,private router:Router){}

  ngOnInit() {
    this.getLocalStorageTokenSpotify();
    this.getNewReleases();    
  }  

  public onSongSelected(song:SearchItemSpotify){
    this.router.navigate( [`${this.URL_ARTIST}${song.id}`] );
  }

  public onArtistSelected(artist:ArtistSpotify){
    this.router.navigate( [`${this.URL_ARTIST}${artist.id}`] );
  }

  private getNewReleases(){
    this.spotifyService.getNewReleases(this.token).subscribe( (response:Spotify) =>{
      this.songs=response.albums.items;
    })
  }

  private getLocalStorageTokenSpotify(){
    const LocalStorageTokenSpotify = window.localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN_SPOTIFY);
    if(LocalStorageTokenSpotify){
      this.token= JSON.parse(LocalStorageTokenSpotify);
    }
  }
}
