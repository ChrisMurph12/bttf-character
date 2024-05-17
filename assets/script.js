const questions = [
    {
        text: "What is your favourite mode of transportation?",
        options:[
            {text: 'DeLorean', char: 'Marty'},
            {text: 'Hoverboard', char: 'Doc'},
            {text: 'Pickup Truck', char: 'Biff'},
            {text: 'Bicycle', char: 'George'},
            {text: 'Walking', char: 'Lorraine'}
        ]
    },
    {
        text: "What is your favourite era?",
        options:[
            {text: '1950s', char: 'Marty'},
            {text: '1980s', char: 'Doc'},
            {text: 'Future', char: 'Biff'},
            {text: 'Wild West', char: 'George'},
            {text: "don't have a favorite era", char: 'Lorraine'}
        ]
    }
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

function displayQuestion(question) {
    document.getElementById('question-text').innerText = question.text;
    document.getElementById('option1').innerText = question.options[0].text;
    document.getElementById('option2').innerText = question.options[1].text;
    document.getElementById('option3').innerText = question.options[2].text;
    document.getElementById('option4').innerText = question.options[3].text;
    document.getElementById('option5').innerText = question.options[4].text;
}

function showResult(character) {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('result').innerText = `You got: ${character.name}`;
    document.getElementById('character-description').innerText = character.description;
    document.getElementById('character-image').src = character.image;
}

let currentQuestionIndex = 0;
const maxQuestions = questions.length;
let blockedClick = false;

function nextQuestion(event) {
    if (!blockedClick) {
        blockedClick = true;
        const clickedOption = parseInt(event.target.getAttribute('data-index'));
        const selectedChar = questions[currentQuestionIndex].options[clickedOption].char;
        
        if (currentQuestionIndex < maxQuestions - 1) {
            currentQuestionIndex++;
            setTimeout(() => {
                displayQuestion(questions[currentQuestionIndex]);
                blockedClick = false;
            }, 2000);
        } else {
            setTimeout(() => {
                showResult(characters[selectedChar]);
            }, 2000);
        }
    }
}

document.querySelectorAll('button.option').forEach(button => {
    button.addEventListener('click', nextQuestion);
});

function startGame() {
    currentQuestionIndex = 0;
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    displayQuestion(questions[currentQuestionIndex]);
}

startGame();
