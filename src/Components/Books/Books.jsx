import React from "react";
import style from './Books.module.css';
import {Button, Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";

let defaultImg = 'https://teploelement.ru/images/not_found.jpg';
let startIndex = 0;



const Books = (props) => {

    const loadMore = () => {
        startIndex+=10;
        props.LoadMore(props.query,startIndex);
    }

    return (
        <div style={{paddingBottom: '30px'}}>
            {props.totalItems !== 0 ? <div className={style.totalItems}>{props.totalItems} results</div> : <div></div>}
            <div className={style.books}>
                {props.books.map(b => <div className={style.bookCard} id={b.id}>
                        <NavLink to={'/books/' + b.id}>
                            <Card style={{width: '16rem'}}>
                                {b.volumeInfo.imageLinks ?
                                    <Card.Img variant="top" src={b.volumeInfo.imageLinks.smallThumbnail}
                                              style={{height: '300px'}}/>
                                    : <Card.Img variant="top" src={defaultImg} style={{height: '300px'}}/>
                                }
                                <Card.Body>
                                    <Card.Subtitle style={{marginBottom: '10px'}}>{b.volumeInfo.categories || ''}</Card.Subtitle>
                                    <Card.Title style={{marginBottom: '10px'}}>{b.volumeInfo.title || ''}</Card.Title>
                                    <Card.Text style={{marginBottom: '10px'}}>{b.volumeInfo.authors || ''}</Card.Text>
                                </Card.Body>
                            </Card>
                        </NavLink>
                    </div>
                )}
            </div>
            {props.totalItems !== 0 ? <Button onClick={loadMore} className={style.btn__more}>More</Button> : <div></div>}
        </div>

    );
}

export default Books;