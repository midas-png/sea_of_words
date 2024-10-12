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

export type RootStore = EnhancedStore<
    {
        level: ILevelState;
        screen: IScreenState;
    },
    UnknownAction,
    Tuple<
        [
            StoreEnhancer<{
                dispatch: ThunkDispatch<
                    {
                        level: ILevelState;
                        screen: IScreenState;
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
        },
        UnknownAction,
        Partial<{
            level: ILevelState | undefined;
            screen: IScreenState | undefined;
        }>
    >
>;

export type AppDispatch = RootStore["dispatch"];
