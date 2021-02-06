export const SET_KNOWN_INGREDIENTS = "SET_KNOWN_INGREDIENTS";
export const SET_SELECTED_INGREDIENTS = "SET_SELECTED_INGREDIENTS";
export const ADD_SELECTED_INGREDIENT = "ADD_SELECTED_INGREDIENT";
export const REMOVE_SELECTED_INGREDIENT = "REMOVE_SELECTED_INGREDIENT";

export const setKnownIngredients = (ingredients) => {
  return {
    type: SET_KNOWN_INGREDIENTS,
    payload: ingredients,
  };
};

export const setSelectedIngredients = (ingredients) => ({
  type: SET_SELECTED_INGREDIENTS,
  payload: ingredients,
});

export const addSelectedIngredient = (ingredient) => ({
  type: ADD_SELECTED_INGREDIENT,
  payload: ingredient,
});

export const removeSelectedIngredient = (id) => ({
  type: REMOVE_SELECTED_INGREDIENT,
  payload: id,
});
