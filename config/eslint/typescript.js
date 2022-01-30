module.exports = {
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            plugins: ['@typescript-eslint'],
            parser: '@typescript-eslint/parser',
            rules: {
                '@typescript-eslint/consistent-type-assertions': 'error',
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    {
                        vars: 'all',
                        args: 'after-used',
                        ignoreRestSiblings: true,
                        argsIgnorePattern: '^_',
                    },
                ],
                'no-use-before-define': 'off',
                '@typescript-eslint/no-use-before-define': [
                    'error',
                    { functions: false, classes: true },
                ],
                'no-shadow': 'off',
                '@typescript-eslint/no-shadow': 'error',
                // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
                'no-undef': 'off',
                'no-redeclare': 'off',
                '@typescript-eslint/no-redeclare': 'error',
                'no-dupe-class-members': 'off',
                '@typescript-eslint/no-dupe-class-members': ['error'],
                'spaced-comment': [
                    'error',
                    'always',
                    {
                        line: {
                            markers: ['/'],
                            exceptions: ['-', '+'],
                        },
                    },
                ],
            },
        },
    ],
};
