const rules = {
  "*.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"],
  "*.{json,css,scss}": ["prettier --write"],
};

module.exports = rules;
