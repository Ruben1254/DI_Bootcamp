const initialState = { 
    counter: 0
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case "INCREASE_COUNT":
            return {counter: action.payload}
        case "DECREASE_COUNT" :
            return {counter: action.payload}
        default:
            return state
    }
}