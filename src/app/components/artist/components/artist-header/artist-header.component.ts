import { Component, Input } from '@angular/core';
import { ArtistSpotify } from '@src/app/shared/interface/spotify.interface';

@Component({
  selector: 'app-artist-header',
  templateUrl: './artist-header.component.html',
  styleUrls: ['./artist-header.component.scss']
})
export class ArtistHeaderComponent {
  @Input() artist:ArtistSpotify;
}
