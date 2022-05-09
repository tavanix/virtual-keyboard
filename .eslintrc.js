module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: 'airbnb-base/legacy',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'comma-dangle': [2, 'always-multiline'],
        'linebreak-style': 0,
        'indent': 'off',
        'semi': 0,
        'operator-linebreak': 'off',
        'keyword-spacing': 'off',
        'lines-between-class-members': 'off',
        'no-trailing-spaces': 'off',
        'no-shadow': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'space-infix-ops': 'off',
        'padded-blocks': 'off',
        'space-infix-ops': 'off',
        'class-methods-use-this': 'off',
        'eol-last': 'off',
        'semi-spacing': 'off',
        'max-len': 'off',
        'quotes': 'off',
    },
}
