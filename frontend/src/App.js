import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Product from "./Pages/Product.jsx"
import Footer from './Components/Footer/footer.jsx';
import Custom from './Pages/Custom.jsx';
import LoginSignup from './Pages/LoginSignup.jsx'
import Item from './Components/Item/item.jsx';
import Shop from './Pages/Shop.jsx';
import Cart from './Pages/Cart.jsx';
function App() {
  return (
    <div >
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Shop' element={<Shop/>}/>
      <Route path='/product' element={<Product/>}>
      <Route path=':productID' element={<Product/>}/>
      </Route>
      <Route path='/custom' element={<Custom/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      <Route path='/item' element={<Item/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
