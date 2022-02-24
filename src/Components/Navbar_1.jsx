import React, { useState } from "react";

import 'CSS/navbar.css';

export default function Navbar(props, { ...rest }) {

    const { toggle_tab, clk_tab } = props;

    const is_tab1 = toggle_tab === 1 ? " tab_button_active" : "";
    const is_tab2 = toggle_tab === 2 ? " tab_button_active" : "";
    
    return (
        <React.Fragment>

            <div className="navbar_wrap">
                <div className="navbar_inner">
                    
                    <div className={"tab_button"+is_tab1} onClick={() => clk_tab(1)}>Main</div>
                    <div className={"tab_button"+is_tab2} onClick={() => clk_tab(2)}>Products</div>

                </div>
            </div>

        </React.Fragment>
    );
}
