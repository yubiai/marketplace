import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { GlobalProvider } from "./providers/globalProvider";
import { HashRouter } from "react-router-dom";
import i18nInit from "./utils/i18n";

i18nInit();

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <GlobalProvider>
        <HashRouter>
          <App />
        </HashRouter>    
      </GlobalProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
