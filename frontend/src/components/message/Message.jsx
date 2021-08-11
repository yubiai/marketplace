import React from "react";

const Message = () => {
  return (
    <div className="container">
      <div className="col-sm-1">
        <h1>Stackly Commerce con Ethereum</h1>
        <p>Usted necesita instalar el plugin Metamask en su navegador</p>
        <ul>
          <li>
            Puede ir a{" "}
            <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">
              {" "}
              que es la página de Metamask
            </a>{" "}
            e instalar en Chrome
          </li>
          <li>If you already have it installed, uninstall and re-install it</li>
        </ul>
      </div>
    </div>
  );
};

export default Message;
