// Chapter 1

// Looping a Triangle
var tri = [];
function loopTri() {
  for (var i = 0; i <= 7; i++) {
    tri.push('#');
    var triString = tri.join('');
    console.log(triString);
  }
}

//Event Listener for loopTri.
// $('#tri-loop').on('click', loopTri);
document.getElementById('loop-tri').addEventListener('click', loopTri);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// FizzBuzz
function fizzBuzz() {
  for (var i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }
}

// Event Listener for FizzBuzz
document.getElementById('fizz-buzz').addEventListener('click', fizzBuzz);

// Chess Board

function chessBoard() {
  var size = 8;

  var board = '';

  for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
      if ((x + y) % 2 == 0) board += ' ';
      else board += '#';
    }
    board += '\n';
  }

  console.log(board);
}

// Event Listener for chessBoard
document.getElementById('chess-board').addEventListener('click', chessBoard);
