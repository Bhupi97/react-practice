import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
// const searchStyle = { // Example of inline CSS in JSX
//     backgroundColor: "#b6acac",
// };

const RestaurantCard = (props) => {
     // destructuring data
    const { resData } = props;
    // console.log(resData);
    const { loggedInUser } =  useContext(UserContext);
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info; // Optional Chaining
    const { deliveryTime } = resData.info.sla;
      return (
        //    <div className='res-card' style={searchStyle}>
        // If we have to provide any hard coded values in tailwind CSS we should use squared brackets [], like provided below
           <div data-testid="resCard" className='p-4 m-4 w-[260px] h-[420px] bg-slate-200 rounded-lg hover:bg-slate-400 text-center'> 
              <img className='rounded-lg h-48 w-72' alt="res-logo" src={CDN_URL + cloudinaryImageId}></img>
              <div className='res-details'>
                  <h3 className="font-bold py-2 text-lg">{name}</h3>
                  <h4>{cuisines.join(", ")}</h4>
                  <h4>{avgRating}⭐</h4>
                  <h4>{costForTwo}</h4>
                  <h4>{deliveryTime + " minutes"}</h4>
                  <h4>User : {loggedInUser}</h4>
              </div>
          </div>
      );
  };

export const withOpenLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute ml-4 bg-black text-white px-1 rounded-md">Now Open</label>
                {/* {console.log(...props)} */}
                <RestaurantCard {...props}/>
            </div>
        );
    }
}

  export default RestaurantCard;