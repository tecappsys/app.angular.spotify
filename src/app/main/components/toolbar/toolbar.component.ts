import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRouteSnapshot, ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  public searchText = new FormControl(''); 
  public entity:string;
  public title:string;
  public urlBack:string;
  private snapshot: ActivatedRouteSnapshot;
  private URL_SEARCH:string = '/search/';

  constructor( private router:Router ) { 
    this.router.events.subscribe( (event) =>{
      if(event instanceof ActivationEnd){
        this.snapshot = event.snapshot;
        this.initData(this.snapshot)
      }
    })
  }

  public initData(snapshot:ActivatedRouteSnapshot){
    const data = snapshot.data;
    const entity = data['entity'];
    const title = data['title'];
    if(entity || title){
      this.entity = entity;
      this.title = this.getTitle(title);
      this.urlBack = this.getUrlBack(snapshot);
    }
  }

  public buscarHeroe(){
    const text = this.searchText.getRawValue();
    this.searchText.reset();
    this.router.navigate( [`${this.URL_SEARCH}${text ? text : ''}`] );
  }

  public backView(){
    this.router.navigate([this.urlBack])
  }

  private getUrlBack(snapshot:ActivatedRouteSnapshot):string{
    return snapshot.data['urlBack'];
  }

  private getTitle(entity:string){
    let title = entity
    const params: string[] = Object.keys(this.snapshot.params);
    if(params.length > 0){
      params.forEach((key)=>{        
        title = this.snapshot.params[key]
      })
    }
    return title  
  }

}
