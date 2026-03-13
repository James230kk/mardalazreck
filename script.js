let history = [];

function startGame() {
    history = [];
    getNewQuestion();
}

function sendAnswer(answer) {
    history.push({ answer });
    getNewQuestion();
}

function getNewQuestion() {
    const questions = [
        "هل الشخصية حقيقية؟",
        "هل الشخصية مشهورة؟",
        "هل الشخصية من الأنمي؟",
        "هل الشخصية لاعب كرة قدم؟",
        "هل الشخصية عربية؟",
        "هل الشخصية رجل؟",
        "هل الشخصية تعيش حالياً؟"
    ];

    const random = Math.floor(Math.random() * questions.length);
    document.getElementById("question").innerText = questions[random];
}
