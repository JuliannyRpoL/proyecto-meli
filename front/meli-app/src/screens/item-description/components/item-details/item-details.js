

import React from 'react'

import "./item-details.scss"

export default function ItemDetails(props) {
    const { details } = props
    
    return (
        <article className="item-details">
            <div className="item-details__general">
                <figure className="item-details__general__img">
                    <img src={details.picture[0]} alt="foto producto"></img>
                </figure>
                <article className="item-details__general__description">
                    <h4>Descripción del producto</h4>
                    <p>{details.description}</p>
                </article>
            </div>
            <div className="item-details__info">
                <p className="item-details__info__condition">{details.condition === 'new' ? 'Nuevo' : 'Usado'}</p>
                <p className="item-details__info__title">{details.title}</p>
                <div className="item-details__info__price">
                    <p className="item-details__info__price__amount">$ {details.price.amount}</p>
                    <p className="item-details__info__price__decimals">{details.price.decimals}</p>
                </div>
                <button className="item-details__info__btn">Comprar</button>
            </div>
        </article>
    )
}