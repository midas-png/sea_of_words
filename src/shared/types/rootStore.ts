import {
    EnhancedStore,
    UnknownAction,
    Tuple,
    StoreEnhancer,
    ThunkDispatch,
    Reducer,
} from "@reduxjs/toolkit";
import { ILevelState } from "./levelTypes";
import { IScreenState } from "./screenTypes";
import { IGuessState } from "./guessTypes";

export type RootStore = EnhancedStore<
    {
        level: ILevelState;
        screen: IScreenState;
        guess: IGuessState;
    },
    UnknownAction,
    Tuple<
        [
            StoreEnhancer<{
                dispatch: ThunkDispatch<
                    {
                        level: ILevelState;
                        screen: IScreenState;
                        guess: IGuessState;
                    },
                    undefined,
                    UnknownAction
                >;
            }>,
            StoreEnhancer
        ]
    >
>;

export type RootState = ReturnType<
    Reducer<
        {
            level: ILevelState;
            screen: IScreenState;
            guess: IGuessState;
        },
        UnknownAction,
        Partial<{
            level: ILevelState | undefined;
            screen: IScreenState | undefined;
            guess: IGuessState | undefined;
        }>
    >
>;

export type AppDispatch = RootStore["dispatch"];
