const feather = require("feather-icons");
const fs = require("fs/promises");

const editIcon = feather.icons["edit-3"].toSvg({ width: 24, height: 24 });

const compose = async () => {
  try {
    let page = await fs.readFile("./index.html");
    scaffold.replace(
      /<div id="edit"><\/div>/,
      `<div id="edit">${editIcon}</div>`
    );
    return page;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = compose;
