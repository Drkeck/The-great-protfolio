import React from 'react'
import Navigation from '../nav'

function Header(props) {
    //props handed down from app.js so we can pass it to the NAV section
    const {
        categories = [],
        currentCategory,
        setCurrentCategory
    } = props;
    return(
        <header className="bg-dark">
            <Navigation categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}></Navigation>
        </header>
    )
}

export default Header;