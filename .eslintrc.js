module.exports = {
    extends: ["react-app", "plugin:prettier/recommended"],
    rules: {
        "object-curly-newline": ["error", { multiline: true, consistent: true }],
        "newline-per-chained-call": "off"
    }
}
