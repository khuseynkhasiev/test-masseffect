import { createSlice } from "@reduxjs/toolkit";

interface ISelectedAnswer {
    click: boolean;
}

const initialState: ISelectedAnswer = {
    click: false,
};

export const selecteAnswerClickSlice = createSlice({
    name: "selecteAnswerClick",
    initialState,
    reducers: {
        selecteClickAnswer: (state, action) => {
            state.click = action.payload;
        },
    },
});

export const { selecteClickAnswer } = selecteAnswerClickSlice.actions;
export default selecteAnswerClickSlice.reducer;
