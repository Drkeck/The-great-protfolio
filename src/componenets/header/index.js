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
        <header className="d-flex justify-content-start align-items-center bg-dark p-2">
            <div>
                <a href="/The-great-protfolio" className="text-nowrap text-white mx-2 font-weight-bolder">Alex Keckley</a>
            </div>
            <Navigation categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}></Navigation>
        </header>
    )
}

export default Header;