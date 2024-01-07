import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService } from '@src/app/core/spinner.service';
import { SpotifyService } from '@src/app/core/spotify.service';
import { LOCAL_STORAGE_KEY } from '@src/app/shared/enums/local-storage-key.enum';
import { ImagesSpotify, SearchItemSpotify, Spotify, TokenSpotify } from '@src/app/shared/interface/spotify.interface';

@Component({
  selector: 'app-search-spotify',
  templateUrl: './search-spotify.component.html',
  styleUrls: ['./search-spotify.component.scss']
})
export class SearchSpotifyComponent {
  public artists:SearchItemSpotify[] = [];
  private URL_ARTIST:string = '/artist/';
  private token:TokenSpotify;

  constructor(private spotifyService:SpotifyService, private router:Router, public activatedRoute:ActivatedRoute, private spinnerService:SpinnerService) {
    this.spinnerService.showSpinner()
  }

  ngOnInit() {
    this.getLocalStorageTokenSpotify();
    this.activatedRoute.params.subscribe( params =>{
      const search = params['word'];
      this.getArtists(search)
    });
  }

  public getArtists(search:string){
    this.spotifyService.getSearch(search,this.token).subscribe( (response:Spotify) =>{
      this.artists = response.artists.items;
      this.spinnerService.hideSpinner();
    })
  }

  public artisSelected( artist:SearchItemSpotify ){
    debugger
    this.router.navigate( [`${this.URL_ARTIST}${artist.id}`] );
  }

  public getThumbnail(imageSong:ImagesSpotify[]){
    return imageSong.length > 0 ? imageSong[2].url : 'assets/img/noimage.png';        
  }

  private getLocalStorageTokenSpotify(){
    const LocalStorageTokenSpotify = window.localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN_SPOTIFY);
    if(LocalStorageTokenSpotify){
      this.token= JSON.parse(LocalStorageTokenSpotify);
    }
  }
}
