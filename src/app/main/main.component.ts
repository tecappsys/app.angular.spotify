import { Component} from '@angular/core';
import { THEME_UI } from '../shared/enums/theme-ui.enum';
import { LOCAL_STORAGE_KEY } from '../shared/enums/local-storage-key.enum';
import { TokenSpotify } from '../shared/interface/spotify.interface';
import { SpotifyService } from '../core/spotify.service';
import { ThemeService } from '../core/theme.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  public isDarkTheme:boolean;

  public constructor(public themeService: ThemeService, private spotifyService:SpotifyService){}

  ngOnInit() {
    const currentTheme = window.localStorage.getItem(LOCAL_STORAGE_KEY.THEME_UI);
    this.isDarkTheme = (currentTheme === THEME_UI.DARK)
    this.intervalGetTokenSpotify();    
  }

  public onChangeIsDarkTheme(isDarkTheme:boolean){
    this.themeService.toggleTheme(isDarkTheme ? THEME_UI.DARK : THEME_UI.LIGHT);
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
