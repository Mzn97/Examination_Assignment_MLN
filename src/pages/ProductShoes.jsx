import React from 'react';
import Card from "/src/components/Card.jsx";
import { useState, useEffect } from 'react'
//P.js
const ProductShoes = () => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        // update update the list of todos
        // when the component is rendered for the first time
        addProducts();
      }, []);

      function addProducts() {
        fetch(`http://localhost:1337/api/products`)
          .then(res => res.json())
          .then(prod => {
            setProductList(prod.data);
          })
      }

    return (
        
        <div className="productshoes">
            <h1>This is the productshoes page</h1>
            {
                productList.map((prod, i) => {
                  return <Card prod={prod} key={i} />
                })
              }
        </div>
    )
}
 
export default ProductShoes;