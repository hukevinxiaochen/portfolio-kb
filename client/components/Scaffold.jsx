import React from "react";

export const Scaffold = ({ children }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="static/css/global.css" />
      <script defer type="text/javascript" src="dist/bundle.js"></script>
      <title>kevin hu</title>
    </head>
    <body>{children}</body>
  </html>
);
