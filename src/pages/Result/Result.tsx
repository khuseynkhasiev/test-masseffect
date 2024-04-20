import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RootState } from "../../app/store";
import { resetAnswers } from "../../app/features/answersSlice/answersSlice";
import { IAnswer } from "../../interfaces/data";
import TestTitle from "../../components/TestTitle/TestTitle";
import ResultAnswer from "../../components/ResultAnswer/ResultAnswer";
import BtnLink from "../../components/BtnLink/BtnLink";
import "./result.css";

function Result() {
    const dispatch = useDispatch();
    const answersDataState = useSelector((state: RootState) => state.answers);
    const [answersData, setAnswersData] = useState(answersDataState.answers);
    const [answersDoiteCount, setAnswersDoiteCount] = useState<number>(0);

    useEffect(() => {
        checkedAnswersDoite();
    }, []);

    const increcmentAnswersDoiteCount = (value: boolean) => {
        if (value) {
            setAnswersDoiteCount((state) => state + 1);
        }
    };

    const checkedAnswersDoite = () => {
        const answersSessionStorage = sessionStorage.getItem("answers");

        if (answersSessionStorage) {
            const answers = JSON.parse(answersSessionStorage);
            setAnswersData(answers);
            answers.forEach((answer: IAnswer) => {
                increcmentAnswersDoiteCount(answer.correct);
            });
        } else {
            sessionStorage.setItem(
                "answers",
                JSON.stringify(answersDataState.answers)
            );
            answersData.forEach((answer) => {
                increcmentAnswersDoiteCount(answer.correct);
            });
        }
    };

    const renderResultInfo = () => {
        if (answersDoiteCount === answersData.length) {
            return (
                <TestTitle title="Поздравляем!">
                    <p className="testTitle__text">
                        Вы правильно ответили на все вопросы. Вы действительно
                        отлично разбираетесь в IT.
                    </p>
                    <p className="testTitle__text">
                        Вы действительно отлично разбираетесь в IT.
                    </p>
                </TestTitle>
            );
        } else if (answersDoiteCount === 0) {
            return (
                <TestTitle title="Упс :(">
                    <p className="testTitle__text">
                        Вы неправильно ответили на все вопросы.
                    </p>
                    <p className="testTitle__text">Нужно подучить теорию.</p>
                </TestTitle>
            );
        } else if (answersDoiteCount >= 5) {
            return (
                <TestTitle title="Хороший результат!">
                    <p className="testTitle__text">
                        Вы ответили правильно на {answersDoiteCount} вопросов.
                    </p>
                    <p className="testTitle__text">Так держать!</p>
                </TestTitle>
            );
        } else {
            return (
                <TestTitle title="Удовлетворительно!">
                    <p className="testTitle__text">
                        Вы ответили правильно на {answersDoiteCount} вопросов.
                    </p>
                    <p className="testTitle__text">Нужно подучить теорию.</p>
                </TestTitle>
            );
        }
    };

    const handleTestNewStart = () => {
        dispatch(resetAnswers());
    };

    return (
        <section className="result">
            {renderResultInfo()}
            <ul className="result__answers">
                {answersData.map((answer) => {
                    return <ResultAnswer answer={answer} key={answer.id} />;
                })}
            </ul>
            {answersDoiteCount < answersData.length && (
                <div className="result__btnWrap">
                    <BtnLink
                        navLink="/"
                        text="Пройти еще раз"
                        handleTestNewStart={handleTestNewStart}
                    />
                </div>
            )}
        </section>
    );
}

export default Result;
