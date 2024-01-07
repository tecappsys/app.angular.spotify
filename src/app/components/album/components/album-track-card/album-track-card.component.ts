import { Component, Input } from '@angular/core';
import { AlbumTrackSpotify } from '@src/app/shared/interface/spotify.interface';

@Component({
  selector: 'app-album-track-card',
  templateUrl: './album-track-card.component.html',
  styleUrls: ['./album-track-card.component.scss']
})
export class AlbumTrackCardComponent {
  @Input() track:AlbumTrackSpotify;
  @Input() image:string;
  @Input() album:string;
}
