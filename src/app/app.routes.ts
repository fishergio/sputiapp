import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, SearchComponent, ArtistComponent } from './components/index.components';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },  
  { path: 'artist/:id', component: ArtistComponent },  
  { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });