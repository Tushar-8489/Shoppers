import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import {Shop} from './Pages/Shop';
import { ShopCategory } from "./Pages/ShopCategory";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { LoginSignup } from "./Pages/LoginSignup";
import { Footer } from "./Components/Footer/Footer";
import men_banner from './Components/Assets/men_banner_1.webp'
import women_banner from './Components/Assets/women_banner_1.jpg'
import kid_banner from './Components/Assets/kid_banner_1.jpg'
function App () {
  return (
    
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Shop/>}/>
      <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}/>
      <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>}/>
      <Route path="/kids" element={<ShopCategory banner={kid_banner} category = "kid"/>}/>
      <Route path="product" element={<Product/>}>
        <Route path=":productId" element={<Product/>}/>
      </Route>
      <Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
      </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;