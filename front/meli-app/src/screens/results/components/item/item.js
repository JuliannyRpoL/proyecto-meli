import React from 'react'
import { useNavigate } from "react-router-dom";

import envio from "../../../../assets/img/shipping.png";

import "./item.scss"

export default function Item(props) {
    const { data } = props;
    const navigate = useNavigate();
    const amount = data.price.amount.toString().replace(/\B(?=(\d{3})+\b)/g, ".")
    
    return (
        <article className="item" onClick={() => {
            navigate(`/items/${data.id}`);
        }}>
            <div className="item__info">
                <figure className="item__info__img">
                    <img src={data.picture} alt="imagen producto"></img>
                </figure>
                <div className="item__info__data">
                    <div className="item__info__data__price">
                        <p>$ {amount}</p>
                        { data.free_shipping ? 
                            <figure className="item__info__data__price__shipping">
                                <img src={envio} alt="envío"></img>
                            </figure> : null   
                        }                    
                    </div>
                    <p className="item__info__data__title">
                        {data.title} {data.condition === 'new' ? 'Nuevo' : 'Usado'}</p>
                </div>
            </div>
            <div className="item__state">
                <p className="item__state__data">{data.state}</p>
            </div>
        </article>
    )
}