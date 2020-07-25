import React from 'react'
import {Nav, NavItem} from 'reactstrap'

function Footer() {
    return(
        <footer className="bg-info fixed-bottom py-4 text-center border-top border-dark rounded-top">
            <Nav className="d-flex">
                <NavItem className="mx-auto px-2 text-light">Twitter</NavItem>
                <NavItem className="mx-auto px-2 text-light">LinkedIn</NavItem>
                <NavItem className="mx-auto px-2 text-light">GitHub</NavItem>
                <NavItem className="mx-auto px-2 text-light">Email@Host.Com</NavItem>
                <NavItem className="mx-auto px-2 text-light">Phone Number</NavItem>
            </Nav>
        </footer>
    )
}

export default Footer;