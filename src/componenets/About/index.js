import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Img1 from '../../assets/images/1.jpg'

function About() {
return(
    <div>
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3 text-white">About Me</h1>
                    <p className="lead text-white">Here's a little bit about myself</p>
                    <br />
                </Container>
            </Jumbotron>
            <div className="media container">
                <img src={Img1} className="w-25 rounded" alt=".."/>
                <div className="media-body">
                    <h2>Alexander Keckley</h2>
                    <h6>Coder, Editor, Friend</h6>
                    <p>My name is Alexander Keckley, and i am huge into Coding, Video editing, Live streaming, and meeting new people!</p>
                    <p>I am studying full stack development at UC Berkly Extension, there i have been making strides understanding how to build websites from front to back.
                         learning some of the industry standards and libraries and middleware that can help you achieve your vision.</p>
                    <p>Some of my skills are:</p>
                    <ul>
                        <li> M.E.R.N. (Mango, Express, React, Node.js) </li>
                        <li> Davinci Resolve/Fusion </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)}

export default About;