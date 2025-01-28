import React from "react";
import ReactDOM from "react-dom/client";

// React ELement --> Just like dom elemeents, we have react elements 

const heading=React.createElement(
    "h1", 
    {id:"heading"}, 
    "Namaste React"
);

// Arguments of createElement --> (element, attribute object, children or inner react dom)

// React elements are just object, but when we render it on dom it becomes the dom element

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
// heading would be replaced by whatever there in the root 


