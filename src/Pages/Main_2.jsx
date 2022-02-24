import React, { useState } from "react";

import Navbar_1 from 'Components/Navbar_1.jsx';
import ProductBox_1 from 'Components/ProductBox_1.jsx';
import productList from 'Data/dataList_products.js';

import 'CSS/main_1.css';
import 'CSS/product_1.css';

export default function Main({ ...rest }) {

    const [toggle_tab, setToggle_tab] = useState(1);
    
    const clk_tab = (index) => {
        console.log('jump to '+ index);
        // show clicked section
        setToggle_tab(index);
    };

    return (
        <React.Fragment>
            <div className="page_wrap">
                
                <Navbar_1 toggle_tab={toggle_tab} clk_tab={clk_tab} />
                <div className="content_box">
                    <div className="content_box_inner">
                        
                        <section className={toggle_tab === 1 ? "main_section" : "hide_element main_section"}>
                            Main
                        </section>

                        <section className={toggle_tab === 2 ? "product_section" : "hide_element product_section"}>
                            <div className="product_collect">
                                {productList.map((product, productKey) => {
                                    // {console.log(product.title)}
                                    return <ProductBox_1 key={productKey} product={product} />
                                })}
                            </div>
                        </section>

                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}
