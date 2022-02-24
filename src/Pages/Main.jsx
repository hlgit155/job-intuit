import React, { useState } from "react";

import Navbar from 'Components/Navbar.jsx';
import ProductBox_1 from 'Components/ProductBox_1.jsx';
import productList from 'Data/dataList_products.js';

import 'CSS/main.css';
import 'CSS/product.css';

export default function Main({ ...rest }) {

    return (
        <React.Fragment>
            <div className="page_wrap">
                
                <Navbar />
                
                <div className="hero">
                    <h1 className="heading_title">QuickBook Online for Astronauts</h1>
                </div>

                <div className="copyright">© All rights of the pictures used in this website reserved to the author</div>

            </div>
        </React.Fragment>
    );
}
