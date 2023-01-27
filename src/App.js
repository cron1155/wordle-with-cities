import KeyboardKey from "./components/KeyboardKey";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Cities, KeyboardKeys, MaxTries } from "./constants";
import { getFullDate } from "./helpers";
import { reducer, initialState } from "./stores";
import { useReducer } from "react";
import WordTry from "./components/WordTry";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);


  const handleKeyClick = useCallback((keyName) => {
    if (keyName === "ENTER") {
      dispatch({ type: "ENTER" })
    } else if (keyName === "DELETE") {
      dispatch({ type: "REMOVE_LETTER" })

    } else {
      dispatch({ type: "ADD_LETTER", value: keyName })
    }
  }, [state])

  const visualKeys = useMemo(() => {
    return [...KeyboardKeys, "ENTER", "DELETE"].map((keyName) => {
      return <KeyboardKey key={keyName} keyName={keyName} onClick={handleKeyClick} />
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
    console.log(state)
  }, [state])

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {triesList}
      </div>

      <p>{state.chosenCity}</p>
      <p>{state.currentCity}</p>

      {visualKeys}
    </div>
  );
}

export default App;
