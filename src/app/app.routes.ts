import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LeftComponent } from './components/home/left.component';
import { CenterComponent } from './components/home/center.component';
import { RightComponent } from './components/home/right.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';

const APP_ROUTES:Routes = [
    { 
        path: 'home', 
        component: HomeComponent,
        children: [
            { path: 'left', component: LeftComponent },
            { path: 'center', component: CenterComponent },
            { path: 'right', component: RightComponent },
        ]
    },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'search/:term', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);