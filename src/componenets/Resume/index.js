import React from 'react';
import { Container, Jumbotron, Card, CardTitle, CardText, Button} from 'reactstrap';

function Resume() {

    return(
        <div>
            <Jumbotron>
                <Container>
                    <h1 className="display-3">Resume</h1>
                    <h4 className="">My Skills</h4>
            <div className="">
                <p>Node.js and npm (Epress, sequapze, mongoose)</p>
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
                    <CardText>please not that as of this current time there is no resume to download. a resume will be working in progress, untill such time has passed where a resume would be included please enjoy the textual sounds of silence.</CardText>
                    <Button>Download</Button>
                </Card>
            </div>
        </div>
    )
}

export default Resume;