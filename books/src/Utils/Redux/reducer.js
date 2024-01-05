// ^ defining the initial state of the reducer
const initialState = {
    books: [],
    searchStr: '',
    userData:{}
}

// ^ giving switch cases, according to the action which is running
export const reducer = (state = initialState, action) => {
    switch (action.type) { 
        case "FETCH":
            return {
                ...state,books:action.payload
            }
        case "SEARCH":
            return {
                ...state,searchStr:action.payload
            }
        case "DATA":
            return {
                ...state, userData:action.payload
            }
        default:
            return state;
    }
}



