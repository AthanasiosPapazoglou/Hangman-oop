

let puzzleWebPrint = document.querySelector('#puzzle-value')
let guessesWebPrint = document.querySelector('#remaining-value') 

let game1 = new hangmanClass('cat house', 5)
let init = []
game1.word.forEach(function(letter){
  if(letter != ' '){
  init.push('*')}
  else{
    init.push(' ')
  }
})
puzzleWebPrint.textContent = init.join('')



window.addEventListener('keypress', function(e){
    let guess = String.fromCharCode(e.charCode)
    if(game1.status ==='playing'){
    game1.guessMaking(guess)
    puzzleWebPrint.textContent = game1.getPuzzle()
    guessesWebPrint.textContent = game1.remainingGuesses
    game1.statusRecalculation()
    console.log(game1.status)
    }
    guessesWebPrint.textContent = game1.stateOfGame()
    
})

let request = new XMLHttpRequest()


request.addEventListener('readystatechange', (e) => {
   if(e.target.readyState === 4){
      let data = JSON.parse(e.target.responseText)
      console.log(data)
     }
})

request.open('GET','http://puzzle.mead.io/puzzle')
request.send()



