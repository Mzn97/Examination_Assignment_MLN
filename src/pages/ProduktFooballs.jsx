import React from 'react';
import Card from "/src/components/Card.jsx";
import { useState, useEffect } from 'react'
 
const ProductFootballs = () => {
    const [productList, setProductList] = useState([])

    useEffect(() => {
       
        addProducts();
      }, []);

      function addProducts() {
        fetch(`http://localhost:1337/api/categories/2?populate[products][populate]=*`)
          .then(res => res.json())
          .then(prod => {
            console.log(prod.data.attributes.products.data);
            setProductList(prod.data.attributes.products.data);
          })
      }// sätt en catch ()

    return (
        
        <div className="products">
            <h1 className='pagetitle'>FOOTBALLS</h1>
            {
                productList.map((prod, i) => {
                  return <Card prod={prod} key={i} />
                })
              }
        </div>
    )
}
 
export default ProductFootballs;