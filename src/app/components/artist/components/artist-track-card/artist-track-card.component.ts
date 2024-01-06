import { Component, Input } from '@angular/core';
import { TrackSpotify } from '@src/app/shared/interface/spotify.interface';

@Component({
  selector: 'app-artist-track-card',
  templateUrl: './artist-track-card.component.html',
  styleUrls: ['./artist-track-card.component.scss']
})
export class ArtistTrackCardComponent {
  @Input() track:TrackSpotify;
}
