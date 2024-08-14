import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Products from "./Pages/Product.jsx"
import Footer from './Components/Footer/footer.jsx';
function App() {
  return (
    <div >
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
