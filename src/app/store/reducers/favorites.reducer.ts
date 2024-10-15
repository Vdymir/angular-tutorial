import { createReducer, on } from '@ngrx/store';
import { HousingLocation } from '../../interfaces/housinglocation.interface';
import {
  addToFavorites,
  deleteFavorite,
  resetFavorites,
} from '../actions/favorites.actions';

export const initialState: HousingLocation[] = [];

export const favoriteReducer = createReducer(
  initialState,
  on(addToFavorites, (state, { location }) => {
    return [...state, location];
  }),
  on(deleteFavorite, (state, { id }) => state.filter((item) => item.id !== id)),
  on(resetFavorites, () => [])
);
