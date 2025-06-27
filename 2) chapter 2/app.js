import React from "react" //taking react from module
import ReactDOM from "react-dom/client" //taking reactDOM from module

// for reactelement
const heading = React.createElement("h1", {id:"heading"}, "namaste 🚀")
//for reactdomelement
const root = ReactDOM.createRoot(document.getElementById("root"))
// making onject html
root.render(heading)


// jsx(creating h1) :
// const c = <h1>hheeelloo🚀</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(c)// by rendering it convert jsx into react.createElement (object) through babel

// * JSX = JSX is a JavaScript Syntax which is easier to create React Elements
// * JSX - is not HTML in JavaScript, but JSX is HTML like or XML like Syntax
// * This is how we create elements using JSX
// * JSX is React.createElement at the end of the day

// JSX (transipiled before it reaches the JS Engine)
// Transpiled means -> Transpiling is converting one higher level language to another higher level language. For example, Typescript is a high level language but after it's transpiled it's turned into JavaScript (another high level language). Or Babel for example can transpile ES6 JavaScript code into ES5 JavaScript.
// Parcel is Transpiling this code, means Parcel Manages Transpiling the code which is done By the Package known as Babel. Babel is a Transpiler - A source-to-source translator, source-to-source compiler (S2S compiler), transcompiler, or transpiler is a type of translator that takes the source code of a program written in a programming language as its input and produces an equivalent source code in the same or a different programming language.

// * JSX => Transpiled to React.createElement => React.JS Object = will be converted to HTMLElement on render(render)
// const jsxHeading = <h1 id="heading">Namaste React Using JSX🚀</h1>;
// console.log(jsxHeading);
// if the code of this line is more than one we hvae to put ()
// before: single line
// const c = <h1 className="head">hheeelloo🚀</h1>
// like this
// after:  (multiple line)
// const c = (<h1 className="head">hheeelloo🚀
// uwjbcxkw</h1>)
//for single also you can use brackets:
//const c = (<h1 className="head">hheeelloo🚀</h1>) //but not mandatory


//React component:
// - react functional component: (camel) just simple js fun which return jsx
// const Head=()=>{
//     return <h>namaste </h>
// }
// both are same 

//render into another component:
// const Title=()=>(<h1>my name is </h1>);
// const Head=()=> (
// <div className="head">
// <Title/>
// <h1>namaste 🙏</h1>
// </div>
// )
 //if i want to render Title into Head'd div use <Title/> in Head
// const root = ReactDOM.createRoot(document.getElementById("root"))
 //root.render(Head) ❌ only for react element we can render that like this
// root.render(<Head/>) //❤️ this is how we render fun component


// render element into component also use {} (we can put any code of js inside this)

const title=(<h1>my name is</h1>);
const number = 19992; //{}
const Head=()=> (
<div className="head">
    {title} // how we render our element into componet
    {/* {200+300},
    {number}, --- react elemt
    <Head/> or <Head> </Head> or {Head()} -- call fun component
    {console.log("heyyyy")} */}
<h1>namaste 🙏 </h1>
</div>
)
//if i want to render Title into Head'd div use <Title/> in Head
const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(Head) ❌ only for react element we can render that like this
root.render(<Head/>) //❤️ this is how we render fun component



//