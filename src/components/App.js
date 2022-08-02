
import '../css/App.css';
import Navbar from './Navbar';
import Main from './Main';
import Cart from './Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    
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
  );
}

export default App;
