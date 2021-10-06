import React from "react";
import style from './Header.module.css';
import {Button, DropdownButton, FormControl, InputGroup, Dropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";

let check = '';

const Header = (props) => {

    let inp = React.createRef();
    let getUsers = () => {
        if (inp.current.value && (inp.current.value !== check)) {
            props.setQuery(inp.current.value);
            props.getBooksThunk(inp.current.value,'All')
            check = inp.current.value;
        }

    }
    let getUsersEnter = (e) => {
        if (e.keyCode == 13) {
            getUsers();
        }

    }


    let changeSelect = (e) => {
        let categorie = e.target.value
        props.getBooksThunk(props.query, categorie)
    }

    let changeSort = (e) => {
        let sort = e.target.value;
        props.getBooksThunk(props.query, 'All', sort)
    }

    return (
        <div className={style.header__img}>
            <div className={style.bg__shadow}>
                <div className={style.header__title}>Search for books</div>
                <div className={style.header__input}>
                    <InputGroup className="mb-3" size="lg">
                        <FormControl ref={inp} onKeyDown={getUsersEnter}
                                     placeholder="search..."
                        />
                        <NavLink to={'/'} style={{display:'flex'}}>
                            <Button variant="success" id="button-addon1" onClick={getUsers}>
                                <i className='fas fa-search'></i>
                            </Button>
                        </NavLink>




                    </InputGroup>

                    <div className={style.select}>

                        <div className={style.categories}>
                            <label htmlFor="categories" className={style.label}>Categories</label>
                            <select onChange={changeSelect} name="categories" className={style.categories} >
                                <option value="All" selected>All</option>
                                <option value="Art">Art</option>
                                <option value="Biography">Biography</option>
                                <option value="Computers">Computers</option>
                                <option value="History">History</option>
                                <option value="Medical">Medical</option>
                                <option value="Poetry">Poetry</option>
                            </select>
                        </div>

                        <div className={style.sort}>
                            <label htmlFor="" className={style.label}>Sorting by</label>
                            <select name="" id="" onChange={changeSort}>
                                <option value="relevance" selected>relevance</option>
                                <option value="newest">newest</option>
                            </select>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
}

export default Header;