import { createAction, props } from "@ngrx/store";
import { HousingLocation } from "../../housinglocation";

export const addToFavorites = createAction(
  "[Favorite] Add To Favorites",
  props<{ location: HousingLocation }>(),
);
export const deleteFavorite = createAction(
  "[Favorite] Delete to Favorites",
  props<{ id: number }>(),
);
export const resetFavorites = createAction("[Favorite] Reset");
