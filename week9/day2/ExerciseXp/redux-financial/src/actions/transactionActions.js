export const insert = (data) => {
    return {
        type: 'INSERT',
        payload: data
    }
}

export const udapte= (data) => {
    return {
        type: 'UDAPTE',
        payload: data
    }
}

export const deleteTrans = (id) => {
    return {
        type: 'DELETE',
        payload: id
    }
}

export const udapteIndex = (index) => {
    return {
        type: 'INSERT',
        payload: index
    }
}