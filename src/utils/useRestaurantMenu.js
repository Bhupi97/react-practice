import { useEffect, useState } from "react"
import { RES_MENU } from "../utils/constants";


const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    // const resId = props.resId;
    
    
    useEffect( () => {
        fetchData();
        }, []);      
    

    fetchData = async () => {
        
        const data = await fetch(RES_MENU + resId);
        const json = await data.json();
        // console.log(json);
        setResInfo(json.data);
    };

    // console.log(resInfo.data);
    return resInfo;

};
    
export default useRestaurantMenu;