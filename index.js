document.addEventListener('DOMContentLoaded', function () {
  createBoard(64)
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
    div.style.backgroundColor = 'yellow'
    board.insertAdjacentElement('beforeend', div)
  }
}