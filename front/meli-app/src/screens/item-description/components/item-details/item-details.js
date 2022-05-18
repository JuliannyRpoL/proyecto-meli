

import React, { useState } from 'react'

import "./item-details.scss"

export default function ItemDetails(props) {
    const { details } = props
    const [ showDescription, setShowDescription ] = useState(false);

    const decimals = details.price.decimals.toFixed(2).toString().split('.')[1]
    const amount = details.price.amount.toString().replace(/\B(?=(\d{3})+\b)/g, ".")

    function handleShowDescription() {
        setShowDescription(!showDescription)
    }
    
    return (
        <div className="item-details">
            <div className="item-details__general">
                <figure className="item-details__general__img">
                    <img src={details.picture} alt="foto producto"></img>
                </figure>
                <div className="item-details__general__description">
                    <button 
                        className="item-details__general__description__btn-show"
                        onClick={handleShowDescription}
                    >
                        {!showDescription ? 'Ver descripción' : 'Ocultar descripción'}
                    </button>
                    <aside className={
                        showDescription ? "item-details__general__description__info" :
                        "item-details__general__description__info--hide"
                    }>
                        <p className="item-details__general__description__info__title">Descripción del producto</p>
                        <p className="item-details__general__description__info__desc">{details.description}</p>
                    </aside>                   
                </div>
            </div>
            <div className="item-details__info">
                <p className="item-details__info__condition">{details.condition === 'new' ? 'Nuevo' : 'Usado'} - {details.sold_quantity} vendidos</p>
                <strong className="item-details__info__title">{details.title}</strong>
                <div className="item-details__info__price">
                    <span className="item-details__info__price__amount">$ {amount}</span>
                    <span className="item-details__info__price__decimals">{decimals}</span>
                </div>
                <button className="item-details__info__btn">Comprar</button>
            </div>
        </div>
    )
}