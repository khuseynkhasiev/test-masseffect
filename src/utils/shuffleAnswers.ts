export default function shuffleAnswers(
    answers: { correct: boolean; text: string }[]
) {
    const shuffledAnswers = [...answers];
    for (let i = shuffledAnswers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledAnswers[i], shuffledAnswers[j]] = [
            shuffledAnswers[j],
            shuffledAnswers[i],
        ];
    }
    return shuffledAnswers;
}
