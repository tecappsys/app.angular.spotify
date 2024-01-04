import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteUrlService } from '@src/app/core/route-url.service';
import { SpinnerService } from '@src/app/core/spinner.service';
import { SpotifyService } from '@src/app/core/spotify.service';
import { LOCAL_STORAGE_KEY } from '@src/app/shared/enums/local-storage-key.enum';
import { ArtistSpotify, TokenSpotify, TrackSpotify, TracksSpotify } from '@src/app/shared/interface/spotify.interface';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  public artist:ArtistSpotify;
  public tracks:TrackSpotify[];
  private token:TokenSpotify;
  private artistId:string;

  public displayedColumns:any ={
    photo:{
      title:'Photo',
      image:true,
      display: (element:TrackSpotify) =>element.album.images[2].url
    },
    album:{
      title:'Album',
      display: (element:TrackSpotify) =>element.album.name
    },
    song:{
      title:'Song',
      display: (element:TrackSpotify) =>element.name
    },
    preview:{
      title:'Preview',
      iframe:true,
      display: (element:TrackSpotify) =>element.uri
    }
  }

  public constructor( 
    private routeUrlService:RouteUrlService,
    private spotifyService:SpotifyService,
    private activatedRoute:ActivatedRoute,
    private spinnerService:SpinnerService){
      this.spinnerService.showSpinner()
  }

  public ngOnInit(){    
    this.getLocalStorageTokenSpotify();
    this.activatedRoute.paramMap.subscribe((param)=>{
      const id = param.get('id');
      if(id){
        this.artistId = id;
        this.getArtist();
      }      
    })    
  }

  private getArtist(){
    this.spotifyService.getArtist(this.artistId,this.token).subscribe( (response:ArtistSpotify) =>{
      this.changeViewTitle(response);
      this.artist=response;
      this.getTopTracks();
      this.spinnerService.hideSpinner();
    })
  }

  private getTopTracks(){
    this.spotifyService.getTopTracks(this.artistId,this.token).subscribe( (response:TracksSpotify) => {
      this.tracks = response.tracks;
    });   
  }

  private changeViewTitle(artist:ArtistSpotify){
    this.routeUrlService.title = artist.name;
  }

  private getLocalStorageTokenSpotify(){
    const LocalStorageTokenSpotify = window.localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN_SPOTIFY);
    if(LocalStorageTokenSpotify){
      this.token= JSON.parse(LocalStorageTokenSpotify);
    }
  }
}
