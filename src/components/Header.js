import { LOGO_URL } from "../utils/constants";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    // Always create use state variables in the component (Not in conditional statements/ loops or functions)
    const [btnName, setBtnName] = useState("Login");

    const { loggedInUser } = useContext(UserContext);
    // console.log("Header rendered");

    // Subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);

    // If no dependency array => useEffect is called on every render
    // If dependency array is empty = [] =>  useEffect is called on initial render(just once)
    // If dependency array is [btnName] => It is called everytime btnName is updated
    useEffect(() => {
            // console.log("useEffect Called");
        }, [btnName]);

    return (
        <div className="flex justify-between bg-slate-300 shadow-lg">
            <div className="w-24">
            
                {/* <img className="logo" src="./Media/Logo.png" alt='Logo'></img> */}
                <Link to="/"><img className="logo" src={LOGO_URL} alt='Logo'></img></Link>

            </div>
            <div className="nav-items">
                <ul className="flex p-4 m-4">
                    {/* Never use anchor tags in react because it reloads whole page, rather use Link */}
                    <li className="px-4">
                        Online Status : {useOnlineStatus() ? "✔" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">
                            Home
                        </Link>
                    </li> 
                    <li className="px-4">
                        <Link to="/about">
                            About Us
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">
                            Contact Us
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">
                            Grocery
                        </Link>
                    </li>
                    <li className="px-4 font-bold text-l">
                        <Link to="/cart">
                            Cart - ({cartItems.length} Items)
                        </Link>
                    </li>
                    <button className="login-btn" onClick={() => btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
                    <li className="px-4">
                        {loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;