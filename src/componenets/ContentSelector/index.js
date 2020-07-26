import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../project';
import Resume from '../Resume';

function Content({currentCategory}) {

    // a switch function to better get what material is needed when, the props are handed down for the app.js file.
    function RenderCategory() {
        switch(currentCategory.name) {
            case "Portfolio":
                return(<Portfolio></Portfolio>)
            case "Contact":
                return(<Contact></Contact>)
            case "Resume":
                return(<Resume></Resume>)
            default:
                return (<About></About>)
        }
    }

    return(
        <>
        <div>
            {
                RenderCategory()
            }
        </div>
        </>
    )
}

export default Content