import React from 'react'
import About from '../About'

function Content({currentCategory}) {
    function RenderCategory() {
        switch(currentCategory.name) {
            case "Portfolio":
                return(<p>how are you?</p>)
            case "Contact":
                return(<p>why?</p>)
            case "Resume":
                return(<p>I made this for you</p>)
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