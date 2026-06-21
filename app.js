/*         const h1=React.createElement("h1",{},"Hello World using React");
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(h1); */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm h1 tag"),
  ),
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);