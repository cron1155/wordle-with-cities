import KeyboardKey from "./components/KeyboardKey";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Cities, KeyboardKeys, MaxTries } from "./constants";
import { getFullDate } from "./helpers";
import { reducer, initialState } from "./stores";
import { useReducer } from "react";
import WordTry from "./components/WordTry";

import './global.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [err, setErr] = useState("")

  const handleKeyClick = useCallback((keyName) => {
    if (keyName === "ENTER") {
      dispatch({
        type: "ENTER", onErr: (msg) => {
          setErr(msg)
        }
      })
    } else if (keyName === "DELETE") {
      dispatch({ type: "REMOVE_LETTER" })

    } else {
      dispatch({ type: "ADD_LETTER", value: keyName })
    }
  }, [state])

  const visualKeys = useMemo(() => {
    return [...KeyboardKeys, "ENTER", "DELETE"].map((keyName, index, arr) => {
      if (index === arr.length - 8) {
        return <KeyboardKey key={"ENTER"} keyName={"ENTER"} onClick={handleKeyClick} />
      } else if (keyName !== "ENTER") {
        return <KeyboardKey key={keyName} keyName={keyName} onClick={handleKeyClick} />
      }
    })
  }, [])

  const triesList = useMemo(() => {
    return [...Array(MaxTries)].map((_, index) => {

      if (state.currentTries[index]) {
        return <WordTry word={state.currentTries[index]} length={state.chosenCity.length} checkWord={true} targetWord={state.chosenCity} />
      }
      else if (state.currentTries.length === index) {
        return <WordTry word={state.currentCity} length={state.chosenCity.length} />
      }
      else {
        return <WordTry word={""} length={state.chosenCity.length} />
      }
    })
  }, [state.currentTries, state.currentCity, state.choosenCity])


  useEffect(() => {
    let timeoutId;
    if (err) {
      timeoutId = setTimeout(() => setErr(""), 2000)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [err])

  return (
    <div>
      <div className="header">
        <div className="logo">Wordle with Cities</div>
      </div>

      <div className="body">
        <div className="errBubble">
          {err}
        </div>
        <div className="triesList">
          {triesList}
        </div>

        <div className="keyboardKeys">
          {visualKeys}
        </div>
      </div>
    </div>

  );
}

export default App;
