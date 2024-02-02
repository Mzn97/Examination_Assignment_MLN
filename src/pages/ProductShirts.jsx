import React from 'react';
import Card from "/src/components/Card.jsx";
import { useState, useEffect } from 'react'
 
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
            <div >
          <img className="productpageimg" src="src\img\photo-1554992489-bf8679d57ac1.jpg" alt="product img"></img> 
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