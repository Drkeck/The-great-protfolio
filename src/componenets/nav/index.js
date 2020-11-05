import React, {useEffect, useState} from 'react'
import {Navbar, NavItem, NavLink, Nav, NavbarToggler, Collapse, NavbarBrand} from 'reactstrap'

function Navigation(props) {
    //props passed down from APP to alter data
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const {
        categories = [],
        currentCategory,
        setCurrentCategory
    } = props;
    // used to tell the user what catefory they're in, when tabbed out
    useEffect(() => { document.title = "Portfolio " + currentCategory.name }, [currentCategory])

    // maped return so we don't repeat ourselves.
    return(
        <Navbar expand="md" dark>
            <NavbarBrand className="text-nowrap text-white mx-2 font-weight-bolder">Alexander Keckley</NavbarBrand>
            <NavbarToggler onClick={toggle} className="mr-2"/>
            <Collapse isOpen={isOpen} navbar>
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
            </Collapse>
        </Navbar>
    )
}

export default Navigation