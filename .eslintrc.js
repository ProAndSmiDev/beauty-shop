module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        '@vue/airbnb',
        'plugin:vue/essential',
        '@vue/typescript/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'import/prefer-default-export': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                endOfLine: 'auto',
                singleAttributePerLine: true,
                printWidth: 120,
                vueIndentScriptAndStyle: true,
            },
        ],
    },
};
