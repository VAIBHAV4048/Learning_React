/*         const h1=React.createElement("h1",{},"Hello World using React");
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(h1); */ const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")
    ])
]); /* How hard it's to read */ 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); /* this replaces everything inside root */ 

//# sourceMappingURL=Learning_React.7c0ccee6.js.map
