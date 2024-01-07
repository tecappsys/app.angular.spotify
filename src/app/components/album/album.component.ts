import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteUrlService } from '@src/app/core/route-url.service';
import { SpinnerService } from '@src/app/core/spinner.service';
import { SpotifyService } from '@src/app/core/spotify.service';
import { LOCAL_STORAGE_KEY } from '@src/app/shared/enums/local-storage-key.enum';
import { AlbumSpotify, AlbumTrackSpotify, ArtistSpotify, TokenSpotify } from '@src/app/shared/interface/spotify.interface';
import { DateUtils } from '@src/app/shared/utils/date';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
  public album:AlbumSpotify;
  public tracks:AlbumTrackSpotify[];
  private token:TokenSpotify;
  private URL_ARTIST:string = '/artist/'

  public displayedColumns:any ={
    name:{
      title:'Name',
      display: (element:AlbumTrackSpotify) =>element.name
    },
    artists:{
      title:'Artists',
      display: (element:AlbumTrackSpotify) =>{
        return element.artists.reduce((acc:string[],items) =>{
          acc.push(` ${items.name} `)
          return acc;
        }, []).concat();
      }
    },
    duration_ms:{
      title:'Duration',
      display: (element:AlbumTrackSpotify) =>DateUtils.formatTime(element.duration_ms)
    },
    preview:{
      title:'Preview',
      iframe:true,
      display: (element:AlbumTrackSpotify) =>element.uri
    }
  }
  
  constructor(
    private router:Router,
    private spotifyService:SpotifyService,
    public activatedRoute:ActivatedRoute,
    private spinnerService:SpinnerService,
    private routeUrlService:RouteUrlService) {
    this.spinnerService.showSpinner()
  }

  ngOnInit() {
    this.getLocalStorageTokenSpotify();
    this.activatedRoute.params.subscribe( params =>{
      const albumId = params['id'];
      this.getAlbum(albumId)
    });
  }

  public getAlbum(albumId:string){
    this.spotifyService.getAlbum(albumId,this.token).subscribe( (response:AlbumSpotify) =>{
      this.album = response;
      this.tracks = response.tracks.items;
      this.spinnerService.hideSpinner();
      this.changeViewTitle(response);
    })
  }

  public onArtistSelected(artist:ArtistSpotify){
    this.router.navigate( [`${this.URL_ARTIST}${artist.id}`] );
  }

  private getLocalStorageTokenSpotify(){
    const LocalStorageTokenSpotify = window.localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN_SPOTIFY);
    if(LocalStorageTokenSpotify){
      this.token= JSON.parse(LocalStorageTokenSpotify);
    }
  }

  private changeViewTitle(artist:AlbumSpotify){
    this.routeUrlService.title = artist.name;
  }
}
