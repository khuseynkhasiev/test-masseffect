import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import data from "../../data/data.json";
import "./progressBar.css";

function ProgressBar() {
    const isSelected = useSelector(
        (state: RootState) => state.selecteAnswerClick.click
    );
    const answersData = useSelector((state: RootState) => state.answers);
    const totalQuestions = data.data.length;
    const answeredQuestions = answersData.answers.length;
    const progress = (answeredQuestions / totalQuestions) * 100;

    return (
        <div className="progressBar">
            <div className="progressBar__bar">
                <div
                    className="progressBar__barFill"
                    style={{ width: `${progress}%` }}
                >
                    <p
                        className={`progresBar__fillCount ${
                            isSelected ? "progresBar__fillCount_close" : ""
                        }`}
                    >
                        {answeredQuestions !== 0 && answeredQuestions}
                    </p>
                </div>
            </div>
            <div
                className={`progressBar__counters ${
                    isSelected ? "progressBar__counters_active" : ""
                }`}
            >
                <p className="progressBar__count">0</p>
                <p className="progressBar__count">{totalQuestions}</p>
            </div>
        </div>
    );
}

export default ProgressBar;
