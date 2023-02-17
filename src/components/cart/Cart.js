import {useContext} from 'react';
import CartContext from '../../context/cart/CartContext';
import EmptyCart from './EmptyCart';
import CartCard from './CartCard';
import '../../css/Cart.css';

function Cart() {

  const cart = useContext(CartContext);
  return (
      <div className='cart-container'>
      {
        cart.cart.length > 0 ? 
        cart.cart.map((item, index) => {
          return (
            <CartCard key={index} product={item} />
          )
        })
        : <EmptyCart />
      }
      </div>
  )
}

export default Cart