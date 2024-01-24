import React from 'react';
import Card from "/src/components/Card.jsx";
import { useState, useEffect } from 'react'
 
const ProductShirts = () => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
       
        addProducts();
      }, []);

      function addProducts() {
        fetch(`http://localhost:1337/api/products`)
          .then(res => res.json())
          .then(prod => {
            setProductList(prod.data);
          })
      }// sätt en catch ()

    return (
        
        <div className="productshirts">
            <h1>This is the productshirts page</h1>
            {
                productList.map((prod, i) => {
                  return <Card prod={prod} key={i} />
                })
              }
        </div>
    )
}
 
export default ProductShirts;