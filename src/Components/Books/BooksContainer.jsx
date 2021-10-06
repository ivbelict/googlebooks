import React from "react";
import Books from "./Books";
import {connect} from "react-redux";
import Preloader from "../Preloader/Preloader";
import {getBooksThunk, loadMoreAC, LoadMoreThunk} from "../../Redux/booksReducer";
import style from './Books.module.css';


class BooksContainer extends React.Component{


    render(){
        if (this.props.isFound){
            return <div>
                {this.props.isFetching ?
                    <Preloader />
                    :<Books books={this.props.books}
                            totalItems={this.props.totalItems}
                            LoadMore={this.props.LoadMoreThunk}
                            query={this.props.query}

                    />
                }
            </div>


        } else {
            return <div className={style.noResults}>No results</div>
        }

    }
}


let mapStateToProps = (state) => {
    return {
        books: state.booksPage.books,
        isFound: state.booksPage.isFound,
        isFetching: state.booksPage.isFetching,
        totalItems: state.booksPage.totalItems,
        query: state.booksPage.query,
    }
}

export default connect(mapStateToProps,{
    LoadMoreThunk,
})(BooksContainer);