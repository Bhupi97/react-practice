// How to create a nested Tags 
// In the 3rd argument of createElement(), pass a new createElement
// If you want to create siblings pass array of createElement.
// **React Elements are JS objects
// Every tag made by react is an object not an HTML tag
// *** ReactElement(object) => HTML(Browser understands)


const heading = React.createElement("div",
                    {id: "parent"}, 
                    React.createElement("div", {id: "child"}, 
                    [React.createElement("h1", {}, "This is H1 of Child"), 
                    React.createElement("h2", {}, "This is H2 of child")]));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);