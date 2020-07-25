import React from 'react'
import Navigation from '../nav'

function Header(props) {
    const {
        categories = [],
        currentCategory,
        setCurrentCategory
    } = props;
    return(
        <header>
            <a href="/" className="float-left mx-5 my-2 font-weight-bolder">Portfolio Layout</a>
            <Navigation categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}></Navigation>
        </header>
    )
}

export default Header;