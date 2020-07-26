import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../project';
import Resume from '../Resume';

function Content({currentCategory}) {
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