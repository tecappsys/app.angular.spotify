import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '@src/app/core/spotify.service';
import { LOCAL_STORAGE_KEY } from '@src/app/shared/enums/local-storage-key.enum';
import { AlbumItemSpotify, ReleaseSpotify, TokenSpotify } from '@src/app/shared/interface/spotify.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public songs:AlbumItemSpotify[];
  private token:TokenSpotify;

  public constructor(private spotifyService:SpotifyService){}

  ngOnInit() {
    this.getLocalStorageTokenSpotify();
    this.getNewReleases();    
  }  

  private getNewReleases(){
    this.spotifyService.getNewReleases(this.token).subscribe( (response:ReleaseSpotify) =>{
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
