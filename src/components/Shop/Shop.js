import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    console.log(products);
    return (
        <div className='shop-container'>
            <div className="product-container">
                <ul>
                    {
                        products.map(product => <li key={product.key}>{product.name}</li>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <h2>this is cart</h2>
            </div>

        </div>
    );
};

export default Shop;