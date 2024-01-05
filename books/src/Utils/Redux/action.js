// ^ importing required, action types
import { DATA, FETCH, SEARCH } from "./actionType";

// * adding action for storing data fetched
export const storeFetchData = (data) => {
    return {
        type: FETCH,
        payload: data
    }
}

// * adding action for search bar
export const storeSearchData = (data) => {
    return {
        type: SEARCH,
        payload: data
    }
}

// * adding action for form data
export const storeFormData = (data) => {
    return {
        type: DATA,
        payload: data
    }
}