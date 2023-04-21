module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // ESLint 原生的规则和 @typescript-eslint/eslint-plugin 的规则太多了，而且原生的规则有一些在 TypeScript 中支持的不好，需要禁用掉。
  // 推荐使用: https://github.com/AlloyTeam/eslint-config-alloy
  extends: ["alloy", "alloy/typescript"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {},
};
