import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from 'Images/quickbook_logo.png';
import ic_menu_grey from 'Images/menu_icon_grey.png';
import MenuMobile from 'Components/MenuMobile.jsx';

import 'CSS/navbar.css';

export default function Navbar(props, { ...rest }) {

    // const { toggle_tab, clk_tab } = props;

    const [showMenu, setShowMenu] = useState(false);

    const clk_menu = () => {
        console.log('menu clicked');
        setShowMenu(true);
    }

    return (
        <React.Fragment>

            <div className="navbar_wrap">
                <nav>

                    <img src={logo} className="logo" />
                    
                    <div className="navList">
                        <NavLink to={'/'} className='nav_button'>Home</NavLink>
                        <NavLink to={'/store'} className='nav_button'>Store</NavLink>
                    </div>

                    <img src={ic_menu_grey} className="ic_menu" onClick={() => clk_menu()} />

                    <MenuMobile show={showMenu} />
                    {/* <ul>
                        <li></li>
                    </ul> */}
                    {/* <div className={"tab_button"+is_tab1} onClick={() => clk_tab(1)}>Main</div>
                    <div className={"tab_button"+is_tab2} onClick={() => clk_tab(2)}>Products</div> */}

                </nav>
            </div>

        </React.Fragment>
    );
}
