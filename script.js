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
        description: "You're adventurous and quick-witted, always ready to take on whatever challenge comes your way.",
        image: "assets/images/marty-mcfly.png"
    },
    "Doc": {
        name: "Doc Brown",
        description: "You're a brilliant inventor and a bit eccentric, but your heart is always in the right place.",
        image: "assets/images/doc-brown.png"
    },
    "Biff": {
        name: "Biff Tannen",
        description: "You're confident and assertive, not afraid to go after what you want, even if it means bending the rules.",
        image: "assets/images/biff-tannen.png"
    },
    "George": {
        name: "George McFly",
        description: "You're a bit shy and awkward, but you have a kind heart and a strong sense of loyalty to those you care about.",
        image: "assets/images/george-mcfly.png"
    },
    "Lorraine": {
        name: "Lorraine McFly",
        description: "You're caring and nurturing, with a romantic streak and a love for life's simple pleasures.",
        image: "assets/images/lorraine-mcfly.png"
    }
};

let currentQuestionIndex = 0;

function nextQuestion(answer) {
    const currentCharacter = characters[answer];
    document.getElementById(`question-container-${currentQuestionIndex + 1}`).style.display = 'none';
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        document.getElementById(`question-container-${currentQuestionIndex + 1}`).style.display = 'block';
    } else {
        showResult(currentCharacter);
    }
}

function showResult(character) {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('result').innerText = `You got: ${character.name}`;
    document.getElementById('character-description').innerText = character.description;
    document.getElementById('character-image').src = character.image;
}
