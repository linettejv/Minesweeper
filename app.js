document.addEventListener('DOMContentLoaded',() =>{
  // done so that html is loaded before the javascript
  const grid = document.querySelector('.grid')  
  let width = 10
  let squares = []
  let bombNum = 20
  // that's how variables are set in js
  // CREATING THE BOARD :
  function createBoard(){
    // getting a shuffled array with bombs
    const bombArray = Array(bombNum).fill('bomb')
    // creating a bomb array
    const emptySpaceArray = Array(width*width - bombNum).fill('empty')
    // the safe spaces array

    /*console.log(bombArray)
    console.log(emptySpaceArray)
    // this shows the output on the console tab while inspecting */

    const gameArray = emptySpaceArray.concat(bombArray)
    console.log(gameArray)
    // normally concatinated gameArray , this should be shuffled :
    const shuffledArray =  gameArray.sort(() => Math.random() -0.5)
    console.log(shuffledArray)

    // 1. done
    for(let i =0 ; i < width*width ; i++){
        const square = document.createElement('div')
        // creating a 100 squares 
        square.setAttribute('id',i)
        // giving an id for each square created 
        square.classList.add(shuffledArray[i])
        // giving a bomb / celar space assignment to each square while creating them

        grid.appendChild(square)
        squares.push(square)

        // normal click 
        square.addEventListener('click',function(e){
          this.click(square)
        })
    }

    // to add numbers to the neighbouring squares 

  }
  createBoard()
  // creating the 100 tiny squares  
  for ( let i = 0 ; i <squares.length ; i++ ){
    let total = 0
    const isLeftEdge = ( i % width === 0)
    const isRightEdge = (i % width === width - 1)
    // checking for left and right edges , those are exceptional cases 

    if (squares[i].classList.contains('empty')){
      if (i > 0 && !isLeftEdge && squares[i-1].classList.contains('bomb'))total++
      // checking square to the left 
      if (i > 9 && !isRightEdge && squares[i+1 - width].classList.contains('bomb'))total++
      // checking square  to the north east , checking starts at 10 , the second row 
      if (i > 10 && squares[i - width].classList.contains('bomb')) total ++
      // checking for square right above
      if ( i > 11 && !isLeftEdge && squares[i - 1 - width].classList.contains('bomb')) total++
      // above left 
      if ( i < 99 && !isRightEdge && squares[i+1].classList.contains('bomb'))total ++
      // all rights // 98?
      if (i < 90 && !isLeftEdge && squares[i + width - 1].classList.contains('bomb'))total ++ 
      // below left
      if ( i < 90 && squares[i + width].classList.contains('bomb'))total++
      // below
      if ( i < 89 && !isRightEdge && squares[i+1+width].classList.contains('bomb'))total++
      // below right 

      squares[i].setAttribute('data',total)
      console.log(squares[i])
    }
  }

})