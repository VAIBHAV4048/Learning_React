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

//JSX

const jsxHeading=<h1 id="heading">Hello i am jsx</h1>;
// this jsx code is transpiled before it reaches js engine - Parcel -SWC
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
