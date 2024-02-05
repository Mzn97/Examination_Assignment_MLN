import React from 'react';
import CategoryCard from '../components/CategoryCard';
import MyButton from '../components/MyButton';

const Products = () => {
    return (
        
        <div className="products">
             <img className="productpageimg" src="src\img\photo-1571771710019-ca58cf80f225.jpg" alt="product img"></img>
            <h1 className='pagetitle'>PRODUCTS</h1>
            <CategoryCard />
        </div>
    )
}
 
export default Products;
