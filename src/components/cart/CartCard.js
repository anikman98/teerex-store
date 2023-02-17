import React from 'react';
import '../../css/Cart.css';

const CartCard = ({product}) => {
    console.log(product)
  return (
    <div className='cart-card'>
        <div className="cart-card-image">
            <img src={product.imageURL} alt={product.name} height="100"/>
        </div>
        <div className="cart-card-content">
            <div className='cart-card-name'>
                <h3>{product.name}</h3>
            </div>
            <div className="cart-card-price">
                <h4>{product.currency}&nbsp;{product.price}</h4>
            </div>
        </div>
    </div>
  )
}

export default CartCard