import React, {useState} from 'react';

function Portfolio() {
    // list of projects that i wish to share to the world via website/resume
    const [projects] = useState([
        {
            name: "Jak-eats (api-keys N/A)",
            description: "A collobrative project with food api's",
            languages: "html, javascript, css, jquery",
            github: "https://github.com/ktrnthsnr/JAK-eats",
            site:"https://ktrnthsnr.github.io/JAK-eats/"
        },
        {
            name: "D&D character builder",
            description: "Collabrotive effort to help D&D newcomers",
            languages: "javascript, css, handlebars, node.js, SQL",
            github: "https://github.com/bskutivan/character_builder",
            site:"https://dnd-char-builder.herokuapp.com/"
    
        },
        {
            name: "Budget Tracker",
            description: "Made a PWA budget tracker to get familiar with PWA's",
            languages: "html, javascript, css",
            github: "https://github.com/drkeck/Budget-Tracker",
            site:"https://budget-trackor.herokuapp.com"
    
        },
        {
            name: "Little tech Blog",
            description: "A Blog built to flex my SQL muscles",
            languages: "html, javascript, css, SQL",
            github: "https://github.com/drkeck/Little-tech-blog",
            site:"https://little-tech-blog.herokuapp.com"
    
        },
        {
            name: "Highend Stickynote",
            description: "This was how i learned how to create api's and what was needed.",
            languages: "html, javascript, css",
            github: "https://github.com/drkeck/Note-Taking",
            site:"https://highendstickynote.herokuapp.com"
    
        },
        {
            name: "README generator",
            description: "Made a high end README generator to learn node.js",
            languages: "javascript, node.js",
            github: "https://github.com/drkeck/Readme-generator",
            site:"https://github.com/drkeck/Readme-generator"
    
        }
    ])
    
    // mapped out projects so they're not repeating code in a already packed section, i used coloums to help make the site more mobile friendly and easily readable.
    return(
        <div className="container">
            <h2 className="my-3 text-white">My Work:</h2>
            <div className="row my-4 justify-content-center">
                {
                    projects.map((project, i) => (
                        <div className="card m-2 col-sm-6 col-md-5 shadow bg-light
                        " key={i}>
                            <img src={require(`../../assets/projectImg/${i + 1}.jpg`)} className="card-img-top mt-5" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{project.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{project.languages}</h6>
                                <p className="card-text">{project.description}.</p>
                                <a href={project.github} className="card-link">GitHub</a>
                                <a href={project.site} className="card-link">Site</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Portfolio;