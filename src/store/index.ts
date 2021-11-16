import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { TodosReducer } from "./Todos/reducer";
import { TodosActionCreators } from "./Todos/ActionCreators";
import thunk from "redux-thunk";

export const ActionCreators = {
  ...TodosActionCreators,
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancer =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const rootReducer = combineReducers({ todos: TodosReducer });

export type AppDispatch = typeof store.dispatch;
export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
export type RootState = ReturnType<typeof store.getState>;
