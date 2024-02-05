import React from 'react';
import Card from "/src/components/Card.jsx";
import { useState, useEffect } from 'react'
import MyButton from '../components/MyButton';
 
const ProductShirts = () => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
       
        addProducts();
      }, []);

      function addProducts() {
        fetch(`http://localhost:${import.meta.env.VITE_PORT}/api/categories/1?populate[products][populate]=*`)
          .then(res => res.json())
          .then(prod => {
            console.log(prod.data.attributes.products.data);

            setProductList(prod.data.attributes.products.data);
          })
      }// sätt en catch ()

    return (
        
        <div className="products">
          <img className="productpageimg" src="src\img\photo-1554992489-bf8679d57ac1.jpg" alt="product img"></img> 
          <div className="mini-menu">
          <MyButton to="ProductShoes" name="Shoes" />
          <MyButton to="ProductFootballs" name="Footballs" />
          </div>
            <h1 className='pagetitle'>SHIRTS</h1>
            {
                productList.map((prod, i) => {
                  return <Card prod={prod} key={i} />
                })
              }
        </div>
    )
}
 
export default ProductShirts;