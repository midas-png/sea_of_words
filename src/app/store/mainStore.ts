import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { guessReducer } from "entities/guess";
import { levelReducer } from "entities/level";
import { screenReducer } from "entities/screen";
import { RootStore } from "shared/types/rootStore";

const mainReducer = combineReducers({
    level: levelReducer,
    screen: screenReducer,
    guess: guessReducer,
});

export const mainStore: RootStore = configureStore({
    reducer: mainReducer,
});
