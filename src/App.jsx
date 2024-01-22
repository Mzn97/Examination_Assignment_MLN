
import {
    BrowserRouter as Router, Routes,
    Route
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import MyButton from "./components/MyButton";
import Products from "./pages/Products"
import HamburgerMenu from "./components/HamburgerMenu";


function App() {
  return (
    <div>
       <div className="app">
            <Router>
                <HamburgerMenu />
                <MyButton to="" name="" />
                <MyButton to="products" name="products" />
                <MyButton to="about" name="about"  /> 
                { <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products/*"
                        element={<Products />} />
                    <Route path="/about"
                        element={<About />} />
                </Routes> }
            </Router>
        </div> 
    </div>
  )


}

export default App
