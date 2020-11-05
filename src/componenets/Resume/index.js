import React from 'react';
import { Container, Jumbotron, Card, CardTitle, CardText, Button} from 'reactstrap';

function Resume() {
    // Jumbotron and container for the white space on the page, imported cards too for style here.
    return(
        <div>
            <Jumbotron>
                <Container>
                    <h1 className="display-3">Resume</h1>
                    <h4 className="">My Skills</h4>
            <div className="">
                <p>Node.js</p>
                <p>Database: MongoDB SQL</p>
                <p>HTML, Javascript, Css</p>
                <p>libraries like: Jquery, BootStrap, moment.js</p>
                <p>Virtual Doms with React</p>
                <p>M.E.R.N. full stack structure</p>
            </div>
                </Container>
            </Jumbotron>
            <div className="container">
                <Card body>
                    <CardTitle>Download Resume Here</CardTitle>
                    <CardText></CardText>
                    <Button href="https://docs.google.com/document/d/1NRn6R1lbw27lBMFy45Gl_A--UkJw7daKU0XOPzRPOhM/edit?usp=sharing" download>Download</Button>
                </Card>
            </div>
        </div>
    )
}

export default Resume;