import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistHeaderComponent } from './artist-header.component';

describe('ArtistHeaderComponent', () => {
  let component: ArtistHeaderComponent;
  let fixture: ComponentFixture<ArtistHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistHeaderComponent]
    });
    fixture = TestBed.createComponent(ArtistHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
