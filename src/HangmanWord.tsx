type HangmanWordProps = {
    guessedLetters: string[];
    wordToGuess: string;
    reveal?: boolean;
    isWinner?: boolean;
}

export function HangmanWord({ guessedLetters, wordToGuess, reveal=false, isWinner=false }: HangmanWordProps) {

    return (
        <div className="word">
            {wordToGuess.split("").map((letter, index) => {
                let letterType = "letter";

                if (reveal) {
                    if (isWinner) {
                        letterType = "winner";
                    } else if (reveal && !guessedLetters.includes(letter)) {
                        letterType = "loser";
                    }
                }
            
                return (
                    <span className="underline" key={index}>
                        <span 
                            className={letterType}
                            style={{
                                visibility: 
                                    guessedLetters.includes(letter) || reveal
                                        ? "visible" 
                                        : "hidden",
                                animationDelay: isWinner ? `${index * 0.1}s` : "0s"
                            }}
                        >
                            {letter}
                        </span>
                        
                    </span>
                )
        })}
        </div>
    )
}
