import axios from "axios";

let initialState = {
    bookProfile: null
}



const bookProfileReducer = (state = initialState, action) => {
    switch (action.type){
        case 'get-book-profile': {
            return {...state, bookProfile: action.book}
        }
        default: {
            return state
        }
    }
}


export const getBookProfileAC = (book) => ({type: 'get-book-profile', book});



export const getBookProfileThunk = (bookId) => {
    return (dispatch) => {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
            .then(response => {
                dispatch(getBookProfileAC(response.data))
            })

    }
}

export default bookProfileReducer;