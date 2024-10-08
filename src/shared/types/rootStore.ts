import { EnhancedStore, UnknownAction, Tuple, StoreEnhancer, ThunkDispatch, Reducer } from "@reduxjs/toolkit";
import { ILevelState } from "./levelTypes";

export type RootStore = EnhancedStore<
    {
        level: ILevelState;
    },
    UnknownAction,
    Tuple<
        [
            StoreEnhancer<{
                dispatch: ThunkDispatch<
                    {
                        level: ILevelState;
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
        },
        UnknownAction,
        Partial<{
            level: ILevelState | undefined;
        }>
    >
>;

export type AppDispatch = RootStore["dispatch"];
