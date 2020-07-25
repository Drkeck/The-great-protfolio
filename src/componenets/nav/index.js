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
                <NavItem key={category.name} className="mr-auto" > 
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