export default {
  '*': fileNames =>
    `cross-env NODE_ENV=production prettier --ignore-path .gitignore --write --list-different ${fileNames.join(' ')}`,
  '**/*.{js,vue,ts}': fileNames =>
    `cross-env NODE_ENV=production eslint ${fileNames.join(' ')} --fix`,
};
