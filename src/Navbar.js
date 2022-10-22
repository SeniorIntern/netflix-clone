import React, { useState, useEffect } from "react";
import logo from "./Assets/Images/freeflix.PNG";
import avatar from "./Assets/Images/avatar.png";
import "./Navbar.css";

export default function Navbar() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else setShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`navbar ${show && "nav__black"}`}>
            <img src={logo} alt="freeflix logo" className="nav__logo" />
            <img src={avatar} alt="avatar logo" className="nav__avatar" />
        </div>
    );
}
