import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { levelReducer } from "entities/level";
import { RootStore } from "shared/types/rootStore";

const mainReducer = combineReducers({
    level: levelReducer,
});

export const mainStore: RootStore = configureStore({
    reducer: mainReducer,
});
