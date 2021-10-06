import React from "react";
import loader from './preloader.gif';
import style from './Preloader.module.css';

const Preloader = () => {
    return <img className={style.loader} src={loader} alt=""/>
}

export default Preloader;