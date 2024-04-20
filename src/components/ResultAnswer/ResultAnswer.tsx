import { IAnswer } from "../../interfaces/data";
import "./resultAnswer.css";

interface IProps {
    answer: IAnswer;
}
function ResultAnswer({ answer }: IProps) {
    const { text, correct, question } = answer;
    return (
        <li className={`resultAnswer ${!correct ? "resultAnswer_error" : ""}`}>
            <h3 className="resultAnswer__title">{question}</h3>
            <p className="resultAnswer__text">{text}</p>
        </li>
    );
}

export default ResultAnswer;
