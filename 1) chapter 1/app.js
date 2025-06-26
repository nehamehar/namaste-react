//ch-1


// let x = React.createElement("h1", {id:"heading"}, "hellooooo")
//     let root = ReactDOM.createRoot(document.getElementById("root"))
//     root.render(x);



//props:
// {id:"heading"},
//child:
//"hellooooo"


// this is nested loop in js to create this in our react 
{/* <div id="parent">
    <div id="child">
        <h1></h1> //two siblings
        <h2></h2>
    </div>
</div> */}

//********** */
//nested loop in react
// let x = React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//         [React.createElement("h1",{},"hii there i am here"), 
//         React.createElement("h5",{},"hii there i am here")] //2 siblings
//     )
// )


// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(x);

//2) how to create this  */
{/* <div id="parent">
    <div id="child">
        <h1></h1> //two siblings
        <h2></h2>
    </div>
</div> 
    <div id="child2">
        <h1></h1> //two siblings
        <h2></h2>
    </div>*/}



//********** */
//nested loop in react
let x = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"hii there i am here"), 
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

