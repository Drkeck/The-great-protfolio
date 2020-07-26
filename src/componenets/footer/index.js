import React from 'react'
import {Nav} from 'reactstrap'

function Footer() {
    // not too much going on here, just some footer based links.
    return(
        <footer className="bg-info py-3 text-center">
            <Nav className="d-flex">
                <a className="mx-auto px-2 text-light" href="https://twitter.com/Doc_keck">Twitter</a>
                <a className="mx-auto px-2 text-light" href="https://www.linkedin.com/in/alexander-keckley-9957b41a3/">LinkedIn</a>
                <a className="mx-auto px-2 text-light" href="https://github.com/Drkeck">GitHub</a>
                <p className="mx-auto px-2 text-light">k3ckl3y.a@gmail.com</p>
            </Nav>
        </footer>
    )
}

export default Footer;