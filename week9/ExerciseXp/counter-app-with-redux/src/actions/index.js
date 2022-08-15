export const increase = count => {
    return {
        type: "INCREASE_COUNT",
        payload: count++
    }
}

export const decrease = count => {
    return {
        type: "DECREASE_COUNT",
        payload: count--
    }
}