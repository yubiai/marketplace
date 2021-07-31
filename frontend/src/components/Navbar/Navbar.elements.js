import styled from "styled-components";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
   background: rgb(255,186,121);
   background: linear-gradient(90deg, rgba(255,186,121,1) 29%, rgba(253,202,211,1) 100%);
   height: 100px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1.2rem;
   position: relative;
   top: 0;
   z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 40px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  display: contents;
`;

export const NavIcon = styled.img`
  margin-right: 0.5rem;
  border-radius: 50%;
  height: 100%;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: left;
  
   
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 64.3vh;
    position: absolute;
    top: 100px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #e4e6eb;
    font-size: 1rem;
    font-weight: 400;
    margin-left: 0;
    line-height: 0;
  }
`;

export const NavItem = styled.li`
  height: 40px;
  border-bottom: 0px solid transparent;

  &:hover {
    border-bottom: none;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
      
    }
  }
`;

const NavLinkStyle = `
 color: #333;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 0.5rem 1rem;
 height: 100%;
 &:hover {
  color: #008968;  
}
 @media screen and (max-width: 960px) {
   text-align: left;
   padding: 2rem;
   width: 80%;
   display: table;

   &:hover {
     color: #008968;
     text-decoration: underline;
     transition: all 0.3s ease;
   }
 }
`;

export const NavLinks = styled(Link)`
  ${NavLinkStyle}
`;

export const NavLinksURL = styled.a`
  ${NavLinkStyle}
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;