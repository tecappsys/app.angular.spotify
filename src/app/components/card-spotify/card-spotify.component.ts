import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlbumItemSpotify, ArtistSpotify, ImagesSpotify } from '@src/app/shared/interface/spotify.interface';

@Component({
  selector: 'app-card-spotify',
  templateUrl: './card-spotify.component.html',
  styleUrls: ['./card-spotify.component.scss']
})
export class CardSpotifyComponent {
  @Output() public songSelected: EventEmitter<AlbumItemSpotify> = new EventEmitter();
  @Output() public artistSelected: EventEmitter<ArtistSpotify> = new EventEmitter();
  @Input() song:AlbumItemSpotify;
  

  public onSongSelected(){
    this.songSelected.emit( this.song );
  }

  public onArtistSelected(artist:ArtistSpotify){
    this.artistSelected.emit( artist );
  }

  public getThumbnail(imageSong:ImagesSpotify[]){
    return imageSong[2].url;
  }
}
