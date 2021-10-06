import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";




let initialState = {
    books: [],
    totalItems: 0,
    isFound : true,
    isFetching : false,
    startIndex: 0,
    query: '',
}




const booksReducer = (state = initialState, action) => {
    switch (action.type){
        case 'get-books': {
            return {...state, books: [...action.books], isFound: true}
        }
        case 'is-found': {
            return {...state, isFound: false}
        }
        case 'toggle-preloader': {
            return {...state, isFetching: action.bol}
        }
        case 'total-items': {
            return {...state, totalItems: action.total}
        }
        case 'load-more': {
            return {...state, startIndex: action.startIndex}
        }
        case 'set-query': {
            return {...state, query: action.query}
        }
        default: {
            return state
        }
    }
}


export const getBooksAC = (books) => ({type: 'get-books', books});
export const setIsFoundAC = () => ({type: 'is-found'});
export const togglePreloader = (bol) => ({type: 'toggle-preloader',bol});
export const totalItemsAC = (total) => ({type: 'total-items',total});
export const loadMoreAC = (startIndex) => ({type: 'load-more', startIndex});
export const setQueryAC = (query) => ({type: 'set-query', query});


export const LoadMoreThunk = (query,startIndex) => {
    return (dispatch) => {
        dispatch(loadMoreAC(startIndex))
        dispatch(togglePreloader(true))
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex}`)
            .then(response => {
                dispatch(togglePreloader(false))
                if (response.data.items !== undefined) {
                    dispatch(totalItemsAC(response.data.totalItems));
                    dispatch(getBooksAC(response.data.items));
                } else {
                    dispatch(setIsFoundAC())
                }
            })
    }
}


export const getBooksThunk = (query, categorie, sort) => {
    return (dispatch) => {
        dispatch(togglePreloader(true))
        if (categorie == 'All'){
            if (sort == 'newest'){
                axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
                    .then(response => {
                        dispatch(togglePreloader(false))
                        if (response.data.items !== undefined) {
                            dispatch(totalItemsAC(response.data.totalItems));
                            dispatch(getBooksAC(response.data.items));
                        } else {
                            dispatch(setIsFoundAC())
                        }

                    });
            } else{
                axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=newest`)
                    .then(response => {
                        dispatch(togglePreloader(false))
                        if (response.data.items !== undefined) {
                            dispatch(totalItemsAC(response.data.totalItems));
                            dispatch(getBooksAC(response.data.items));
                        } else {
                            dispatch(setIsFoundAC())
                        }

                    });
            }

        } else {
            switch (categorie){
                case 'Art':{
                    dispatch(togglePreloader(true))
                    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
                        .then(response => {
                            dispatch(togglePreloader(false));
                            let filterArr = response.data.items.filter(function (item){
                                return item.volumeInfo.categories == 'Art';
                            })
                            if (filterArr.length !== 0){
                                dispatch(totalItemsAC(filterArr.length));
                                dispatch(getBooksAC(filterArr));

                            } else{
                                dispatch(setIsFoundAC());
                            }

                        })
                    break;

                }
                case 'Biography':{
                    dispatch(togglePreloader(true))
                    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
                        .then(response => {
                            dispatch(togglePreloader(false));
                            let filterArr = response.data.items.filter(function (item){
                                return item.volumeInfo.categories == 'Biography';
                            })
                            if (filterArr.length !== 0){
                                dispatch(totalItemsAC(filterArr.length));
                                dispatch(getBooksAC(filterArr));

                            } else{
                                dispatch(setIsFoundAC());
                            }

                        })
                    break;

                }
                case 'Computers':{
                    dispatch(togglePreloader(true))
                    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
                        .then(response => {
                            dispatch(togglePreloader(false));
                            let filterArr = response.data.items.filter(function (item){
                                return item.volumeInfo.categories == 'Computers';
                            })
                            if (filterArr.length !== 0){
                                dispatch(totalItemsAC(filterArr.length));
                                dispatch(getBooksAC(filterArr));

                            } else{
                                dispatch(setIsFoundAC());
                            }

                        })
                    break;

                }
                case 'History':{
                    dispatch(togglePreloader(true))
                    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
                        .then(response => {
                            dispatch(togglePreloader(false));
                            let filterArr = response.data.items.filter(function (item){
                                return item.volumeInfo.categories == 'History';
                            })
                            if (filterArr.length !== 0){
                                dispatch(totalItemsAC(filterArr.length));
                                dispatch(getBooksAC(filterArr));

                            } else{
                                dispatch(setIsFoundAC());
                            }

                        })
                    break;

                }
                case 'Medical':{
                    dispatch(togglePreloader(true))
                    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
                        .then(response => {
                            dispatch(togglePreloader(false));
                            let filterArr = response.data.items.filter(function (item){
                                return item.volumeInfo.categories == 'Medical';
                            })
                            if (filterArr.length !== 0){
                                dispatch(totalItemsAC(filterArr.length));
                                dispatch(getBooksAC(filterArr));

                            } else{
                                dispatch(setIsFoundAC());
                            }

                        })
                    break;

                }
                case 'Poetry':{
                    dispatch(togglePreloader(true))
                    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
                        .then(response => {
                            dispatch(togglePreloader(false));
                            let filterArr = response.data.items.filter(function (item){
                                return item.volumeInfo.categories == 'Poetry';
                            })
                            if (filterArr.length !== 0){
                                dispatch(totalItemsAC(filterArr.length));
                                dispatch(getBooksAC(filterArr));

                            } else{
                                dispatch(setIsFoundAC());
                            }

                        })
                    break;

                }
            }
        }
    }
}


export default booksReducer;