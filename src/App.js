import './App.css';
import BooksContainer from "./Components/Books/BooksContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {BrowserRouter, Route} from "react-router-dom";
import BookPage from "./Components/BookPage/BookProfileContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className="wrap">
                <HeaderContainer/>
                {/*<BooksContainer/>*/}
                <Route exact path="/" render={() => <BooksContainer store={props.store}/>}/>
                <Route path="/books/:bookId?" render={() => <BookPage store={props.store}/>}/>


            </div>
        </BrowserRouter>

    );
}

export default App;
