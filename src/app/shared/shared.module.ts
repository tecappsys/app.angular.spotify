import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [   
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // Material UI - Modules
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule
  ],
  exports:[   
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,    
    // Material UI - Modules
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,

    SharedComponent
  ]
})
export class SharedModule { }
