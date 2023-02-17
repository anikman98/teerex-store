import {useContext} from 'react'
import CartContext from '../../context/cart/CartContext';
import '../../css/Card.css';

function ProductCard({item}) {

  const cart = useContext(CartContext);

  const addToCart = () => {
    cart.setCart([...cart.cart, item])
  }

  return (
    <div className='card'>
        <div className="card-item">
            <div className="card-image">
                <img src={item.imageURL} alt={item.name} height="100"/>
                <h3>{item.name}</h3>
            </div>
            <div className="card-content">
                <div className="card-price">
                    <h4>{item.currency}&nbsp;{item.price}</h4>
                </div>
                <div className="card-button">
                    <button className='add-item-button' onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard