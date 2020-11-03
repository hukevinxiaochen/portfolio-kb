const fs = require("fs/promises");
const path = require("path");

import React from "react";
import ReactDOMServer from "react-dom/server";
import { Page } from "../Page";

const compose = () => {
  return ReactDOMServer.renderToStaticMarkup(<Page />);
};

module.exports = compose;
