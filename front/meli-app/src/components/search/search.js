import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

import logo from "../../assets/img/logo.png";
import searchImg from "../../assets/img/search.png";

import "./search.scss"

export default function Search() {
    const [ search, setSearch ] = useState("");
    const navigate = useNavigate();

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            navigate(`/items?search=${search}`)
        }
    }
    
    return (
        <header className="search">
            <div className="search__content">
                <Link className="search__content__logo" to="/" aria-label='ir a home'>
                    <img src={logo} alt="logo"></img>
                </Link>
                <div className="search__content__input" role="search">
                    <input 
                        placeholder='Nunca dejes de buscar'
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                        onKeyDown={(e) => handleKeyDown(e)}
                    ></input>
                    <Link 
                        className="search__content__input__btn"
                        to={`/items?search=${search}`}
                        aria-label="Buscar"
                    >
                        <figure className="search__content__input__btn__img">
                            <img src={searchImg} alt="buscar"></img>
                        </figure>
                    </Link>
                </div>
            </div>
        </header>
    )
}
