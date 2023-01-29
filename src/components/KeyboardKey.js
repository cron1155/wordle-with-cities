import { useMemo } from "react"




function KeyboardKey({ keyName, onClick }) {

    function handleOnClick() {
        onClick(keyName)
    }

    return (
        <button className="keyboardKey" onClick={handleOnClick}>
            {keyName}
        </button>
    )
}

export default KeyboardKey