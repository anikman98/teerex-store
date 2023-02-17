import { useContext } from 'react'
import { Link } from "react-router-dom"
import CartContext from '../../context/cart/CartContext';
import '../../css/Navbar.css';

function Navbar() {

  const cart = useContext(CartContext);

  return (
    <div className="navbar-container">
      <div className="navbar">
          <h1>TeeRex</h1>
          <div className="navbar-menu">
              <Link to="/" className="navbar-menu-link">Products</Link>
              <Link to="/cart" className="navbar-menu-link" id='cart'>
                  Cart
                  <div className="cart-badge">
                      <span>{cart.cart.length}</span>    
                  </div>
              </Link>
          </div>
      </div>
    </div>
  )
}

export default Navbar