import { Component, Input } from '@angular/core';
import { AlbumItemSpotify, ImagesSpotify } from '@src/app/shared/interface/spotify.interface';

@Component({
  selector: 'app-card-spotify',
  templateUrl: './card-spotify.component.html',
  styleUrls: ['./card-spotify.component.scss']
})
export class CardSpotifyComponent {
  @Input() song:AlbumItemSpotify;

  public onClick(song:AlbumItemSpotify){

  }

  public getThumbnail(imageSong:ImagesSpotify[]){
    return imageSong[2].url;
  }
}
