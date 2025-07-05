import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar.jsx';
import ShopCategory from "./Pages/ShopCategory.jsx";
import Product from "./Pages/Product.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import Shop from "./Pages/Shop.jsx";
import Cart from "./Pages/Cart.jsx"; 
import "./App.css"
import Footer from './Components/Footer/Footer.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        
        {/* ✅ This div will push all Routes content below fixed navbar */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/mens" element={<ShopCategory category="men" />} />
            <Route path="/women" element={<ShopCategory category="women" />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
        </div>
        <Footer></Footer>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
