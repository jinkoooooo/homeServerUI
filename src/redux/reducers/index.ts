import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import authReducer from "./authReducer";
import {userAuthReducer} from "./authStore";
import {userAuthMenuReducer} from "./authMenuStore";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {pageStateReducer} from "./pageStore";

export const rootReducer = combineReducers({
  themeReducer,
  authReducer,
  userAuth: userAuthReducer,
  userMenu: userAuthMenuReducer,
  pageState: pageStateReducer
});

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;

export const useTypedSelector : TypedUseSelectorHook<AppStateType> = useSelector;