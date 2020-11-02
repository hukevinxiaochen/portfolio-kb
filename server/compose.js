const feather = require("feather-icons");
const fs = require("fs/promises");
const path = require("path");
// const editIcon = feather.icons["edit-3"].toSvg({ width: 24, height: 24 });
// const editIcon = feather.icons["edit-3"];
// const pulltabIcon = feather.icons["arrow-right"].toSvg({
// const pulltabIcon = feather.icons["arrow-right"];
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
        <title>kevin hu</title>
      </head>
      <body>
        <nav>
          <div id="edit">
            <Edit3 />
          </div>
        </nav>
        <div id="pulltab">
          <ArrowRight />
        </div>
        <div id="material">
          <header>
            <h1>
              kevin
              <br />
              hu
            </h1>
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
