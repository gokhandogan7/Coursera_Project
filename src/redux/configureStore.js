import { createStore, combineReducers } from "redux";
import { Dishes } from "./dishes";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";
import { Comments } from "./comments";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      promotions: Promotions,
      leaders: Leaders,
      comments: Comments,
    })
  );
  return store;
};


/* import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";

export const ConfigureStore = () => {
  const store = createStore(Reducer, initialState);
  return store;
};
 */
