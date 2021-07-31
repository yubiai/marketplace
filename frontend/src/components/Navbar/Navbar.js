import { stripZeros } from "ethers/lib/utils";
import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.png';


import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavItem,
  NavLinks,
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
              <div style={{ margin: "auto auto auto 0", color: 'black'}}>Proof of Humanity MarketPlace</div>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/profile" target="_top" style={{display: "flex", justifyContent: "center",alignItems: "center"}}>
              <NavIcon src={profileIcon} style={{height:'3rem',marginLeft:"-4rem"}} />              
                 Profile  
              </NavLinks>   
              </NavItem> 
               
              <NavItem>
                <NavLinks to="/" >Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/Categories" >Categories</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/Sell" >Sell</NavLinks>
              </NavItem>
              
            {/* Resolver redirect quitar _top */}
            
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};


export default Navbar;
