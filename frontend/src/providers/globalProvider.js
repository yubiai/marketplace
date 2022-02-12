import { CardActions } from "@material-ui/core";
import { createContext, useContext, useReducer } from "react";


const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

// Initial State

const initialState = {
    prices: "",
    search: ""
}

// Reducers
const reducer = (state, action) => {
    console.log("arranco")
    console.log(action)
    switch (action.type) {
        case "REFRESHPRICES":
            console.log(state, "state")
            console.log(action.payload)
            return {
                ...state,
                prices: action.payload
            }
        case "SEARCH":
            return {
                ...state,
                search: state.search
            }
        default:
            throw new Error("Action Fail")
    }
}

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalDispatchContext.Provider value={dispatch}>
            <GlobalStateContext.Provider value={state} >
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    )
}


export const useGlobal = () => useContext(GlobalStateContext)
export const useDispatchGlobal = () => useContext(GlobalDispatchContext)
