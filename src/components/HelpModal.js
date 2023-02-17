import { MaxTries } from "../constants"
import WordTry from "./WordTry"


function HelpModal({ chosenCity }) {
    return (<><p>Guess the city in {MaxTries} tries.</p>
        <p>Each guess must be a valid {chosenCity.length} letter city.</p>
        <h4>Examples</h4>

        <WordTry word={"DOLJ"} length={"DOLJ".length} checkWord={true} targetWord={"CLUJ"} />

        <p><b>J</b> is in the correct spot</p>
        <p><b>L</b> is in the word but the wrong spot</p>
        <p><b>D & O</b> is not in the word in any spot</p>
    </>)
}

export default HelpModal