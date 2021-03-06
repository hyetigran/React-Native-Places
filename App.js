import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxTunk from "redux-thunk";
import PlacesNavigator from "./navigation/PlacesNavigator";
import placesReducer from "./store/places-reducer";
import { init } from "./helpers/db";

init()
  .then(() => {
    console.log("db success");
  })
  .catch((error) => console.log(error));
const rootReducer = combineReducers({
  places: placesReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxTunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
