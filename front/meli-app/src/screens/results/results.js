

import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";

import Search from '../../components/search/search'
import Item from './components/item/item'

import { getItemsApi } from "../../services/items.service";

import "./results.scss"
import Breadcrumb from '../../components/breadcrumb/breadcrumb';

export default function Results() {
    const [items, setItems] = useState(null);
    const search = new URLSearchParams(useLocation().search).get("search");

    useEffect( () => {
        getItemsApi(search).then((res) => {
            setItems(res)
        });
    }, [search])
    
    return (
        <section className="results">
            <div className="results__search">
                <Search></Search>
            </div>
            <div className="results__body">
                <div className='results__body__breadcrumb'>
                    {items ? <Breadcrumb categories={items.categories}></Breadcrumb> : null }
                </div>
                <div className='results__body__items'>
                    {items && items.items.map((item) => {
                        return <Item data={item} key={item['id']}></Item>
                    })}
                </div>
            </div>
        </section>
    )
}