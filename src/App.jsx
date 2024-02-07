import React, {useState, createContext, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import ProductShoes from "./pages/ProductShoes";
import ProductShirts from "./pages/ProductShirts";
import ProductFootballs from "./pages/ProduktFooballs";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";
import PurchaseConfirmation from './pages/PurchaseConfirmation';
import ContactUs from "./pages/ContactUs";
import Information from './pages/Information';

export const CartContext = createContext(null)

function App() {

    const [cart, setCart] = useState([])

    useEffect(() => {
        getLocalStorage()
    }, []);

    useEffect(() => {
        setLocalStorage()
    }, [cart])

    const setLocalStorage = () => {
        window.localStorage.setItem('cart', JSON.stringify(cart))
    }

    const getLocalStorage = () => {
        if(cart.length < 1) {
            const storageCart = JSON.parse(window.localStorage.getItem('cart'))
            if(storageCart?.length > 0) setCart(storageCart)
        }
    }

    const addItemToCart = (item) => {
        // Kontrollera om artikeln redan finns i kundvagnen
        const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            // Om artikeln redan finns, öka dess kvantitet
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            // Om artikeln inte finns, så lägg till den som vanligt
            setCart([...cart, item])
        }
    };

    const addQuantity = (id) => {
        const tempArr = [...cart]

        tempArr.forEach((item) => {
            if(item.id === id) {
                item.quantity++
            }
        })

        setCart(tempArr)
    }

    const removeItemFromCart = () => {
        console.log("remove")
        console.log(cart)
    }

    const removeQuantity = (id) => {
        const tempArr = [...cart]

        tempArr.forEach((item, index) => {
            if(item.id === id) {
                item.quantity--;
                // Tar bort produkten från kundvagn om antalet är 0 eller mindre
                if (item.quantity <= 0) {
                    tempArr.splice(index, 1);
                }
            }
        })

        setCart(tempArr)
    }



  return (
      <CartContext.Provider value={{cart, addItemToCart, removeItemFromCart, addQuantity, removeQuantity}}>
    <Router>
      <div>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          {/*Använder '/' som sökväg för hemsidan istället för "/Home" för att få slideshow att fungera*/}
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/ProductShoes" element={<ProductShoes />} />
          <Route path="/ProductShirts" element={<ProductShirts />} />
          <Route path="/ProductFootballs" element={<ProductFootballs />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Information" element={<Information />} />
          <Route path="/purchase-confirmation" element={<PurchaseConfirmation />} />
      </Routes>
      </div>
      <Footer />
    </Router>
      </CartContext.Provider>

  )
}

export default App;
