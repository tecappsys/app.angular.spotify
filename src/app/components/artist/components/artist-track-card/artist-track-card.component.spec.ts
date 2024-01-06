import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistTrackCardComponent } from './artist-track-card.component';

describe('ArtistTrackCardComponent', () => {
  let component: ArtistTrackCardComponent;
  let fixture: ComponentFixture<ArtistTrackCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistTrackCardComponent]
    });
    fixture = TestBed.createComponent(ArtistTrackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
