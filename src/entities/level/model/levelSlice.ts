import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILevel } from "shared/types";
import { ILevelState } from "./types";

const initialState: ILevelState = {
    level: null,
    loading: false,
    error: null,
};

export const levelSlice = createSlice({
    name: "level",
    initialState,
    reducers: {
        setLevel(state, action: PayloadAction<ILevel>) {
            state.level = action.payload;
        },
    },
});

export default levelSlice.reducer;
