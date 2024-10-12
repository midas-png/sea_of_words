import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IScreenState, TScreen } from "shared/types/screenTypes";

const initialState: IScreenState = {
    type: "guess",
};

export const screenSlice = createSlice({
    name: "screen",
    initialState,
    reducers: {
        setScreen(state, action: PayloadAction<TScreen>) {
            state.type = action.payload;
        },
    },
});

export default screenSlice.reducer;
