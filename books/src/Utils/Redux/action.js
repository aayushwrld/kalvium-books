import { FETCH, SEARCH } from "./actionType";

export const storeFetchData = (data) => {
    // console.log(data)
    return {
        type: FETCH,
        payload: data
    }
}

export const storeSearchData = (data) => {
    console.log(data)
    return {
        type: SEARCH,
        payload: data
    }
}