//-------------------------constants---------------------------------
const PLAYERS = {
    '0': 'white',
    '1': 'player X',
    '-1': 'player Y'
};

//-------------------------variables---------------------------------
let board; //array of 3x3 column arrays
let turn; //1 or -1
let winner; // null= no winner; 1 or -1 winner;  C = cat game;

//-------------------------cache elements----------------------------
const messageEl =document.querySelector('h1');
const playAgainBtn = document.querySelector('button');
const markerELs = [...document.querySelectorAll('#markers > div')];

//-------------------------event listeners---------------------------


//-------------------------functions---------------------------------
init(); //Initialize all and call render();

function init(){
board = [
    [0,0,0],//col 0
    [0,0,0],//col 1
    [0,0,0]//col 2
];

turn = 1;
winner = null;
render();
}



