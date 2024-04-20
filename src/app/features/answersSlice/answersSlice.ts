import { IAnswer } from "./../../../interfaces/data";
import { createSlice } from "@reduxjs/toolkit";

interface IAnswersState {
    answers: IAnswer[];
}

const initialState: IAnswersState = {
    answers: [],
};

export const answersSlice = createSlice({
    name: "answers",
    initialState,
    reducers: {
        setAnswers: (state, action) => {
            const { question, id, ...answer } = action.payload;
            const newAnswer: IAnswer = {
                question,
                id,
                ...answer,
            };
            state.answers = [...state.answers, newAnswer];
        },
        resetAnswers: (state) => {
            state.answers = [];
        },
    },
});

export const { setAnswers, resetAnswers } = answersSlice.actions;
export default answersSlice.reducer;
