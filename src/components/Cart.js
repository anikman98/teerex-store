import {useContext} from 'react'
import CartContext from '../context/cart/CartContext'

function Cart() {

  const cart = useContext(CartContext);

  return (
    <div>
      {
        cart.cart.length > 0 ? 
        cart.cart.map((item) => {
          return (
            <p>{item.name}</p>
          )
        })
        : "Nothing to show!"
      
      }
    </div>
  )
}

export default Cart