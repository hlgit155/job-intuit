import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from 'Images/quickbook_logo.png';
import ic_menu_grey from 'Images/menu_icon_grey.png';
import formInput from 'Data/signup_form.js';

import 'CSS/popform.css';

export default function PopForm(props, { ...rest }) {

    const { show, clk_hideForm } = props;
    const showing = show ? '' : 'none';

    const [inpVal, setInpVal] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [thanks, setThanks] = useState(false);

    const chk_Name = (val) => { return val.length >= 2 ? true : 'Please enter at least 2 characters for your name.'; }
    const chk_Phone = (val) => { return val.length === 10 ? true : 'An Australian number should be 10 digits.'; }

    const clk_submit = (e) => {
        e.preventDefault();
        
        console.log(inpVal);

        if (chk_Name(inpVal.name) === true && chk_Phone(inpVal.phone) === true) setSubmitted(true);
        
        if (typeof chk_Name(inpVal.name) === 'string') alert(chk_Name(inpVal.name));
        if (typeof chk_Phone(inpVal.phone) === 'string') alert(chk_Phone(inpVal.phone));
    }

    const clk_confirm = () => { setThanks(true) }
    const clk_cancel = () => { setSubmitted(false) }
    const clk_closeForm = () => {
        setSubmitted(false);
        setThanks(false);
        clk_hideForm();
    }

    if (thanks) return (
        <React.Fragment>
            <div className="backdrop" style={{ display: showing }} >

                <div className="form_wrap">
                    <h3>Thank you, please click 'Done' to go back</h3>
                    <button className="btn_purple" onClick={() => clk_closeForm()} >Done</button>
                </div>
            </div>
        </React.Fragment>
    )
    else if (submitted) return (
        <React.Fragment>
            <div className="backdrop" style={{ display: showing }} >

                <div className="form_wrap">
                    <h2>Confirmation</h2>
                    <div className="form_content">
                        {formInput.map((eachInp, inpKey) => {
                            return (
                                <div key={inpKey} style={{ margin: '10px 0' }}><b>{eachInp.label}: </b>{inpVal[eachInp.label.toLowerCase()]}</div>
                            )
                        })}
                    </div>
                    <button className="btn_purple" onClick={() => clk_confirm()} >Confirm</button>
                    <button className="btn_plain" onClick={() => clk_cancel()} >Cancel</button>
                </div>
            </div>
        </React.Fragment>
    )
    else return (
        <React.Fragment>
            
            <div className="backdrop" style={{ display: showing }} >

                <div className="form_bg" style={{ display: showing }} onClick={() => clk_closeForm()}></div>
                
                <div className="form_wrap">
                    <h2>Sign Up</h2>
                    <form onSubmit={clk_submit}>
                        {formInput.map((eachInp, inpKey) => {
                            return (
                                <div key={inpKey} className="inpRow">
                                    <label>{eachInp.label}: </label>
                                    <input
                                        type={eachInp.inp_type}
                                        name={eachInp.label.toLowerCase()}
                                        required
                                        onChange={(e) => setInpVal({...inpVal, [eachInp.label.toLowerCase()]: e.target.value})}
                                    />
                                </div>
                            )
                        })}
                        <button type="submit" className="btn_purple" >Submit</button>
                        <button type="button" className="btn_plain" onClick={() => clk_closeForm()} >Cancel</button>
                    </form>
                </div>
            </div>

        </React.Fragment>
    );
}
