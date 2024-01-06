import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-toolbar-search',
  templateUrl: './toolbar-search.component.html',
  styleUrls: ['./toolbar-search.component.scss']
})
export class ToolbarSearchComponent {
  @Output() public search: EventEmitter<string> = new EventEmitter();
  public searchText = new FormControl('');

  public constructor(){}

  public onSearch(){
    const text = this.searchText.getRawValue();
    if(text){
      this.searchText.reset();
      this.search.emit(text);     
    }    
  }

}
