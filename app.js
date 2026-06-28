/*         const h1=React.createElement("h1",{},"Hello World using React");
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(h1); */
import React from "react";
import ReactDOM from "react-dom/client";

/* const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);*/
/* How hard it's to read */
/*const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);*/
/* this replaces everything inside root */

//JSX->React Element
/* const jsxHeading = (
  <h1 id="heading" className="head">
    Hello i am jsx
  </h1>
); */
// this jsx code is transpiled before it reaches js engine - Parcel -SWC4
// in jsx we have to use camelCase for attributes
// JSX=> React.createElement =>ReactElement-JS Object=> HTML Element(render)
// we have to wrap jsx in paranthesis if we are writting jsx in multilines

// React Component
//Class Based Component-OLD way
//Function Based Component-New way

//React Functional Component-> a normal js function which returns some jsx  and jsx is react element
/* const HeadingComponent1 = () => (
  <div id="Container">
    <h1 className="head">Here is a functional Component</h1>
  </div>
); */
/* const HeadingComponent = () => {
  return <h1 className="heading">Here is a functional Component</h1>;
}; */
// in arrow functions the single line without curly is considered as return
// jsx can be nested also
//HeadingComponent1 and HeadingComponent both are same

// if i want to render a component inside another component this is known as Component Composition
// For composition component that is used inside must have 1st letter capital otherwise jsx treat it as HTML element
/* const Title = () => <h1 className="head">Here is a functional Component</h1>;

const HeadingComponent1 = () => (
  <div id="Container">
    <Title/>
    <Title><Title/>
    //line no. 56 and 57 both are same
  </div>
); */
// We can also use normal function but we have to return inside it but it's recommended to use arrow function as it looks cleaner

/* const HeadingComponent =function()  {
  return <h1 className="heading">Here is a functional Component</h1>;
}; */
// Amazing super power of JSX we can run any piece JS in between curly braces pair in JSX

/* const Title = () => <h1 className="head">Here is a functional Component</h1>;
let number=1000;
const HeadingComponent1 = () => (
  <div id="Container">
     <h2>{number}</h2>
     <h3>{console.log("that's how we use js inside jsx")}</h3>
   <Title/>
  </div> 
); */

// infine loop using component - circular rendering and we can also put a component inside element
const el=<span>Hello!</span>
const HeadingComponent1 = () => (
  <div id="Container">
     {jsxHeading}
     <h3>{console.log("that's how we use js inside jsx")}</h3>
  </div> 
);
const jsxHeading = (
  <h1 id="heading" className="head">
    Hello i am jsx
    {el}
    <HeadingComponent1/>
  </h1>
);
// we can also call react function inside another like{Title()}
// if we add any  data coming from malicious API JSX will handle it -> means it doesn't blindly execute the code , it prevents cross-site scripting also known as XSS in  real its jsx default escaping that prevents

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
// How to render functional component
root.render(<HeadingComponent1 />);
