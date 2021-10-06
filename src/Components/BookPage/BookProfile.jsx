import React from "react";
import axios from "axios";
import Preloader from "../Preloader/Preloader";
import style from './BookProfile.module.css'


const BookProfile = (props) => {
    if (!props.bookProfile) {
        return <Preloader />
    }
    return <div className={style.profile}>
        <div className={style.profile__img}>
            <img src={props.bookProfile.volumeInfo.imageLinks.thumbnail} alt=""/>
        </div>
        <div className={style.profile__info}>
            <div className={style.profile__categories}>{props.bookProfile.volumeInfo.categories}</div>
            <div className={style.profile__title}>{props.bookProfile.volumeInfo.title}</div>
            <div className={style.profile__authors}>{props.bookProfile.volumeInfo.authors}</div>
            <div className={style.profile__description}>{props.bookProfile.volumeInfo.description}</div>
        </div>



    </div>
}


export default BookProfile;