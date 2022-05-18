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
            <main className="item-description__body">
                <div className='results__body__breadcrumb'>
                    {item ? <Breadcrumb categories={item.categories}></Breadcrumb> : null }
                </div>
                <div className='item-description__body__item'>
                    {item ? <ItemDetails details={item}></ItemDetails> : null}
                </div>
            </main>
        </section>
    )
}