import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipComponent } from './starship/starship.component';

import { AuthGuard } from '../guards/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { NewStarshipComponent } from './new-starship/new-starship.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/starships'},
    { 
        path: '', 
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            {path: 'profile', component: ProfileComponent},
            {path: 'starships', component: StarshipsComponent},
            {path: 'starships/new', component: NewStarshipComponent},
            {path: 'starships/:id', component: StarshipComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}