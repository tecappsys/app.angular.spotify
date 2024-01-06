
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import { ArtistSpotify, Spotify, TokenSpotify, TracksSpotify } from '../shared/interface/spotify.interface';
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
    return this.getRequest(uri,token) as Observable<Spotify>;
  }

  public getArtist( id:string,token:TokenSpotify ) {
    const uri = `/artists/${ id }`;
    return this.getRequest(uri,token) as Observable<ArtistSpotify>;
  }

  public getTopTracks( id:string,token:TokenSpotify ) {
    const uri = `/artists/${id}/top-tracks?country=us`;
    return this.getRequest(uri,token) as Observable<TracksSpotify>;
  }

  public getSearch( word: string,token:TokenSpotify ) {
    const uri = `/search?q=${ word }&type=artist&limit=15`;
    return this.getRequest(uri,token) as Observable<Spotify>;
  }

  private getRequest( query: string, token:TokenSpotify) {
    const url = `${environment.api_spotify}${ query }`;
    const headers = new HttpHeaders({
      'Authorization': `${token.token_type} ${token.access_token}`
    });
    return this.http.get(url, { headers });
  }

}