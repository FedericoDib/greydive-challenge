import React from 'react'
import { NavLink } from 'react-router-dom'
import db from '../../db.json';
import Footer from '../footer/Footer';
import './Home.scss';

function Home() {

    const links = [];
    
    db.map((client) => (
        links.push(client.cliente)
    ));

    return (
        <>
            <div className="home__container">
                <h1 className="home__container-title">Greydive Challenge</h1>
                <ul className="home__container-list">
                    {links.map((link, index) => (
                        <li className="home__container-list-item" key={index}>
                            <NavLink to={`/${link}`} className="home__container-list-item-link">{link}</NavLink>
                        </li>
                    ))}
                </ul>
                <Footer />
            </div>
        </>
    )
}

export default Home