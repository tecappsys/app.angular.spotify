
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import { ArtistSpotify, ReleaseSpotify, TokenSpotify, TracksSpotify } from '../shared/interface/spotify.interface';
import { Observable } from 'rxjs';
@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) { }

  public getToken(){
    const url = `${environment.api_tecappsys}/token`
    return this.http.get(url) as any;
  }

  public getNewReleases(token:TokenSpotify) {
    const uri = '/browse/new-releases?limit=20';
    return this.getRequest(uri,token) as Observable<ReleaseSpotify>;
  }

  public getArtist( id:string,token:TokenSpotify ) {
    const uri = `/artists/${ id }`;
    return this.getRequest(uri,token) as Observable<ArtistSpotify>;
  }

  public getTopTracks( id:string,token:TokenSpotify ) {
    const uri = `/artists/${id}/top-tracks?country=us`;
    return this.getRequest(uri,token) as Observable<TracksSpotify>;
  }

  private getRequest( query: string, token:TokenSpotify) {
    const url = `${environment.api_spotify}${ query }`;
    const headers = new HttpHeaders({
      'Authorization': `${token.token_type} ${token.access_token}`
    });
    return this.http.get(url, { headers });
  }

  // getArtists( termino: string ) {

  //   return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
  //               .pipe( map( data => data['artists'].items));

  // }

  // getTopTracks( id: string ) {

  //   return this.getQuery(`artists/${ id }/top-tracks?country=us`)
  //               .pipe( map( data => data['tracks']));

  // }

}