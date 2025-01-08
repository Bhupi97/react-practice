import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
    // console.log(items);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // console.log("ADD button clicked");
        dispatch(addItem(item));
        
        // Whenever this function is called redux will create a payload like this:-
        // {
        //     payload: 'pizza'
        // }
    }

    return (
        <div>
            {items.map((item) => <div data-testid="foodItems" key={item?.card?.info?.id} className="p-2 m-2 border-b-gray-400 border-b-2 text-left flex justify-between">
                
                <div className="w-9/12">
                <div className="py-2">
                <span>{item?.card?.info?.name}</span>
                <span> - ₹{item?.card?.info?.price/100}</span>
                </div>
                <p className="text-xs">{item?.card?.info?.description}</p>
                </div>
                <div className="w-3/12">
                <button className="absolute bg-slate-950 text-white p-1 rounded-md mx-20 my-24" onClick={() => handleAddItem(item)}>
                    Add +
                </button>
                <img className="w-full h-32" src={CDN_URL + item?.card?.info?.imageId}/>
                </div>
           </div>)}
        </div>
    );

};

export default ItemList;