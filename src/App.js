import KeyboardKey from "./components/KeyboardKey";
import { useCallback, useMemo, useState } from "react";
import { KeyboardKeys } from "./constants";

function App() {

  const [currentInput, setCurrentInput] = useState("")



  const handleKeyClick = useCallback((keyName) => {
    setCurrentInput((prev) => prev + keyName)
  }, [])

  const visualKeys = useMemo(() => {
    return [...KeyboardKeys].map((keyName) => {
      return <KeyboardKey keyName={keyName} onClick={handleKeyClick} />
    })
  }, [])


  return (
    <div>
      {currentInput}
      {visualKeys}
    </div>
  );
}

export default App;
