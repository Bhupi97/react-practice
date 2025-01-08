import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    const [isActive, setIsActive] = useState(false);

    // console.log(data);
    const handleClick = () => {
        
        
        setShowIndex();
        // console.log("clicked");
        // setShowItems(!showItems); // Best way
        // showItems ? setShowItems(false) : setShowItems(true) ;  My way

    };
    
    // console.log(data);
    return (
        <div>
            <div className="w-6/12 mx-auto my-4  bg-slate-200 border-b-4 shadow-md">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-semibold">{data?.card?.title} ({data?.card?.itemCards?.length})</span>
                <span>🔽</span>
                </div>
                {showItems && <ItemList items={data?.card?.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;