import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Questions from "../../components/Questions/Questions";
import TestTitle from "../../components/TestTitle/TestTitle";
import "./test.css";
function Test() {
    return (
        <main className="test">
            <TestTitle title="Тестирование" tag="h1" />
            <Questions />
            <ProgressBar />
        </main>
    );
}

export default Test;
