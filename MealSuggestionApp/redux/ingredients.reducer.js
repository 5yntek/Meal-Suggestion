import { combineReducers } from "redux";
import {
  addSelectedIngredient,
  ADD_SELECTED_INGREDIENT,
  REMOVE_SELECTED_INGREDIENT,
  SET_KNOWN_INGREDIENTS,
  SET_SELECTED_INGREDIENTS,
} from "./ingredients.action";

const INITIAL_STATE = {
  knownIngredients: [],
  selectedIngredients: [],
};

const ingredientsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_KNOWN_INGREDIENTS:
      return {
        ...state,
        knownIngredients: payload,
      };
    case SET_SELECTED_INGREDIENTS:
      return {
        ...state,
        selectedIngredients: payload,
      };
    case REMOVE_SELECTED_INGREDIENT:
      return {
        ...state,
        selectedIngredients: state.selectedIngredients.filter(
          (i) => i.id != payload
        ),
      };
    case ADD_SELECTED_INGREDIENT:
      return {
        ...state,
        selectedIngredients: [
          ...new Set([...state.selectedIngredients, payload]),
        ],
      };
    default:
      return state;
  }
};

export default combineReducers({
  ingredients: ingredientsReducer,
});
