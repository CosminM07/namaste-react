const heading = React.createElement("h1", {id: "heading"}, "Hello World form React!");
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"))
const parent = React.createElement(
                "div", 
                { id: "parent" }, 
                React.createElement("div", { id: "child" }, 
                    React.createElement("h1", { id: "child" }, "Copil"),
                    React.createElement("h2", { id: "child" }, "Copil 2"),
                ))

root.render(parent)