import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from '@src/app/core/spinner.service';
import { SpotifyService } from '@src/app/core/spotify.service';
import { LOCAL_STORAGE_KEY } from '@src/app/shared/enums/local-storage-key.enum';
import { GenericResponse } from '@src/app/shared/interface/generic-response.interfase';
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
  private URL_ALBUM:string = '/album/'

  public constructor(private spotifyService:SpotifyService,private router:Router,private spinnerService:SpinnerService){    
    this.spinnerService.showSpinner()
  }

  ngOnInit() {
    this.getToken()
  }  

  public onSongSelected(song:string){
    this.router.navigate( [`${this.URL_ALBUM}${song}`] );
  }

  public onArtistSelected(artist:ArtistSpotify){
    this.router.navigate( [`${this.URL_ARTIST}${artist.id}`] );
  }

  private getToken(){
    this.spotifyService.getToken().subscribe( (response:GenericResponse<TokenSpotify>) =>{
      if(response.data){
        this.token = response.data;
        window.localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN_SPOTIFY,JSON.stringify(response.data))      
        this.getNewReleases();   
      }      
      this.spinnerService.hideSpinner() 
    })
  }

  private getNewReleases(){
    this.spinnerService.showSpinner()
    this.spotifyService.getNewReleases(this.token).subscribe( (response:Spotify) =>{
      this.songs=response.albums.items;
      this.spinnerService.hideSpinner() 
    })
  }
}
