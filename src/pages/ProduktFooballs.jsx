import React from 'react';
import Card from "/src/components/Card.jsx";
import { useState, useEffect } from 'react'
 
const ProductFootballs = () => {
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
        
        <div className="productfootballs">
            <h1>This is the productfootballs page</h1>
            {
                productList.map((prod, i) => {
                  return <Card prod={prod} key={i} />
                })
              }
        </div>
    )
}
 
export default ProductFootballs;