document.addEventListener('DOMContentLoaded',() =>{
  // done so that html is loaded before the javascript
  const grid = document.querySelector('.grid')  
  let width = 10
  let squares = []
  // that's how variables are set in js
  // CREATING THE BOARD :
  function createBoard(){
    for(let i =0 ; i < width*width ; i++){
        const square = document.createElement('div')
        // creating a 100 squares 
        square.setAttribute('id',i)
        // giving an id for each square created 
        grid.appendChild(square)
    }
  }
  createBoard()
  // creating the 100 tiny squares 

})