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
const jsxHeading = (
  <h1 id="heading" className="head">
    Hello i am jsx
  </h1>
);
// this jsx code is transpiled before it reaches js engine - Parcel -SWC4
// in jsx we have to use camelCase for attributes
// JSX=> React.createElement =>ReactElement-JS Object=> HTML Element(render)
// we have to wrap jsx in paranthesis if we are writting jsx in multilines

// React Component
//Class Based Component-OLD way
//Function Based Component-New way

//React Functional Component-> a normal js function which returns some jsx  and jsx is react element
const HeadingComponent1 = () => (
  <div id="Container">
    <h1 className="head">Here is a functional Component</h1>
  </div>
);
/* const HeadingComponent = () => {
  return <h1 className="heading">Here is a functional Component</h1>;
}; */
// in arrow functions the single line without curly is considered as return
// jsx can be nested also
//HeadingComponent1 and HeadingComponent both are same

// if i want to render a component inside another component this is known as Component Composition
const title = () => <h1 className="head">Here is a functional Component</h1>;

const HeadingComponent1 = () => (
  <div id="Container">
    <title/>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
// How to render functional component
root.render(<HeadingComponent1 />);
