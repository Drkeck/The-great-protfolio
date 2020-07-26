import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Img1 from '../../assets/images/1.jpg'
import vid1 from '../../assets/Video/splintercell test.webm'

function About() {
return(
    <div>
        <div>
            <Jumbotron className="video-jumbo">
                <Container>
                    <h3 className="display-3 text-white">About</h3>
                    <p className="lead text-white">Here's a little bit about myself</p>
                    <video autoPlay loop id="myvid">
                        <source src={vid1} type="video/webm"></source>
                    </video>
                </Container>
            </Jumbotron>
            <div className="media container">
                <img src={Img1} className="w-25 rounded" alt=".."/>
                <div className="media-body">
                    <h2>Alexander Keckley</h2>
                    <h6>Coder, Editor, Friend</h6>
                    <p>My name is Alexander Keckley, and i am huge into Coding, Video editing, Live streaming, and meeting new people!
                        I am studying full stack development at UC Berkly Extension, there i have been making strides understanding how to build websites from front to back.
                         learning some of the industry standards and libraries and middleware that can help you achieve your vision.</p>
                    <p>Some of my skills are:</p>
                    <ul className="text-left">
                        <li> M.E.R.N. (Mango, Express, React, Node.js) </li>
                        <li> Davinci Resolve/Fusion </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)}

export default About;