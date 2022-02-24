import React, { useState } from "react";

import Navbar from 'Components/Navbar.jsx';
import PopForm from 'Components/PopForm.jsx';
import ProductBox from 'Components/ProductBox.jsx';
import productList from 'Data/dataList_products.js';

import 'CSS/main.css';
import 'CSS/product.css';

export default function Store({ ...rest }) {

    const [show_form, setShow_form] = useState(false);
    
    const clk_buy = () => {
        // open Form
        setShow_form(true);
    }
    
    const clk_hideForm = () => { setShow_form(false); }

    return (
        <React.Fragment>
            <div className="page_wrap">
                
                <Navbar />
                
                <div className="content_box_wrap">
                    <div className="content_box">

                        <section className="product_section">
                            <div className="product_collect">
                                {productList.map((product, productKey) => {
                                    // {console.log(product.title)}
                                    return <ProductBox key={productKey} product={product} clk_buy={clk_buy} />
                                })}
                            </div>
                        </section>

                    </div>
                </div>

                <PopForm show={show_form} clk_hideForm={clk_hideForm} />

            </div>
        </React.Fragment>
    );
}
