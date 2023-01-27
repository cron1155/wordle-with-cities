import { Cities } from "../constants";
import { getFullDate } from "../helpers";

export const initialState = {
    chosenCity: Cities[getFullDate() % Cities.length],
    currentCity: "",
    currentTries: [],
    win: false
}

export function reducer(state, action) {
    switch (action.type) {
        case "ADD_LETTER":
            return {
                ...state,
                currentCity: state.currentCity + action.value
            }
        case "REMOVE_LETTER":
            return {
                ...state,
                currentCity: state.currentCity.substring(0, state.currentCity.length - 1)
            }
        case "ENTER":
            if (state.currentCity.toLowerCase() === state.chosenCity.toLowerCase()) {
                return {
                    ...state,
                    win: true
                }
            } else {
                if (state.currentCity.length === state.chosenCity.length) {
                    return {
                        ...state,
                        currentTries: [...state.currentTries, state.currentCity]
                    }
                }
            }
        default:
            throw Error("Unknown Action!");
    }
}