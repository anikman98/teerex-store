
import '../css/App.css';
import Navbar from './navbar/Navbar';
import Main from './main/Main'
import Cart from './cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartState from '../context/cart/CartState'
import ProductState from '../context/product/ProductState';


function App() {
  return (
    <ProductState>
    <CartState>
    <BrowserRouter>
      <div className="App">
        {/* Navbar */}
        <Navbar />
        
        <Routes> 
          <Route path="/" element={ <Main />} />
          <Route path="/cart" element={ <Cart />} />
        </Routes>
        

        {/* Individual Tee */}

        {/* cart */}
      </div>
    </BrowserRouter>
    </CartState>
    </ProductState>
  );
}

export default App;
