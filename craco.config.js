const { ESLINT_MODES } = require("@craco/craco")
// craco.config.js
// const path = require('path')
// const appSrc = path.resolve(__dirname, 'src')
// const { when, whenDev, whenProd, whenCI, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");
module.exports = {
    reactScriptsVersion: "react-scripts",
    babel: {
        plugins: [["react-directives", { prefix: "x", pragmaType: "React" }]]
    }
}
