import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipComponent } from './starship/starship.component';

import { ImagePipe } from '../pipes/image.pipe';
import { ProfileComponent } from './profile/profile.component';
import { NewStarshipComponent } from './new-starship/new-starship.component';

@NgModule({
  declarations: [
    PagesComponent,
    StarshipsComponent,
    StarshipComponent,
    ImagePipe,
    ProfileComponent,
    NewStarshipComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ]
})
export class PagesModule { }
