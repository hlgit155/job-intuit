import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import 'CSS/navmobile.css';

export default function NavMobile(props, { ...rest }) {

    const { showNav, clk_menu } = props;

    if (showNav) return (
        <React.Fragment>

            <div className="backdrop">
                <div className="navMobile_wrap">

                    <div className="close_nav"><span onClick={() => clk_menu()}>X</span></div>
                    <div className="navMobile_list">
                        <NavLink to={'/'} className='nav_button'>Home</NavLink>
                        <NavLink to={'/store'} className='nav_button'>Store</NavLink>
                    </div>
                    
                </div>
            </div>

        </React.Fragment>
    )
    else return null
}
