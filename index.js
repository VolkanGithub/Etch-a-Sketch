let color = 'black'

document.addEventListener('DOMContentLoaded', function () {
  createBoard(16);
  let btn_popup = document.querySelector('#popup')
  btn_popup.addEventListener('click', function () {
    let size = getSize();
    createBoard(size);
  })
})

function createBoard(size) {
  let board = document.querySelector('.board')

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`

  let numberOfDivs = size * size;

  for (let i = 0; i < numberOfDivs; i++) {
    let div = document.createElement('div')
    /* some experiments */
    /* div.classList.add('square')
    div.addEventListener('mouseover', function () {
      div.style.backgroundColor = 'black'
    })
    board.appendChild(div) */
    div.addEventListener('mouseover', colorDiv)
    board.insertAdjacentElement('beforeend', div)
  }
}

function getSize() {
  let input = prompt('Enter the size of the board')
  let message = document.querySelector('#message')
  if (input === "" || input === null || isNaN(input)) {

    message.textContent = 'Please enter a valid number'
  } else if (input < 1 || input > 100) {
    message.textContent = 'Please enter a number less than 100 and greater than 1'
  } else {
    message.textContent = 'You can start drawing'
    return input;
  }
}

function colorDiv() {
  if (color == 'random') {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
  } else {
    this.style.backgroundColor = 'black'
  }
}

function setColor(colorChoise) {
  color = colorChoise;
}

function resetBoard() {
  let divs = document.querySelectorAll('div')
  divs.forEach((div) => div.style.backgroundColor = 'white')
}