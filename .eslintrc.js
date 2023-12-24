module.exports = {
    'env': {
        'es2021': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'modules-newline',
        '@typescript-eslint',
        '@stylistic'
    ],
    'rules': {
        '@stylistic/indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'comma-dangle': 'off',
        '@stylistic/comma-dangle': 'error',
        'prefer-arrow-callback': 'error',
        'modules-newline/import-declaration-newline': 'error',
        'modules-newline/export-declaration-newline': 'error',
        '@stylistic/no-trailing-spaces': 'error'
    }
}