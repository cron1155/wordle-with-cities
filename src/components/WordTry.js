import { useMemo } from "react"

import style from './WordTry.module.css'


function WordTry({ word, length, checkWord, targetWord }) {

    const words = useMemo(() => {
        return [...Array(length)].map((_, index) => {
            if (word[index]) {
                if (checkWord) {
                    if (word[index].toLowerCase() === targetWord[index].toLowerCase()) {
                        return <div key={word + index} className={`${style.letter} ${style.letterCorrectSpot}`}>{word[index]}</div>
                    } else if (targetWord.toLowerCase().indexOf(word[index].toLowerCase()) != -1) {
                        return <div key={word + index} className={`${style.letter} ${style.letterWrongSpot}`}>{word[index]}</div>
                    } else {
                        return <div key={word + index} className={`${style.letter} ${style.letterNotInWord}`}>{word[index]}</div>
                    }
                }

                return <div key={word + index} className={`${style.letter}`}>{word[index]}</div>
            }
            else
                return <div key={word + index} className={style.letter}>.</div>
        })
    }, [word, checkWord, targetWord])

    return <div className={style.word}>
        {words}
    </div>
}

export default WordTry