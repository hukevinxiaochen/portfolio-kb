const feather = require("feather-icons");
const fs = require("fs/promises");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
import { Edit3 } from "react-feather";
import { ArrowRight } from "react-feather";

const Page = () => {
  // render
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="static/css/global.css" />
        <script defer type="text/javascript" src="static/js/index.js"></script>
        <title>kevin hu</title>
      </head>
      <body>
        <div id="pulltab">
          <Edit3 id="edit" />
          <ArrowRight id="pull-arrow" />
        </div>
        <div id="material">
          <header>
            <h1>kevin hu</h1>
          </header>
        </div>
      </body>
    </html>
  );
};

const compose = () => {
  return ReactDOMServer.renderToStaticMarkup(<Page />);
};
// const compose = async () => {
//   try {
//     const scaffoldPage = await fs.readFile(
//       path.resolve(__dirname, "index.html"),
//       {
//         encoding: "utf8",
//       }
//     );
//     finalPage = scaffoldPage.replace(
//       /<div id="edit"><\/div>/,
//       `<div id="edit">${editIcon}</div>`
//     );
//     return finalPage;
//   } catch (err) {
//     console.log(err.message);
//   }
// };

module.exports = compose;
