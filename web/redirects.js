const fs = require("fs");

const subdirectory = "plaus";
const script = "plaus";

const fileContents = `/${subdirectory}/js/${script}.outbound-links.js https://plausible.io/js/plausible.outbound-links.js 200
/${subdirectory}/api/event https://plausible.io/api/event 202`;

const run = () => {
  if (!fs.existsSync("./out")) {
    fs.mkdirSync("./out");
  }

  fs.writeFileSync("./out/_redirects", fileContents);
  fs.writeFileSync("./_redirects", fileContents);
  fs.writeFileSync("./public/_redirects", fileContents);
  fs.writeFileSync("./next/_redirects", fileContents);
};

try {
  run();
  console.log("_redirects updated");
} catch (error) {
  console.error("Failed to update _redirects!");
  console.error(error.message || error);
}

module.exports = {};
