import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

import i18n from "./utils/i18n";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
