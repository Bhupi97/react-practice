// import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
// import { RES_MENU } from "../utils/constants";
import { useParams } from 'react-router-dom';
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react";

const RestaurantMenu = () => {

    // const [resInfo, setResInfo] = useState(null);

    const [showIndex, setShowIndex] = useState(null);
    const resId = useParams();
    const resInfo = useRestaurantMenu(resId.resId);
    // console.log(resId.resId);


    // useEffect( () => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(RES_MENU + resId.resId);
    //     console.log(RES_MENU + resId.resId);   
    //     const json = await data.json();
    //     console.log(json);
    //     setResInfo(json.data);
    // };

    if (resInfo === null) return <Shimmer />;

    // let name, avgRating, cuisines, costForTwoMessage;

// if (resInfo?.cards?.[2]?.card?.card?.info) {
//   ({ name, avgRating, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info);
// }
    // Check that the required data exists, providing default values if necessary
    const { name = '', avgRating = '', cuisines = [], costForTwoMessage = '' } = 
    resInfo?.cards?.[2]?.card?.card?.info || {};
    // const { name, avgRating, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards = [] } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card || {};  

    // if any special character like '@' is involved in a name of any property then we have to enclose that in [""] eg. ["<VariableName>"]
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);

    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold my-6 mt-4 mb-4">{name}</h1>
            <h3 className="resRating">Average Rating : {avgRating}</h3>
            <h3 className="resCforTwo">{costForTwoMessage}</h3>
            <h3 className="resCuisines">{cuisines.join(",")}</h3>
            <h2 className="resMenuHeading">Restaurant menu</h2>
            {/* <ul>
                <li>{itemCards[0].card.info.name}</li>
                {itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name.split(" - ")[0] + "- Rs." +  item?.card?.info?.price/100}</li>)}

                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul> */}
        
        {/* {console.log(category?.card?.title)}        */}
            <ul>
                {categories.map((category, index) => (
                     // Controlled Component
                    <RestaurantCategory 
                    key={category?.card?.card.title} 
                    data={category?.card} 
                    showItems={index === showIndex}
                    setShowIndex={() => setShowIndex(showIndex === index ? null : index)}/>
                ))};
                
            </ul>

            </div>
        
    );
};
export default RestaurantMenu;