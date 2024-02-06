import React from 'react';
import Card from "/src/components/Card.jsx";
import MyButton from '../components/MyButton';
import { useState, useEffect } from 'react'
 
const ProductShoes = () => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
       
        addProducts();
      }, []);

      function addProducts() {
        fetch(`http://localhost:${import.meta.env.VITE_PORT}/api/categories/3?populate[products][populate]=*`)
          .then(res => res.json())
          .then(prod => {
            console.log(prod.data.attributes.products.data);
            setProductList(prod.data.attributes.products.data);
          }).catch(e => {
            console.log(e)
        })
      }// La till en catch - Nats

    return (
        
        <div className="products">
          <img className="productpageimg" src="\src\img\photo-1551854304-9235bf86ef71.jpg" alt="product img" ></img> 
           <div className="mini-menu">
           <MyButton to="ProductShirts" name="Shirts" />
            <MyButton to="ProductFootballs" name="Footballs" />
           </div>
            <h1 className='pagetitle'>SHOES</h1>
            {
                productList.map((prod, i) => {
                  return <Card prod={prod} key={i} />
                })
              }
        </div>
    )
}
 
export default ProductShoes;