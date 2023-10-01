import React from "react";
import style from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className={`${style["nav-bar"]} ${style["d-flex"]} ${style["align-center"]} ${style["justify-between"]} ${style["p-l-r"]}`}>
                <a href='/'><Image className={style['logo']} src={"/assets/logoccweb.png"} width={400} height={80} /></a>
                <div className={style["nav-elements"]}>
                    <ul className={style["d-flex"]}>
                        <li><a href="/chisiamo">Chi Siamo</a></li>
                        <li><a href="/contattaci">Contattaci</a></li>
                    </ul>
                    {/* Mobile Dropdown */}
                    <select className={`${style["nav-dropdown"]} ${style["d-lg-none"]}`}>
                        <option value="/chi-siamo">About Us</option>
                        <option value="/contact">Contact Us</option>
                    </select>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
