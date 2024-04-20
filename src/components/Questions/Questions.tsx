import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IQuestion } from "../../interfaces/data";
import { selecteClickAnswer } from "../../app/features/selectAnswerClick/selectAnswerClick";
import { RootState } from "../../app/store";
import Answers from "../Answers/Answers";
import data from "../../data/data.json";
import "./questions.css";

function Questions() {
    const isSelected = useSelector(
        (state: RootState) => state.selecteAnswerClick
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [availableQuestions, setAvailableQuestions] = useState(data.data);
    const [currentQuestion, setCurrentQuestion] = useState<
        IQuestion | undefined
    >();

    useEffect(() => {
        selectRandomQuestion();
        sessionStorage.removeItem("answers");
    }, []);

    const handleSelectClickAnswerInterval = () => {
        dispatch(selecteClickAnswer(true));
        if (isSelected) {
            setTimeout(() => {
                dispatch(selecteClickAnswer(false));
                selectRandomQuestion();
            }, 700);
        }
    };

    const selectRandomQuestion = () => {
        const randomIndex = Math.floor(
            Math.random() * availableQuestions.length
        );
        const randomQuestion = availableQuestions[randomIndex];

        const updatedAvailableQuestions = [...availableQuestions];
        updatedAvailableQuestions.splice(randomIndex, 1);

        setCurrentQuestion(randomQuestion);
        setAvailableQuestions(updatedAvailableQuestions);
        navigationFinishQuestion(randomQuestion);
    };

    const navigationFinishQuestion = (randomQuestion: IQuestion) => {
        if (randomQuestion === undefined) {
            navigate("/result");
        }
    };

    return (
        <section className="questions">
            <h2 className="questions__title">{currentQuestion?.question} </h2>
            <Answers
                data={currentQuestion}
                selectRandomQuestion={handleSelectClickAnswerInterval}
            />
        </section>
    );
}

export default Questions;
