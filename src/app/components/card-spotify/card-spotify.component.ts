import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchItemSpotify, ArtistSpotify, ImagesSpotify } from '@src/app/shared/interface/spotify.interface';

@Component({
  selector: 'app-card-spotify',
  templateUrl: './card-spotify.component.html',
  styleUrls: ['./card-spotify.component.scss']
})
export class CardSpotifyComponent {
  @Output() public songSelected: EventEmitter<SearchItemSpotify> = new EventEmitter();
  @Output() public artistSelected: EventEmitter<ArtistSpotify> = new EventEmitter();
  @Input() song:SearchItemSpotify;
  

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
