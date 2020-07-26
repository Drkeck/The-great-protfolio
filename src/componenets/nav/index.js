import React, {useEffect} from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'

function Navigation(props) {
    const {
        categories = [],
        currentCategory,
        setCurrentCategory
    } = props;

    useEffect(() => { document.title = "Portfolio " + currentCategory.name }, [currentCategory])

    return(
        <Nav>
            {categories.map((category) => (
                <NavItem key={category.name} className={` text-white ${currentCategory.name === category.name && 'text-primary'}`}> 
                    <NavLink onClick={()=>{
                        setCurrentCategory(category)
                    }}>{category.name} 
                    </NavLink>
                </NavItem>
            ))}
        </Nav>
    )
}

export default Navigation