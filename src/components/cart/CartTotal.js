import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'
import '../../css/Cart.css';

const CartTotal = () => {

    const cart = useContext(CartContext);

    const checkCartTotal = () => {
        let total = 0;
        cart.cart.map(item => {
            total += item.itemCount*item.price;
        })
        return total;
    }

  return (
    <div className='cart-card'>
        <div className="cart-total-details">
            <div className="final-items">
            {
                cart.cart.map(item => {
                return(
                    <div className='total-items'>
                        <div className="item-name">
                            <p>{item.name}</p> 
                        </div>
                        <div className="item-total" >
                            <p>{item.price} x {item.itemCount} = {item.price*item.itemCount}</p>
                        </div>
                    </div>
                    )
                })
            }
            </div>
            <div className="final-total">
                <hr />
                <h1>Total: <span>₹{checkCartTotal()}</span></h1>
            </div>
        </div>
    </div>
  )
}

export default CartTotal