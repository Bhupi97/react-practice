import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    // const cartItems = useSelector((store) => store); // Never ever do this it is performance loss
    const cartItems = useSelector((store) => store.cart.items); // *** Always subsribe to required portion of the store,

    return <div className="m-4 p-4 text-center">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button className=" bg-slate-950 text-white p-2 rounded-lg" onClick={handleClearCart}>Clear Cart</button>
        <div className="w-6/12 m-auto">
        
        {cartItems.length ? <ItemList items={cartItems} /> : <h1 className="text-2xl font-semibold m-4 p-4">Cart Empty!!! Add something.</h1>}
        </div>
    </div>
}

export default Cart;