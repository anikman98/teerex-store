import CartContext from "./CartContext";
import { useState } from "react";

const CartState = (props) => {

    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState;