import React from "react";
import style from './Header.module.css';
import {Button, DropdownButton, FormControl, InputGroup, Dropdown} from "react-bootstrap";
import {connect} from "react-redux";
import Header from "./Header";
import {getBooksThunk, setQueryAC} from "../../Redux/booksReducer";


class HeaderContainer extends React.Component{
    render(){
        return <Header getBooksThunk={this.props.getBooksThunk}
                       setQuery={this.props.setQueryAC}
                       query={this.props.query}
                       books={this.props.books}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        books: state.booksPage.books,
        query: state.booksPage.query
    }
}


export default connect(mapStateToProps,{
    getBooksThunk,
    setQueryAC
})(HeaderContainer);

