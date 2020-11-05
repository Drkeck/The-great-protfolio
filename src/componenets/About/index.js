import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Img1 from '../../assets/images/1.jpg'
import vid1 from '../../assets/Video/splintercell test.webm'

function About() {
    // straight forward about section all the interesting stuff in this section is going on in the CSS file.
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
            <div className="row container text-white">
                <img src={Img1} className="h-25 shadow col-md m-3" style={{ maxWidth: 360, padding: 0}} alt=".."/>
                <div className="col container">
                    <h2>Alexander Keckley</h2>
                    <h6>Coder, Editor, Friend</h6>
                    <p>My name is Alexander Keckley, and i am huge into Coding, Video editing, Live streaming, and meeting new people!
                        I am studied full stack development at UC Berkley Extension, understanding how to build websites from front to back.
                        I am proficient in MERN web development, and understand many tools and technologies such as Redux, Socket.io, graphQL, SQL, Jquery, React, Node.js, Express.js, MangoDB, Materialize, and Bootstrap.
                        
                        Also a self taught video editor, using my skills to add visual effects, balance audio, add subtitles, and introduce multiple tracks of effects/clips to tell a story or show off a event.
                        </p>
                    <h5>Some of my skills are:</h5>
                    <div className="container">
                        <div className="row justify-content-center">
                            <ul className="col-sm-6 col-md-4">
                                <h5>Coding Skills:</h5>
                                <li>React and Node.js</li>
                                <li>SQL and MongoDB</li>
                                <li>Css/HTML</li>
                                <li>Rest Api's And GraphQL</li>
                                <li>Libraries like Jquery, moment.js, and more. </li>
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