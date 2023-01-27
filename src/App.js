import KeyboardKey from "./components/KeyboardKey";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Cities, KeyboardKeys } from "./constants";
import { getFullDate } from "./helpers";
import { reducer, initialState } from "./stores";
import { useReducer } from "react";

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

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div>
      <p>{state.chosenCity}</p>
      <p>{state.currentCity}</p>

      {visualKeys}
    </div>
  );
}

export default App;
