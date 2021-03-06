

import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";

import Search from '../../components/search/search'
import Breadcrumb from '../../components/breadcrumb/breadcrumb';

import { getItemsApi } from "../../services/items.service";

import "./results.scss"

const ItemComponent = React.lazy(() => import('./components/item/item'))

export default function Results() {
    const [items, setItems] = useState(null);
    let search = new URLSearchParams(useLocation().search).get("search");

    useEffect(() => {
        getItemsApi(search).then((res) => {
            if(res.items) {
                setItems(res)
            }
        });
    }, [search])
    
    return (
        <section className="results">
            <div className="results__search">
                <Search/>
            </div>
            <main className="results__body">
                <div className='results__body__breadcrumb'>
                    {items && <Breadcrumb categories={items.categories}/> }
                </div>
                <div className='results__body__items'>
                    {items && items.items.map((item) => {
                        return <ItemComponent data={item} key={item['id']}/>
                    })}
                </div>
            </main>
        </section>
    )
}