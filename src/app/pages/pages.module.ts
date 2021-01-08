import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { StarshipsComponent } from './starships/starships.component';

@NgModule({
  declarations: [
    PagesComponent,
    StarshipsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
  ]
})
export class PagesModule { }
