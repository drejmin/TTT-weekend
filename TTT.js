//-------------------------constants---------------------------------
const PLAYERS = {
    'null': 'white',
    '1': 'darkgreen',
    '-1': 'navy'
};

//-------------------------variables---------------------------------
let board; //array of 3x3 column arrays
let turn; //1 or -1
let winner; // null= no winner; 1 or -1 winner;  C = cat game;

//-------------------------cache elements----------------------------
const messageEl =document.querySelector('h1');
const playAgainBtn = document.querySelector('button');
const boxes = array.from(document.querySelectorAll('.box'));
const currentPlayer = document.querySelector('.current-player');


//-------------------------event listeners---------------------------
document.getElementsByClassName('box').addEventListener('click',placeMarker)
playAgainBtn.addEventListener('click',init);
boxes.addEventListener('click', placeMarker);
//-------------------------functions---------------------------------
init(); //Initialize all and call render();

function init(){
board = [
    [repeat(9, null)]
];

function placeMarker(evt){
    const colIdx = parseInt(evt.target.id.replace('bx-',''));
    if (isNaN(colIdx)|| board[colIdx] || winner)
     return;

    board[colIdx]=turn;
    turn *=-1;
    winner = getWinner();
    render();
    //put either an X or an O depending on the players turn

}


turn = 1;
winner = null;
render();
}

function getWinner(){
  
  
  // Visualize all state in the DOM
  function render() {
    renderBoard();
    renderMessage();
    // Hide/show UI elements (controls)
    renderControls();
  }
  
  function renderBoard() {
    board.forEach(function(bxVal, colIdx) {
      // Iterate over the cells in the cur column (colArr)
      const boxEl = document.getElementById(`bx-${colIdx}`);
        boxEl.style.backgroundColor = COLORS[bxVal];
      });
    };
  
  function renderMessage() {
    if (winner === 'T') {
      messageEl.innerText = "It's a Tie!!!";
    } else if (winner) {
      messageEl.innerHTML = `<span style="color: ${COLOR_LOOKUP[winner]}">${COLOR_LOOKUP[winner].toUpperCase()}</span> Wins!`;
    } else {
      // Game is in play
      messageEl.innerHTML = `<span style="color: ${COLOR_LOOKUP[turn]}">${COLOR_LOOKUP[turn].toUpperCase()}</span>'s Turn`;
    }
  }
  
  function renderControls() {
    
    playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';
   
    boxes.forEach(function(box, colIdx) {
      const hideMarker = !board[colIdx].includes(0) || winner;
      markerEl.style.visibility = hideMarker ? 'hidden' : 'visible';
    });
  }
};
