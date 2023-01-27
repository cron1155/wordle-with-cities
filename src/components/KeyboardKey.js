import { useMemo } from "react"




function KeyboardKey({ keyName, onClick }) {



    function handleOnClick() {
        onClick(keyName)
    }



    return (
        <button onClick={handleOnClick}>
            {keyName}
        </button>
    )
}

export default KeyboardKey