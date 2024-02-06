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
        console.log('add')
        setCart([...cart, item])
    }

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

        tempArr.forEach((item) => {
            if(item.id === id) {
                item.quantity--
            }
        })

        setCart(tempArr)
    }



  return (
      <CartContext.Provider value={{cart, addItemToCart, removeItemFromCart, addQuantity, removeQuantity}}>
    <Router>
      <div>
      <Navbar />
          {/*<div>*/}
          {/*    {cart.map((item, index) => (*/}
          {/*        <div className="shopping-cart-item" key={index}>*/}
          {/*            <div className="shopping-cart-item-name">{item.title}</div>*/}
          {/*            <div className="shopping-cart-item-price">{item.price} kr</div>*/}
          {/*            <div className="shopping-cart-item-price">{item.quantity} x</div>*/}
          {/*            <div className="shopping-cart-item-quantity">*/}
          {/*                <button onClick={() => cart.addItemToCart()}>Add+</button>*/}
          {/*                <button onClick={() => removeItemFromCart()}>Remove-</button>*/}
          {/*            </div>*/}
          {/*        </div>*/}
          {/*    ))}*/}
          {/*</div>*/}
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
