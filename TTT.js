//-------------------------constants---------------------------------
const PLAYERS = {
    'null': 'white',
    '1': 'darkgreen',
    '-1': 'navy'
};

//-------------------------variables---------------------------------
let board; //array of 3x3 column arrays
let turn; //1 or -1
let winner; // null= no winner; 1 or -1 winner;  T = cat game;

//-------------------------cache elements----------------------------
const message =document.querySelector('h1');
const playAgainBtn = document.querySelector('button');

//-------------------------event listeners---------------------------
playAgainBtn.addEventListener('click',init);
document.getElementById('board').addEventListener('click',placeMarker);
//-------------------------functions---------------------------------
init();
//Initialize all and call render();

function init(){
board = 
    [null,null,null,
    null,null,null,
    null,null,null]

turn = 1;
winner = null;
render();
}


function placeMarker(evt) {
    const Idx = parseInt(evt.target.id.replace('bx-',''));
    
    if (isNaN(Idx)|| board[Idx] || winner)
     return;

    board[Idx]=turn;
    console.log(board);
    winner = getWinner();
    turn *=-1;
    render();
}

function render() {
  renderBoard();
  renderMessage();
  renderControls();
  playAgainBtn.disabled =!winner;
}

function getWinner(){
    // if/else conditional for any way a current player can win
    // 012, 345, 678, 036, 147, 258, 048,246
    if (-1===board[0,1,2]|| 1===board[0,1,2]){return renderMessage();}
    else if (-1===board[3,4,5]|| 1===board[3,4,5]){return renderMessage();}
    else if (-1===board[6,7,8]|| 1===board[6,7,8]){return renderMessage();}
    else if (-1===board[0,3,6]|| 1===board[0,3,6]){return renderMessage();}
    else if (-1===board[1,4,7]|| 1===board[1,4,7]){return renderMessage();}
    else if (-1===board[2,5,8]|| 1===board[2,5,8]){return renderMessage();}
    else if (-1===board[0,4,8]|| 1===board[0,4,8]){return renderMessage();}
    else if (-1===board[2,4,6]|| 1===board[2,4,6]){return renderMessage();}
    else if (!board.includes('null')){
        return winner === 'T'};
}

function renderBoard() {
    board.forEach((bxVal, Idx) => {
        const boxEl = document.getElementById(`bx-${Idx}`);
        boxEl.style.backgroundColor = PLAYERS[bxVal];
    });
};
  
function renderMessage() {
    if (winner === 'T') {
      message.innerText = "It's a Cat Game!!!";
    } else if (winner) {
      message.innerHTML = `<span style="color: ${PLAYERS[winner]}">${PLAYERS[winner].toUpperCase()}</span> Wins!`;
    } else {
      // Game is in play
      message.innerHTML = `<span style="color: ${PLAYERS[turn]}">${PLAYERS[turn].toUpperCase()}</span>'s Turn`;
    }
}
  
function renderControls() {
    
    playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';
   
    board.forEach(function(Idx) {
       const hideButton = !board[Idx].includes('null') || winner;
      playAgainBtn.style.visibility = hideButton ? 'hidden' : 'visible';
    });
 }

