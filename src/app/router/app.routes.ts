import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { FavoritesComponent } from '../pages/favorites/favorites.component';
import { DetailsComponent } from '../pages/details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    title: 'Favorites',
  },
];
