import React from "react";
import { dom } from "@fortawesome/fontawesome-svg-core";
import { Footer } from "./Footer";
import { Disclaimer } from "./Disclaimer";

export const Scaffold = ({ name, children }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="static/css/global.css" />
      <style>{dom.css()}</style>
      <script defer type="text/javascript" src="dist/bundle.js"></script>
      <title>{name}</title>
    </head>
    <body>
      <header>
        <h1>{name}</h1>
      </header>
      <div id="page">{children}</div>
      <Footer>
        <Disclaimer />
      </Footer>
    </body>
  </html>
);
