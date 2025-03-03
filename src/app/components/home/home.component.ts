import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from '@src/app/core/spinner.service';
import { SpotifyService } from '@src/app/core/spotify.service';
import { LOCAL_STORAGE_KEY } from '@src/app/shared/enums/local-storage-key.enum';
import { SearchItemSpotify, ArtistSpotify, Spotify, TokenSpotify } from '@src/app/shared/interface/spotify.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public songs:SearchItemSpotify[];
  private token:TokenSpotify;
  private URL_ARTIST:string = '/artist/'
  private URL_ALBUM:string = '/album/'

  public constructor(private spotifyService:SpotifyService,private router:Router,private spinnerService:SpinnerService){    
    this.spinnerService.showSpinner()
  }

  ngOnInit() {
    this.getToken()
    this.showWebSite()
    // const codePostal:any[] = this.spotifyService.dataCodigos()
    // this.getAll(codePostal)
  }  

  public onSongSelected(song:string){
    this.router.navigate( [`${this.URL_ALBUM}${song}`] );
  }

  public onArtistSelected(artist:ArtistSpotify){
    this.router.navigate( [`${this.URL_ARTIST}${artist.id}`] );
  }

  private getNewReleases(){
    this.spotifyService.getNewReleases(this.token).subscribe( (response:Spotify) =>{
      this.songs=response.albums.items;
    })
  }

  public getToken(){
    this.spotifyService.getToken().subscribe( (token:TokenSpotify) =>{
      window.localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN_SPOTIFY,JSON.stringify(token))
      this.token = token;
      this.getNewReleases();    
    })
  }

  public showWebSite(){
    let ontarioStorage = window.localStorage.getItem(LOCAL_STORAGE_KEY.ONTARIO);
    if(ontarioStorage){
      const parseOntarioStorage = JSON.parse(ontarioStorage);
      if(parseOntarioStorage){
        const webs = parseOntarioStorage.reduce((acc:any,item:any)=>{
          if(item.wpsl_website){
            acc.push({wpsl_website:item.wpsl_website,email:item.email})
          }
          return acc;
        },[])
        let ind = 0;
        while (ind < 20) {
          const web = webs[ind].wpsl_website.replace('"',"");
          if(web.includes('wwww') || web.includes('http')){
            console.log(webs[ind])
            window.open(web, "_blank");
          }
          ind++
        }        
      }      
    }
  }

  public getAll(codigos:any[],contador=1){
    const codigo = codigos[codigos.length - 1];
    this.spotifyService.brokers(codigo.codigo,codigo.latitude,codigo.longitude).subscribe( (response:any) =>{
      let ontarioCodes:any[] = []
      const ontarioStorage = window.localStorage.getItem(LOCAL_STORAGE_KEY.ONTARIO);
      if(ontarioStorage){
        ontarioCodes = JSON.parse(ontarioStorage);
        if(response.results){
          const mapResponse = response.results.map( (res:any) => res.result_data)
          const reduceParseOntarioStorage = mapResponse.reduce((acc:any,item:any)=>{
            const find = ontarioCodes.find( (elem:any) => elem.id === item.id)
            if(!find){
              acc.push(item)
            }
            return acc;
          },[])        
          ontarioCodes = [...reduceParseOntarioStorage,...ontarioCodes]
        }        
      }else{
        ontarioCodes = response.results.map( (res:any) => res.result_data)       
      }
      window.localStorage.setItem(LOCAL_STORAGE_KEY.ONTARIO,JSON.stringify(ontarioCodes))
      
      if(codigos.length === 1){
        this.spinnerService.hideSpinner();
      }else{
        codigos.pop();
        this.getAll(codigos,contador + 1)        
      }
      
    })
  }
}
