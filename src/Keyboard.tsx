import styles from "./Keyboard.module.css"

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]
  

type KeyboardProps = {
    disabled?: boolean
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}

export function Keyboard({ 
    activeLetters, 
    inactiveLetters, 
    addGuessedLetter, 
    disabled=false 
}: KeyboardProps) {
    return (
        <div className={styles["keyboard-container"]}>
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key);
                const isInactive = inactiveLetters.includes(key);
                const isDisabled = isInactive || isActive || disabled;

                return (
                    <div  
                        onClick={() => addGuessedLetter(key)}
                        className={`
                            ${styles.btn} 
                            ${isActive ? styles.active : ""}
                            ${isInactive ? styles.inactive : ""}
                            ${isDisabled ? styles.disabled : ""}`
                        } 
                        key={key}
                    >
                        <span>{key}</span>
                    </div>
                )
            })}
        </div>
    )
}
