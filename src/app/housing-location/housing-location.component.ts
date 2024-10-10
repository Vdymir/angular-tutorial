import { Component, inject, input, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import {
  addToFavorites,
  deleteFavorite,
} from '../store/actions/favorites.actions';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, MatIconModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  private store = inject(Store);

  @Input() housingLocation!: HousingLocation;
  @Input() isHome!: boolean;

  public addFavorites(): void {
    this.store.dispatch(addToFavorites({ location: this.housingLocation }));
  }

  public deleteFavorite(): void {
    this.store.dispatch(deleteFavorite({ id: this.housingLocation.id }));
  }
}
