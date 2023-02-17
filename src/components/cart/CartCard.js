import React, { useContext } from 'react';
import '../../css/Cart.css';
import CartContext from '../../context/cart/CartContext';

const CartCard = ({product}) => {
    // console.log(product)

    const cart = useContext(CartContext);

    const deleteProduct = () => {
        let products = cart.cart.filter(item => item.id === product.id ? false : item);
        cart.setCart(products);
    }

    const decreaseItem = () => {
        let products = cart.cart.map(item => {
            if(item.id === product.id){
                item.itemCount > 1 ? item.itemCount -= 1 : alert("Item quantity should be more than 0");
            }
            return item;
        });
        cart.setCart(products);
    }

    const increaseItem = () => {
        let products = cart.cart.map(item => {
            if(item.id === product.id){
                item.itemCount < item.quantity ? item.itemCount += 1 : alert("Only "+item.quantity+" pieces in stock!");
            }
            return item;
        });
        cart.setCart(products);
    }


  return (
    <div className='cart-card'>
        <div className="cart-card-image">
            <img src={product.imageURL} alt={product.name} height="100"/>
        </div>
        <div className="cart-card-content">
            <div className="product-details">
                <div className='product-name'>
                    <h3>{product.name}</h3>
                </div>
                <div className="product-price">
                    <h4>{product.currency}&nbsp;{product.price}</h4>
                </div>
            </div>
            <div className="product-action">
                <div className="product-quantity">
                    <h5>Quantity: </h5>
                    <button onClick={decreaseItem}>-</button><span> {product.itemCount} </span><button onClick={increaseItem}>+</button>
                </div>
                <div className="product-delete">
                    <button onClick={deleteProduct}>Remove item</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartCard