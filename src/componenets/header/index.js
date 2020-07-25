import React from 'react'
import Navigation from '../nav'

function Header(props) {
    const {
        categories = [],
        currentCategory,
        setCurrentCategory
    } = props;
    return(
        <header className="d-flex justify-content-start align-items-center">
            <div>
                <a href="/" className="font-weight-bolder">Portfolio Layout</a>
            </div>
            <Navigation categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}></Navigation>
        </header>
    )
}

export default Header;