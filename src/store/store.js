import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { carReducer } from "../reducers/CarritoRuducer";
import thunk from "redux-thunk";
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  carShop: carReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
