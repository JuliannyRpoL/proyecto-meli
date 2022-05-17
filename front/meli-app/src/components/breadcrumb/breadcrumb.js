import React, { useState } from 'react'
import { Link } from "react-router-dom"

import logo from "../../assets/img/logo.png";
import searchImg from "../../assets/img/search.png";

import "./breadcrumb.scss"

export default function Breadcrumb(props) {
    const { categories } = props

    const lastElement = categories.length - 1;

    return (
        <nav className="breadcrumb">
            {categories ? categories.map((category, idx) => {
                return idx === lastElement ?
                 <span className="breadcrumb__category breadcrumb__category--last" key={idx}>{category}</span> :
                 <span className="breadcrumb__category" key={idx}>{category + ' > '}</span>
            }) : null}
        </nav>
    )
}
