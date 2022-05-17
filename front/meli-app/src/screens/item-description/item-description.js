import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import Search from '../../components/search/search'
import ItemDetails from './components/item-details/item-details';
import Breadcrumb from '../../components/breadcrumb/breadcrumb';

import { getItemDetailsApi } from "../../services/items.service";

import "./item-description.scss"

export default function ItemDescription() {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect( () => {
        getItemDetailsApi(id).then((res) => {
            setItem(res['item'])
        });
    }, [id])
    
    return (
        <section className="item-description">
            <div className="item-description__search">
                <Search></Search>
            </div>
            <div className="item-description__body">
                {/* <div className='results__body__breadcrumb'>
                    {categories ? <Breadcrumb categories={categories}></Breadcrumb> : null }
                </div> */}
                <div className='item-description__body__item'>
                    {item ? <ItemDetails details={item}></ItemDetails> : null}
                </div>
            </div>
        </section>
    )
}