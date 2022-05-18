import React from 'react'

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
