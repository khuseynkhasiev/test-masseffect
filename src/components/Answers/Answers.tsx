import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnswers } from "../../app/features/answersSlice/answersSlice";
import { IQuestion } from "../../interfaces/data";
import { ISelectedAnswer } from "../../interfaces/data";
import { RootState } from "../../app/store";
import shuffleAnswers from "../../utils/shuffleAnswers";
import "./answers.css";

interface IProps {
    selectRandomQuestion: () => void;
    data: IQuestion | undefined;
}

function Answers({ selectRandomQuestion, data }: IProps) {
    const isSelected = useSelector(
        (state: RootState) => state.selecteAnswerClick.click
    );
    const dispatch = useDispatch();
    const [shuffledAnswers, setShuffledAnswers] = useState(data?.answers);
    const [selectedAnswer, setSelectedAnswer] =
        useState<ISelectedAnswer | null>(null);

    useEffect(() => {
        if (data && data.answers) {
            setShuffledAnswers(shuffleAnswers(data.answers));
        }
    }, [data]);

    const handleAnswerSelect = (index: number) => {
        if (shuffledAnswers) {
            setSelectedAnswer(shuffledAnswers[index]);
            dispatch(
                setAnswers({
                    question: data?.question,
                    id: data?.id,
                    ...shuffledAnswers[index],
                })
            );
        }

        selectRandomQuestion();
    };

    return (
        <ul className="answers">
            {shuffledAnswers?.map((answer, index) => (
                <li key={index}>
                    <label className="answers__label">
                        <input
                            disabled={isSelected}
                            className="answers__input"
                            type="radio"
                            name="answer"
                            value={answer.text}
                            checked={selectedAnswer === answer}
                            onChange={() => handleAnswerSelect(index)}
                        />
                        <p className="answer__text">{answer.text}</p>
                    </label>
                </li>
            ))}
        </ul>
    );
}

export default Answers;
