import { useCallback, useEffect, useState } from "react";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import words from "./wordList.json";
import './App.css';


function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {

  const [wordToGuess, setWordToGuess] = useState(getWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isWinner, isLoser])

  function resetGame() {
    setGuessedLetters([]);
    setWordToGuess(getWord());
  }


  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault();
      addGuessedLetter(key);
    }
    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler)
    }
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return

      e.preventDefault();
      resetGame();
    }
    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler)
    }
  }, [])

  return (
    <>
      <div className="game-title">Hangman.</div>
      <div className="game-container">
        <div className="left-container">
          <div className="drawing-container">
            <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
          </div>
          
        </div>
        <div className="right-container">
          <div className="word-container">
            <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
          </div>
            <Keyboard 
              disabled={isWinner || isLoser}
              activeLetters={guessedLetters.filter(letter => 
                wordToGuess.includes(letter)
              )}
              inactiveLetters={incorrectLetters}
              addGuessedLetter={addGuessedLetter}
            />
          <div className="status-message">
            {isWinner && 
              <>
                Nice. Press <div onClick={resetGame} className={`enter-btn`}>Enter</div> to play again
              </>
            }
            {isLoser && 
              <>
                Press <div onClick={resetGame} className={`enter-btn`}>Enter</div> to play again
              </>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
