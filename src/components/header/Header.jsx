import { useState } from 'react';
import "./header.css";
import Navbar from './Navbar';
import Logo from './Logo';

export default function Header() {
    const [toggle, setToggle]= useState(0);
    return (
        <header>
            <div className="container">
                <Logo />
                <Navbar toggle={toggle} setToggle={setToggle}/>
                <div className="header-icon" onClick={() => setToggle(icon => !icon)}>
                    {toggle ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list burger-menu"></i>}
                </div>
            </div>
        </header>
    );
}