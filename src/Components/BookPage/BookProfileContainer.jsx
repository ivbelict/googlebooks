import React from "react";
import BookProfile from "./BookProfile";
import {connect} from "react-redux";
import axios from "axios";
import {getBookProfileThunk} from "../../Redux/bookProfileReducer";
import { withRouter } from "react-router-dom";


class BookProfileContainer extends React.Component{
    componentDidMount() {
        let bookId = this.props.match.params.bookId;
        this.props.getBookProfileThunk(bookId)
    }

    render(){
        return <BookProfile bookProfile={this.props.bookProfile}/>
    }
}

let mapStateToProps = (state) => {
    return {
        bookProfile: state.bookProfile.bookProfile
    }
}

let withRoaterBookProfileContainer = withRouter(BookProfileContainer);

export default connect(mapStateToProps,{
    getBookProfileThunk
})(withRoaterBookProfileContainer);
