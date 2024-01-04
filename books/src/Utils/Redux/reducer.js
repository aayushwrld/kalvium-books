const initialState = {
    books: [],
    searchStr: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) { 
        case "FETCH":
            return {
                ...state,books:action.payload
            }
        default:
            return state;
    }
}