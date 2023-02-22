import { MaxTries } from "../constants"
import { useModal } from "./Modal"
import WordTry from "./WordTry"


function HelpModal({ chosenCity }) {
    const [_, setModal] = useModal()

    return (<div><p>Guess what Romanian city is in {MaxTries} tries.</p>
        <p>Each guess must be a valid {chosenCity.length} letter city.</p>
        <h4>Example</h4>

        <WordTry word={"DOLJ"} length={"DOLJ".length} checkWord={true} targetWord={"CLUJ"} />

        <p><b>J</b> is in the correct spot</p>
        <p><b>L</b> is in the word but the wrong spot</p>
        <p><b>D & O</b> is not in the word in any spot</p>

        <button onClick={() => {
            setModal({
                enabled: false,
                title: "",
                children: undefined
            })
        }} className="green">PLAY NOW</button>
    </div>)
}

export default HelpModal