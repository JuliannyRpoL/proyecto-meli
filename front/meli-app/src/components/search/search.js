import React, { useState } from 'react'
import { Link } from "react-router-dom"

import logo from "../../assets/img/logo.png";
import searchImg from "../../assets/img/search.png";

import "./search.scss"

export default function Search() {
    const [ search, setSearch ] = useState("");

    return (
        <nav className="search">
            <div className="search__content">
                <Link className="search__content__logo" to="/">
                    <img src={logo} alt="logo"></img>
                </Link>
                <div className="search__content__input">
                    <input 
                        placeholder='Nunca dejes de buscar'
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                    ></input>
                    <Link 
                        className="search__content__input__btn"
                        to={`/items?search=${search}`}
                    >
                        <figure className="search__content__input__btn__img">
                            <img src={searchImg} alt="buscar"></img>
                        </figure>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
