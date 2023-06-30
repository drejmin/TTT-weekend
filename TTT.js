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

turn =1;
winner =null;
render();
}


function placeMarker(evt) {
    const Idx = parseInt(evt.target.id.replace('bx-',''));
    
    if (isNaN(Idx)|| board[Idx] || winner)
     return;

    board[Idx]=turn;
    turn *=-1;
    winner = getWinner();
    render();
}
{
turn = 1;
winner = null;
render();
}

function render() {
  renderBoard();
  renderMessage();
  renderControls();
  playAgainBtn.disabled =!winner;

function getWinner(){
    
  // Visualize all state in the DOM
  }
  render();
  function renderBoard() {
    board.forEach(function (bxVal, Idx) {
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
   
    board.forEach(function(bxVal, colIdx) {
      const hideMarker = !board[colIdx].includes(0) || winner;
      playAgainBtn.style.visibility = hideMarker ? 'hidden' : 'visible';
    });
  }
};
