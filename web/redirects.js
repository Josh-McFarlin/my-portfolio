const fs = require("fs");

const subdirectory = "plaus";
const script = "plaus";

const fileContents = `/${subdirectory}/js/${script}.outbound-links.js https://plausible.io/js/plausible.outbound-links.js 200
/${subdirectory}/api/event https://plausible.io/api/event 202`;

const run = () => {
  fs.writeFileSync("./public/_redirects", fileContents);
};

try {
  run();
  console.log("_redirects updated");
} catch (error) {
  console.error("Failed to update _redirects!");
  console.error(error.message || error);
}

module.exports = {};
