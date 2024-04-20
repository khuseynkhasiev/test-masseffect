export interface IQuestion {
    id: number;
    question: string;
    answers: {
        correct: boolean;
        text: string;
    }[];
}

export interface IAnswer {
    id: number;
    question: string;
    correct: boolean;
    text: string;
}
export type ISelectedAnswer = Omit<IAnswer, "id" | "question">;
