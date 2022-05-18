import React from 'react'
import Search from '../../components/search/search'
import "./home.scss"

export default function Home() {
    
    return (
        <section className="home">
            <div className="home__search">
                <Search/>
            </div>
        </section>
    )
}
