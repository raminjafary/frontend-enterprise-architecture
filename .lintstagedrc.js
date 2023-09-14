export default {
    "**/*.{js,vue,ts}": fileNames =>
        `cross-env NODE_ENV=production pnpm prettier ${fileNames.join(" ")} --write`,
    "**/*.{js,vue,ts}": fileNames =>
        `cross-env NODE_ENV=production pnpm eslint ${fileNames.join(" ")} --fix`,
    // "**/*": "cross-env CI=true jest --bail --findRelatedTests -o"
};
