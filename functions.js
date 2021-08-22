class hangmanClass{
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    getPuzzle(){
        let puzzle = ''
    
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter ===' '){
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
    
        return puzzle
    }
    guessMaking(currentGuess){
        if(!this.guessedLetters.includes(currentGuess)){
          this.guessedLetters.push(currentGuess)
          if(!this.word.includes(currentGuess)){
            this.remainingGuesses--
          }else{
          this.getPuzzle()
          }
        }
        else{
            console.log('this Letter has already been tested')
        }
    }
    statusRecalculation(){
        if(this.remainingGuesses <= 0){
           this.status = 'failed'
        }
        else if(!this.getPuzzle().includes('*')){
            this.status = 'finished'
        }
        else{
            this.status = 'playing'
        }
    }
    stateOfGame(){
        if(this.status === 'playing'){
            return `Attempts Remaining: ${this.remainingGuesses}`
        }
        else if(this.status === 'finished'){
            return `Congratulations! You've found the word!`
        }
        else if(this.status === 'failed'){
            return `Nice try! The word was: ${this.word.join('')}`
        }
    }
    
}

/*
let Hangman = function(word, remainingGuesses){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = ''
    
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter ===' '){
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

Hangman.prototype.guessMaking = function(currentGuess){
    if(!this.guessedLetters.includes(currentGuess)){
      this.guessedLetters.push(currentGuess)
      if(!this.word.includes(currentGuess)){
        this.remainingGuesses--
      }else{
      this.getPuzzle()
      }
    }
    else{
        console.log('this Letter has already been tested')
    }
}


Hangman.prototype.statusRecalculation = function(){
    if(this.remainingGuesses <= 0){
       this.status = 'failed'
    }
    else if(!this.getPuzzle().includes('*')){
        this.status = 'finished'
    }
    else{
        this.status = 'playing'
    }
}

Hangman.prototype.stateOfGame = function(){
    if(this.status === 'playing'){
        return `Attempts Remaining: ${this.remainingGuesses}`
    }
    else if(this.status === 'finished'){
        return `Congratulations! You've found the word!`
    }
    else if(this.status === 'failed'){
        return `Nice try! The word was: ${this.word.join('')}`
    }
}
*/