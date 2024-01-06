import { Component, HostBinding} from '@angular/core';
import { THEME_UI } from '../shared/enums/theme-ui.enum';
import { LOCAL_STORAGE_KEY } from '../shared/enums/local-storage-key.enum';
import { TokenSpotify } from '../shared/interface/spotify.interface';
import { SpotifyService } from '../core/spotify.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @HostBinding('class') className = ''; 

  public constructor(private spotifyService:SpotifyService){
    let theme = window.localStorage.getItem(LOCAL_STORAGE_KEY.THEME_UI);
    if(theme){      
      this.className = theme;
    }else{
      this.onToggleControlSwitch(false);
    }
  }

  ngOnInit() {
    this.intervalGetTokenSpotify();    
  }

  public onToggleControlSwitch(darkMode:boolean){
    this.className = darkMode ? THEME_UI.DARK : THEME_UI.LIGHT;
    window.localStorage.setItem(LOCAL_STORAGE_KEY.THEME_UI,this.className);
  }

  public intervalGetTokenSpotify(){    
      setInterval(() => {
        this.getToken();
      }, 1800000); // 30min   
  }

  public getToken(){
    this.spotifyService.getToken().subscribe( (token:TokenSpotify) =>{
      window.localStorage.setItem(LOCAL_STORAGE_KEY.TOKEN_SPOTIFY,JSON.stringify(token))
    })
  }
}
