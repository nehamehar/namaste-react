import React from "react"
import ReactDOM from "react-dom/client"

//********** */
//nested loop in react
let x = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"hii there i am here.   "), 
        React.createElement("h5",{},"hii there i am here")], //2 siblings
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"hii there i am here"), 
        React.createElement("h5",{},"hii there i am here")] //2 siblings
    )
)
//now its looks ugly so that why to make it easy we use jsx as react can be written with js but to make it easy we use jsx for not write these stuffs

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(x);

