import React from 'react';

const Product = (props) => {
    return (
        <div>
            <h2>This is product</h2>
            <h4>{props.product.name}</h4>
        </div>
    );
};

export default Product;