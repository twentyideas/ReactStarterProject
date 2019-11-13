module.exports = {
    extends: ["react-app", "plugin:prettier/recommended", "plugin:react-directives/recommended"],
    rules: {
        "react-directives/no-unused-vars": "off", // this doubles up
        "object-curly-newline": ["error", { multiline: true, consistent: true }],
        "newline-per-chained-call": "off",
        "no-shadow": ["error", { allow: ["resolve", "reject"] }]
    }
}
