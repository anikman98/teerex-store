
import '../css/App.css';
import Navbar from './navbar/Navbar';
import Main from './main/Main'
import Cart from './cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartState from '../context/cart/CartState'
import ProductState from '../context/product/ProductState';
import FilterState from '../context/filter/FilterState';


function App() {
  return (
    <ProductState>
    <FilterState>
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
    </FilterState>
    </ProductState>
  );
}

export default App;
