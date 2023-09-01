export default {
  "**/*.{js,vue,ts}": (fileNames) => `cross-env NODE_ENV=production pnpm lint ${fileNames.join(' ')} --fix`,
  // "**/*": "cross-env CI=true jest --bail --findRelatedTests -o"
}