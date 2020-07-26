import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Img1 from '../../assets/images/1.jpg'
import vid1 from '../../assets/Video/splintercell test.webm'

function About() {
    // straigh forward about section all the interesting stuff in this section is going on in the CSS file.
return(
    <div>
        <div>
            <Jumbotron className="video-jumbo">
                <Container>
                    <h3 className="display-3 text-white">About</h3>
                    <video autoPlay loop id="myvid">
                        <source src={vid1} type="video/webm"></source>
                    </video>
                </Container>
            </Jumbotron>
            <div className="media container text-white">
                <img src={Img1} className="w-25 rounded border border-dark shadow mt-5" alt=".."/>
                <div className="media-body container">
                    <h2>Alexander Keckley</h2>
                    <h6>Coder, Editor, Friend</h6>
                    <p>My name is Alexander Keckley, and i am huge into Coding, Video editing, Live streaming, and meeting new people!
                        I am studying full stack development at UC Berkly Extension, there i have been making strides understanding how to build websites from front to back.
                         learning some of the industry standards and libraries and middleware that can help you achieve your vision.</p>
                    <h5>Some of my skills are:</h5>
                    <div className="container">
                        <div className="row justify-content-center">
                            <ul className="col-sm-6 col-md-4">
                                <h5>Coding:</h5>
                                <li>Node.js</li>
                                <li>SQL and MongoDB</li>
                                <li>Css/HTML</li>
                                <li>Api's and server</li>
                                <li>Jquery</li>
                            </ul>
                            <ul className="col-sm-6 col-md-4">
                                <h5>Video Editing:</h5>
                                <li> Davinci Resolve </li>
                                <li> Fusion VFX </li>
                                <li> Audio Mixing </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}

export default About;