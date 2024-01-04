import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from '../components/home/home.component';
import { ArtistComponent } from '../components/artist/artist.component';

const routes: Routes = [{
  path: '',
  component:MainComponent,
  children:[
    {
      path:'',
      pathMatch:'full',      
      component:HomeComponent,
      data:{
        entity:'Spotify',
        title:'New songs'
      }
    },
    {
      path:'artist/:id',
      pathMatch:'full',      
      component:ArtistComponent,
      data:{
        entity:'Artist',        
        urlBack:'/'
      }
      
    },
    
    { path: '**', pathMatch: 'full', redirectTo: '' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
