import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Products from "./pages/Products"
import ProductShoes from "./pages/ProductShoes";
import ProductShirts from "./pages/ProductShirts";
import ProductFootballs from "./pages/ProduktFooballs";



function App() {
  
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/ProductShoes" element={<ProductShoes />} />
            <Route path="/ProductShirts" element={<ProductShirts />} />
            <Route path="/ProductFootballs" element={<ProductFootballs />} />
            {/* Lägg till fler Routes efter behov */}
        </Routes>
      </Router>
  )
}

export default App

