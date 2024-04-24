const questions = [
    "What is your favourite mode of transportation?",
    "What is your favourite era?",
    "Pick a catchphrase:",
    "What is your favourite hobby?",
    "Which adjective best describes you?",
    "Choose a location to hang out:",
    "What's your favourite type of music?",
    "Pick a snack:",
    "What's your dream job?",
    "What's your go-to outfit?"
];

const characters = {
    "Marty": {
        name: "Marty McFly",
        description: "You're adventurous and quick-witted, always ready to take on whatever challenge comes your way."
    },
    "Doc": {
        name: "Doc Brown",
        description: "You're a brilliant inventor and a bit eccentric, but your heart is always in the right place."
    },
    "Biff": {
        name: "Biff Tannen",
        description: "You're confident and assertive, not afraid to go after what you want, even if it means bending the rules."
    },
    "George": {
        name: "George McFly",
        description: "You're a bit shy and awkward, but you have a kind heart and a strong sense of loyalty to those you care about."
    },
    "Lorraine": {
        name: "Lorraine McFly",
        description: "You're caring and nurturing, with a romantic streak and a love for life's simple pleasures."
    }
};

let currentQuestionIndex = 0;

function nextQuestion(answer) {
    if (currentQuestionIndex < questions.length - 1) {
        const currentCharacter = characters[answer];
        document.getElementById('question').innerText = `Question ${currentQuestionIndex + 2}: ${questions[currentQuestionIndex + 1]}`;
        currentQuestionIndex++;
    } else if (currentQuestionIndex === questions.length - 1) {
        const currentCharacter = characters[answer];
        showResult(currentCharacter);
    }
}

function showResult(character) {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('result').innerText = `You got: ${character.name}`;
    document.getElementById('character-description').innerText = character.description;
}
