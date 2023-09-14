module.exports = {
    env: {
        browser: true,
        node: true,
    },
    parser: "vue-eslint-parser",
    extends: [
        "../../.eslintrc.cjs",
        "@nuxtjs/eslint-config-typescript",
        "plugin:prettier/recommended",
    ],
    rules: {},
};
