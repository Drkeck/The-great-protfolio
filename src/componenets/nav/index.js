import React, {useEffect} from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'

function Navigation(props) {
    //props passed down from APP to alter data
    const {
        categories = [],
        currentCategory,
        setCurrentCategory
    } = props;
    // used to tell the user what catefory they're in, when tabbed out
    useEffect(() => { document.title = "Portfolio " + currentCategory.name }, [currentCategory])

    // maped return so we don't repeat ourselves.
    return(
        <Nav>
            {categories.map((category) => (
                <NavItem key={category.name} className={` text-white ${currentCategory.name === category.name && 'text-primary'}`}> 
                    <NavLink onClick={()=>{
                        setCurrentCategory(category)
                    }} className="p-2">{category.name} 
                    </NavLink>
                </NavItem>
            ))}
        </Nav>
    )
}

export default Navigation