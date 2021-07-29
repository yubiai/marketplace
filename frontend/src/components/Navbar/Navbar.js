import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.png';
import { Button } from "../../globalStyles";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  
} from "./Navbar.elements";


const logoImage = require("../../images/logo.png");
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon src={logoImage.default} />
              <div style={{ margin: "auto auto auto 0" }}>ProofHumanity</div>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>

            {/* Resolver redirect quitar _top*/}
            <Link to={'/profile'} target="_top"  replace style={{ color: 'white', textDecoration: 'none', underline:'none'}}>
                        <img src={profileIcon} alt="View Profile" className="profileIcon" height="70px" />
                        <span>Profile</span>
            </Link>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};


export default Navbar;
