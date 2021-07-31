import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background: rgb(255,186,121);
  background: linear-gradient(90deg, rgba(255,186,121,1) 29%, rgba(253,202,211,1) 100%);
  
  padding: 1rem 0 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 6px 18px;
  border-radius: 2px;
  margin-right: 10px;
  margin-top: 15px;
  outline: none;
  border: none;
  font-size: 10px;
  border: 1px solid #fff;
  &::placeholder {
    color: #242424;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

const linkStyle = `
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    color: #008968;
    transition: 0.3s ease-out;
  }
`;

export const FooterLink = styled(Link)`
  ${linkStyle}
`;

export const FooterLinkURL = styled.a`
  ${linkStyle}
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #666;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-weight: 400;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled.img`
  margin-right: 10px;
  border-radius: 50%;
  height: 40px;
`;

export const WebsiteRights = styled.small`
  color: #666;
  font-weight: 400;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #666;
  font-size: 24px;
`;
