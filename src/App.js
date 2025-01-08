// How to create a nested Tags 
// In the 3rd argument of createElement(), pass a new createElement
// If you want to create siblings pass array of createElement.
// **React Elements are JS objects
// Every tag made by react is an object not an HTML tag
// ***ReactElement - JS object => HTML(Browser understands)

// import React from "react";
// import ReactDOM from "react-dom/client";

// // const heading = React.createElement("div",                 Not using it anymore
// //                     {id: "parent"}, 
// //                     React.createElement("div", {id: "child"}, 
// //                     [React.createElement("h1", {}, "This is H1 of Child"), 
// //                     React.createElement("h2", {}, "This is H2 of child")]));

// // JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
// // const jsxHeading = <h1 id="heading">Hi there BP here</h1>;

// const elem = <span> React Element </span>;

// // In this function Title is another component inside JsxHeading, It is called ***COMPONENT COMPOSITION***


// const title = (
//     <h1 className="head">
//         {elem}
//         I am the title of this page I should be on top
//     </h1>
//     );

// const JsxHeading = () => (<div id="container">
//     {title}
//     <h2 id="heading">I am subTitle I should be 2nd</h2>
// </div>);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<JsxHeading />);

// // React Components
// // 1. Class based components - OLD way nobody uses now
// // 2. Function based components - NEW way - A JavaScript function which returns some JSX or React Element


import React, {lazy, Suspense, useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Cart from './components/Cart';
// import ItemList from "./components/ItemList";

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantCard from './components/RestaurantCard';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

/***
 * Chunking
 * Code Splitting
 * Dynamic bundling
 * Lazy loading
 * On demand loading
 * dynamic import
 */

const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/About'));



const AppLayout = () => {
    const [userName, setUserName] = useState("");
    
    // Authentication
    useEffect(() => {
        // Make an API call and send username and password
        const data = {
            name: "Bhupinder Partap Singh"
        };
        setUserName(data.name)
         }, [])
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName}}>
                <div className="app">
                <Header />
                <Outlet /> 
                </div>
                {/* Outlet can replace as per children routes provided in createBrowserRouter*/}
            </UserContext.Provider>
        </Provider>
        
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback=<h1>Loading...</h1> ><About /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/grocery",
                element: <Suspense fallback=<h1>Loading...</h1> ><Grocery /></Suspense>
            }

        ],
        errorElement: <Error />
    }, 
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);