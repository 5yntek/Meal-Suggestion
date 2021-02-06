import React from "react";
import Navigator from "./routes/stack";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ingredientsReducer from "./redux/ingredients.reducer";

const store = createStore(ingredientsReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
