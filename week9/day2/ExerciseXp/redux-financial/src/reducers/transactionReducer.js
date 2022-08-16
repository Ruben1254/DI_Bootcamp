export const transactionReducer = (state, action) => {
    // let list = 
    switch (action.type){
        case "INSERT": 
            list.push(action.payload)
            return {list}
        case "UDAPTE":
            list[state.currentIndex] = action.payload
            return {list}
        case "UDAPTE-INDEX":
            return {list, currentIndex: action.payload}
        case "DELETE":
            list.splice(action.payload,1)
            return{list}
        default:
            return {...state}
    }
}