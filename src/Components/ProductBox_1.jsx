import React, { useState } from "react";

import 'CSS/product.css';

export default function Product(props, { ...rest }) {

    const { product } = props;
    // const { product, title, img, sku, features, price } = props;
    
    return (
        <React.Fragment>

            <div className="product_box">
                <img src={product.img} width={'100%'} height={'100px'} />
                <div className="product_content">
                    <h5>{product.title}</h5>
                    <p>SKU: {product.sku}</p>
                    <div style={{ height: '40px', margin: '15px 0' }}>
                        <p>{product.features}</p>
                    </div>
                    <div style={{ display: 'grid', alignItems: 'center', gridTemplateColumns: 'repeat(2, 50%)' }}>
                        <span>${product.price}</span>
                        <div style={{ textAlign: 'right' }}><button>Buy</button></div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}
