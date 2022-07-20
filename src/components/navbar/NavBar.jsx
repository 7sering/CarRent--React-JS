import React, { useState } from "react";
import styles from "./NavBar.module.css";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import Logo from "../../images/logo.png";

const NavBar = () => {
  const [nav, setNav] = useState(false) // making nav responsive
  return (
    <header className={styles.navbar}>
      <img src={Logo} alt="logo" />
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
          <li>
            <a href="/"> Learn More</a>
          </li>
          <li>
            <a href="/"> Login</a>
          </li>
          <li>
            <a href="/">Sign up</a>
          </li>
          <li>
            <AiOutlineSearch size={22} style={{marginTop:'12px'}}/>
          </li>
          <li>
            <AiOutlineUser size={22} style={{marginTop:'12px'}}/>
          </li>
        </ul>
      </nav>

    
      <div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
    </header>
  );
};

export default NavBar;
