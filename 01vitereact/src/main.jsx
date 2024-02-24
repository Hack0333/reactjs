import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <h1>Custom !!</h1>
    )
}

const anotherUSer = " Chai aur React";

const reactElement = React.createElement(
    'a' ,//first parameter is tag
    {href: "https://google.com", target: "_blank"} ,//second parameter is object
    "click me to visit",
    anotherUSer
)

ReactDOM.createRoot(document.getElementById('root')).render(
    //reactElement // its working how react element work
    // <App />
    reactElement

)
