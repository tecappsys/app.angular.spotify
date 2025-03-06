import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from '@src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() public changeIsDarkTheme: EventEmitter<boolean> = new EventEmitter();
  @Input() isDarkTheme:boolean;

  public constructor(){}

  public onChangeTheme(){
    this.isDarkTheme = !this.isDarkTheme
    this.changeIsDarkTheme.emit( this.isDarkTheme )
  }

  public navigateToHome(){
    setTimeout(() => {
      window.location.href = environment.appHome
    }, 100);
  }

}
