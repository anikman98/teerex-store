import {useContext} from 'react'
import CartContext from '../../context/cart/CartContext';
import '../../css/Card.css';

function ProductCard({item}) {

  const cart = useContext(CartContext);

  const addNewItemToCart = (product) => {
    product.itemCount = 1;
    cart.setCart([...cart.cart, product]);
  }

  const addToCart = () => {
    let products = cart.cart;
    // console.log(product); 
    if(products.length){
      let flag = 0;
      products = products.map(cartItem => {
        if(cartItem.id === item.id){
          flag=1;
          cartItem.quantity > cartItem.itemCount ? cartItem.itemCount += 1 : alert("Only "+cartItem.quantity+" pieces in stock!");
        }
        return cartItem;
      });
      if(flag){
        cart.setCart(products);
      }else{
        addNewItemToCart(item);
      }
    }
    else{
      addNewItemToCart(item);
    }
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