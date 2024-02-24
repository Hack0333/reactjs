import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <h1>Custom !!</h1>
    )
}

// custom react
const ReactElement = {
    type : 'a',
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    children : "click me to visit",
}

const anotherElement = (
    <a href='www.google.com' target='_blank'>visit me</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    // <MyApp />
    // MyApp() it will also run because end of the day its also a funtion
    //reactElement //object is used with parenthesis
    anotherElement

)
