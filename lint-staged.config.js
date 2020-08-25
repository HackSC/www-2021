module.exports = {
    '*.{js,ts,tsx}': [
      'eslint --fix',
      'git add',
    ],
    '*.{css}': ['stylelint **/*.css --fix', 'git add'],
};