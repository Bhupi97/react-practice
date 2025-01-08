import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    // Normal Variable
    // let listOfRestaurants;
    // Whenever the state variable update, react triggers a reconciliation cycle (re-renders the component)
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const RestaurantCardLabeled = withOpenLabel(RestaurantCard);

    const [searchText, setSearchText] = useState("");

    const { loggedInUser, setUserName } = useContext(UserContext);

    useEffect(() => {  // useEffect is a hook that runs after the component is rendered
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3260152&lng=75.57618289999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // const updatedData = await fetch("https://www.swiggy.com/dapi/restaurants/list/update" , {
        //                                 method: "POST",
        //                                 body: JSON.stringify({ lat: 31.3260152, lng: 75.57618289999999 }), }
        //                                 );

        const json = await data.json();
        console.log(json);
        // const updatedJson = await updatedData.json(); 
        // console.log(updatedJson);
        const targetIndex = json?.data?.cards.findIndex(
            (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
        
        const restaurants = targetIndex !== -1 
        ? json.data.cards[targetIndex].card.card.gridElements.infoWithStyle.restaurants 
        : undefined;

        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
    };

    if (!useOnlineStatus()) {
        return (
            <h1>You are offline!!!</h1>
        )
    } 

    // Conditional rendering 
    return listOfRestaurants.length === 0 ? <Shimmer /> : 
    // Conditional rendering using ternary operator
    (
        <div className='body'>
            <div className="filter flex">
            <div className='search m-4 p-4'>
                <input data-testid="searchBox"
                type="text" className="border border-solid border-slate-600 rounded-lg" 
                value={searchText} 
                onChange={(e) => setSearchText(e.target.value)}/>
                <button className="px-4 m-4 bg-slate-500 rounded-lg" onClick={ () => {
                    console.log(searchText);
                    const filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurants(filteredRestaurants);
                    }} >Search</button>
            </div>
                {/* setListOfRestaurants is updated state variable which takes the changed value of listOfRestaurants as an argument */}
            <div className='search m-4 p-4 '>
                <button className="px-4 m-4 bg-slate-500 rounded-lg" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating >= 4.5);
                    setFilteredRestaurants(filteredList)}}>Top Rated restaurants</button>
                    <label>Username : </label>
                    <input className="border border-black" type="text" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
            </div>
            </div>
            <div className='flex flex-wrap'>
                {/* <RestaurantCard resData={resList[0]}/> */}
                {filteredRestaurants.map((restaurant) => (<Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}> 
                    
                    {(restaurant.info.isOpen) ? <RestaurantCardLabeled resData={restaurant}/> : <RestaurantCard resData={restaurant}/>}
                </Link>
                ))}
                {/* <RestaurantCard resName="KFC" cuisine="Fast food, Burgers"/> */}
            </div>
        </div>
    );
};

export default Body;