import React from "react";
import { Button } from "../../globalStyles";
import {
  
  FaInstagram,
  FaYoutube,
  FaTwitter,
  
} from "react-icons/fa";
import {
  FooterContainer,
  Form,
  FormInput,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  
} from "./Footer.elements";

const logoImage = require("../../images/logo.png");

const Footer = () => {
  return (
    <FooterContainer>
      <Form>
        <FormInput name="email" type="email" placeholder="Your EthMail" />
        <Button fontBig>Contact Me</Button>
      </Form>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon src={logoImage.default} />
            PoH
          </SocialLogo>
          <WebsiteRights> MarketPlace Proofofhumanity © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href={"https://www.instagram.com/proofofhumanity/"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={"https://www.youtube.com/channel/UCXHJbgCm5M-Zbg8PuJCioMA"}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="YouTube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href={"https://twitter.com/proofofhumanity"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
