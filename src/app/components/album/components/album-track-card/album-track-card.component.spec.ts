import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumTrackCardComponent } from './album-track-card.component';

describe('AlbumTrackCardComponent', () => {
  let component: AlbumTrackCardComponent;
  let fixture: ComponentFixture<AlbumTrackCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumTrackCardComponent]
    });
    fixture = TestBed.createComponent(AlbumTrackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
