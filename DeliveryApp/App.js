
import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Header
    - logo 
    - Nav Items
* Body
    - Search Bar
    - Restaurant Container
    - Restaurant card
* Footer
    - Copyright
    - Link
    - Address
    - Contact
**/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
            
                {/* <img className="logo" src="./Media/Logo.png" alt='Logo'></img> */}
                <img className="logo" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-app-icon-logo-by-klaudia-mondek-dribbble.jpg" alt='Logo'></img>

            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(AppLayout());