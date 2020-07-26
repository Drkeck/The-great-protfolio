import React from 'react'
import {Nav, NavItem} from 'reactstrap'

function Footer() {
    return(
        <footer className="bg-info py-3 text-center">
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