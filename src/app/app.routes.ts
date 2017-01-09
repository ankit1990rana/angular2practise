import { Router, Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { AnimationComponent } from './animation/animation.component';
import { CrousalComponent } from './crousal/crousal.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'animations', component: AnimationComponent },
    { path: 'carousel', component: CrousalComponent },
    { path: 'user', loadChildren: 'app/user/user.module#userModule' } //Lazy loading
    // { path: 'home', component: headerComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES) 