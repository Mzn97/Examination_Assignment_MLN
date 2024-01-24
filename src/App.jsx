import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
/* import MyButton from "./components/MyButton"; */
import Products from "./pages/Products"
/* import HamburgerMenu from "./components/HamburgerMenu"; */
import ProductShoes from "./pages/ProductShoes";



function App() {
  
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/ProductShoes" element={<ProductShoes />} />
            {/* Lägg till fler Routes efter behov */}
        </Routes>
      </Router>
  )
}

export default App


{/* <div>
       <div className="app">
            <Router>
                <HamburgerMenu />
                <MyButton to="" name="" />
                <MyButton to="products" name="products" />
                <MyButton to="about" name="about"  /> 

                { <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products/*" element={<Products />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/productshoes" element={<ProductShoes />} />
                </Routes> }
            </Router>
        </div> 
    </div> */}
