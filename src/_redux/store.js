import { createStore, combineReducers, applyMiddleware } from "redux";
import order from "../_reducers/order";
import { logger, promise } from "../middleware";

// Global state
const rootReducers = combineReducers({
  order
});

// Setup store for Redux
const store = createStore(rootReducers, applyMiddleware(logger, promise));

export default store;
