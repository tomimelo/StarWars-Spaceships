import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { SpaceshipsComponent } from './spaceships/spaceships.component';

import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/spaceships'},
    { 
        path: '', 
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            {path: 'spaceships', component: SpaceshipsComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}