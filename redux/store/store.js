import { applyMiddleware, createStore, combineReducers } from "redux";
import { persistCombineReducers, persistStore } from "redux-persist";
import rootSaga from "../sagas/rootSaga";
import rootReducer from "../reducers/rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import storage from "redux-persist/lib/storage";

const sagaMiddleWare = createSagaMiddleware();

const authPersistConfig = {
  key: "reattire",
  storage,
  whitelist: ["auth"],
};

export const store = createStore(
  persistCombineReducers(authPersistConfig, rootReducer),
  applyMiddleware(sagaMiddleWare)
);
store.subscribe(() => console.log("Redux Store: ", store.getState()));
export const persistor = persistStore(store);
sagaMiddleWare.run(rootSaga);
