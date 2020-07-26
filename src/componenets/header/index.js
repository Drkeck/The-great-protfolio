import React from 'react'
import Navigation from '../nav'

function Header(props) {
    const {
        categories = [],
        currentCategory,
        setCurrentCategory
    } = props;
    return(
        <header className="d-flex justify-content-start align-items-center bg-dark">
            <div>
                <a href="/" className="mx-2 font-weight-bolder">Drkeck</a>
            </div>
            <Navigation categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}></Navigation>
        </header>
    )
}

export default Header;