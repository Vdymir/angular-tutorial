import { ActionReducerMap } from "@ngrx/store";
import { favoriteReducer } from "./favorites.reducer";

export const reducers: ActionReducerMap<any> = {
  favorites: favoriteReducer,
};
