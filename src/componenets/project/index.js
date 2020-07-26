import React, {useState} from 'react'

function Portfolio() {
    const [projects] = useState([
        {
            name: "test",
            description: "test description",
            languages: "html, javascript, css"
        },
        {
            name: "test",
            description: "test description",
            languages: "html, javascript, css"
    
        },
        {
            name: "test",
            description: "test description",
            languages: "html, javascript, css"
    
        },
        {
            name: "test",
            description: "test description",
            languages: "html, javascript, css"
    
        },
        {
            name: "test",
            description: "test description",
            languages: "html, javascript, css"
    
        },
        {
            name: "test",
            description: "test description",
            languages: "html, javascript, css"
    
        },
        {
            name: "test",
            description: "test description",
            languages: "html, javascript, css"
    
        },
        {
            name: "test",
            description: "test description",
            languages: "html, javascript, css"
    
        },
        {
            name: "test",
            description: "test description",
            languages: "html, javascript, css"
    
        },
        {
            name: "test",
            description: "test description",
            languages: "html, javascript, css"
    
        },
        {
            name: "test",
            description: "test description",
            languages: "html, javascript, css"
    
        },
        {
            name: "test",
            description: "test description",
            languages: "html, javascript, css"
    
        },
    
    ])
    

    return(
        <div>
        {
            projects.map((project, i) => (
                <div className="card w-25 m-2" key={i}>
                    <div className="card-body">
                        <h5 className="card-title">{project.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{project.languages}</h6>
                        <p className="card-text">{project.description}.</p>
                        <a href="#" className="card-link">link</a>
                    </div>
                </div>
            ))
        }
        </div>
    )
}

export default Portfolio;