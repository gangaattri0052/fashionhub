import "./App.css";
import HomePage from "./home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./itemDetail/ItemDetail";
import Navbar from "./navbar/Navbar";
import Cart from "./cart/Cart";
import Orders from "./orders/Orders";
import Checkout from "./checkout/Checkout";
import Fotter from "./fotter/fotter"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main-container">
          <Navbar />
          <Routes>
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route exact path="/" element={<HomePage />} />
          </Routes>
          <Fotter/>
        </div>
      </BrowserRouter>
  
  
         </div>

    
  );
}

export default App;