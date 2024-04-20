import { configureStore } from "@reduxjs/toolkit";
import AnswersReducer from "./features/answersSlice/answersSlice";
import SelecteAnswerClickReducer from "./features/selectAnswerClick/selectAnswerClick";
export const store = configureStore({
    reducer: {
        answers: AnswersReducer,
        selecteAnswerClick: SelecteAnswerClickReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
