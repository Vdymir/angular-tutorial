import { createReducer, on } from '@ngrx/store';
import { HousingLocation } from '../../housinglocation';
import {
  addToFavorites,
  deleteFavorite,
  resetFavorites,
} from '../actions/favorites.actions';

export const initialState: HousingLocation[] = [];

export const favoriteReducer = createReducer(
  initialState,
  on(addToFavorites, (state, { location }) => {
    console.log('first');
    return [...state, location];
  }),
  on(deleteFavorite, (state, { id }) => state.filter((item) => item.id !== id)),
  on(resetFavorites, (state) => [])
);
