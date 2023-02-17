import {useContext} from 'react';
import CartContext from '../../context/cart/CartContext';
import EmptyCart from './EmptyCart';
import CartCard from './CartCard';
import CartTotal from './CartTotal';
import '../../css/Cart.css';

function Cart() {

  const cart = useContext(CartContext);
  return (
      <div className='cart-container'>
        
        {
          cart.cart.length > 0 ? 
          <>
            <div className="cart-items">
            {cart.cart.map((item, index) => {
              return (
                <CartCard key={index} product={item} />
                )
              })
            }
            </div>
            <div className="cart-total">
              <CartTotal />
            </div>
          </>
          : <EmptyCart />
          
        }
        
      </div>
  )
}

export default Cart