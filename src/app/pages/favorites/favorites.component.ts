import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../../components/housing-location/housing-location.component';
import { HousingLocation } from '../../interfaces/housinglocation.interface';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent {
  locations$: HousingLocation[] = [];

  constructor(private store: Store<{ favorites: HousingLocation[] }>) {
    this.store.select('favorites').subscribe((response) => {
      this.locations$ = response;
    });
  }
}
