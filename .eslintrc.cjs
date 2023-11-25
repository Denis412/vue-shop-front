module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
        {
            env: {
                node: true,
            },
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                sourceType: 'module',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['vue', 'prettier'],
    rules: {
        'prefer-promise-reject-errors': 'off',
        'vue/no-setup-props-destructure': 'off',

        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        semi: [2, 'always'],
        indent: ['error', 4],
        quotes: ['error', 'single'],
        'max-len': ['error', { code: 100 }],

        'vue/attributes-order': [
            'error',
            {
                order: [
                    'DEFINITION',
                    'LIST_RENDERING',
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'GLOBAL',
                    ['UNIQUE', 'SLOT'],
                    'TWO_WAY_BINDING',
                    'OTHER_DIRECTIVES',
                    'OTHER_ATTR',
                    'EVENTS',
                    'CONTENT',
                ],
                alphabetical: false,
            },
        ],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 1,
                },
                multiline: {
                    max: 1,
                },
            },
        ],
        // 'vue/html-self-closing': [
        //     'error',
        //     {
        //         html: {
        //             void: 'never',
        //             normal: 'always',
        //             component: 'always',
        //         },
        //         svg: 'always',
        //         math: 'always',
        //     },
        // ],
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        'vue/component-name-in-template-casing': [
            'error',
            'kebab-case',
            {
                registeredComponentsOnly: true,
            },
        ],
        'vue/component-definition-name-casing': ['error', 'PascalCase'],
        'vue/match-component-file-name': [
            'error',
            {
                extensions: ['vue'],
                shouldMatchCase: false,
            },
        ],
        'vue/no-irregular-whitespace': [
            'error',
            {
                skipStrings: true,
                skipComments: false,
                skipRegExps: false,
                skipTemplates: false,
                skipHTMLAttributeValues: false,
                skipHTMLTextContents: false,
            },
        ],
        'vue/order-in-components': [
            'error',
            {
                order: [
                    'el',
                    'name',
                    'key',
                    'parent',
                    'functional',
                    ['delimiters', 'comments'],
                    ['components', 'directives', 'filters'],
                    'extends',
                    'mixins',
                    ['provide', 'inject'],
                    'ROUTER_GUARDS',
                    'layout',
                    'middleware',
                    'validate',
                    'scrollToTop',
                    'transition',
                    'loading',
                    'inheritAttrs',
                    'model',
                    ['props', 'propsData'],
                    'emits',
                    'setup',
                    'asyncData',
                    'data',
                    'fetch',
                    'head',
                    'computed',
                    'watch',
                    'watchQuery',
                    'LIFECYCLE_HOOKS',
                    'methods',
                    ['template', 'render'],
                    'renderError',
                ],
            },
        ],

        'prettier/prettier': 'error',
    },
};
