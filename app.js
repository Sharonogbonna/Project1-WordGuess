//Setting the variables to html
const lettersContainer = document.getElementById('letter-cont');
const topicsContainer = document.getElementById('topics-cont');
const userInputSection = document.getElementById('user-input-sec');
const newGameContain = document.getElementById('newgame-cont');
const newGameButton = document.getElementById('newgame-button');
const canvas = document.getElementById('canvas');
const resultText = document.getElementById('results');


//Topic options for the game
let topics = {
    neuroanatomy: [
        'Dendron',
        'Neuron', 
        'Synapse',
        'nodes of Ranvier',
        'Axon',
        'Cerebral Cortex',
        'Central Nervous System',
        'Brain',
        'Pia Mater',
        'Amygdala',
        'Soma',
        'Blood Brain Barrier',
        'Myelin Sheath'
    ],
    cooking: [
        'Spatula',
        'Sauce Pan',
        'Pot',
        'Tongs',
        'Ladle',
        "Chef's Knife",
        'Cutting Board', 
        'Cheese Grater', 
        'Peeler', 
        'Tenderizer',
        'Pizza Cutter',
        'Mezzaluna',
        'Bench Scraper',
        'Sifter'
    ]
}

//other declarations
let chosenWord = '';
let winCount = 0;
let count = 0;

const displayTopicButtons = () => {
    topicsContainer.innerHTML += `<p>Please Select a Topic</p>`;
    let topicCont = document.createElement('div');
    for(let topic in topics){
        topicCont.innerHTML += `<button class="topics" onclick="chooseWord('${topic}')">${topic}</button>`;
    }
topicsContainer.appendChild(topicCont);
}
//generate word for topic selected
const chooseWord = (topicValue) => {
    let topicButtons = document.querySelectorAll('.topics');
    topicButtons.forEach(function (button) {
        if(button.innerText.toLowerCase() === topicValue){
            button.classList.add('active');
        }button.disabled = true;
    });
};

//runs when game is loaded and when player clicks new game
const initiateGame = () => {
    winCount = 0;
    count = 0;
    //creating letter buttons
    for(let i = 65; i <91; i++){
      let button = document.createElement('button');
      button.classList.add("letters");  
      button.innerText = String.fromCharCode(i);
      lettersContainer.append(button);
    };

    displayTopicButtons();
};
newGameButton.addEventListener("click", initiateGame);
window.onload = initiateGame;



// //hide letters and clear out words
// lettersContainer.classList.remove("hide");
// userInputSection.innerText = "";

// let topicArray = topics[topicValue];
// //randomly select word
//  chosenWord = topicArray[Math.floor(Math.random() *topicArray.length)]
//  chosenWord = chooseWord.toUpperCase()
// console.log(chooseWord)

// let displayWord = chosenWord.replace(/./g, '<span class="dashes">_</span>');

// //display as dashes
// userInputSection.innerHTML = displayWord

