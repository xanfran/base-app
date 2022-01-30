module.exports = {
    extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],

    plugins: ['react', 'react-hooks'],

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },

    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },

    rules: {
        // Hooks
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 2,

        // Enforces consistent naming for boolean props
        // Doesn't work. See https://github.com/yannickcr/eslint-plugin-react/issues/1551
        'react/boolean-prop-naming': [2, { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' }],
        // Forbid certain props on Components
        // https://brigade.engineering/don-t-pass-css-classes-between-components-e9f7ab192785
        'react/forbid-component-props': 2,
        // Forbid certain elements
        'react/forbid-elements': 1,
        // Prevent missing displayName in a React component definition
        'react/display-name': [0, { ignoreTranspilerName: true }],
        // Prevent missing props validation in a React component definition
        'react/prop-types': 0,
        // Prevent usage of unsafe target='_blank'
        'react/jsx-no-target-blank': 0, // we use it
        // Prevent invalid characters from appearing in markup
        'react/no-unescaped-entities': 0,
        // Prevent missing React when using JSX
        'react/react-in-jsx-scope': 0,
        // Prevent extraneous defaultProps on components
        'react/default-props-match-prop-types': 2,
        // Forbid certain props on Components
        'react/forbid-prop-types': 0,
        // Forbid foreign propTypes
        'react/forbid-foreign-prop-types': 0,
        // Prevent using Array index in key props
        'react/no-array-index-key': 2,
        // Prevent passing children as props
        'react/no-children-prop': 2,
        // Prevent usage of dangerous JSX properties
        'react/no-danger': 0,
        // Prevent problem with children and props.dangerouslySetInnerHTML
        'react/no-danger-with-children': 2,
        // Prevent usage of deprecated methods
        'react/no-deprecated': 2,
        // Prevent usage of setState in componentDidMount
        'react/no-did-mount-set-state': 2,
        // Prevent usage of setState in componentDidUpdate
        'react/no-did-update-set-state': 2,
        // Prevent direct mutation of this.state
        'react/no-direct-mutation-state': 2,
        // Prevent usage of isMounted
        'react/no-is-mounted': 2,
        // Prevent multiple component definition per file
        'react/no-multi-comp': 0,
        // Prevent usage of shouldComponentUpdate when extending React.PureComponent
        'react/no-redundant-should-component-update': 2,
        // Prevent usage of the return value of React.render
        'react/no-render-return-value': 2,
        // Prevent usage of setState
        'react/no-set-state': 0,
        // Prevent common casing typos
        'react/no-typos': 2,
        // Prevent using string references in ref attribute.
        'react/no-string-refs': 2,
        // Prevent usage of unknown DOM property (fixable)
        'react/no-unknown-property': 2,
        // Prevent definitions of unused prop types
        'react/no-unused-prop-types': 0,
        // Prevent usage of setState in componentWillUpdate
        'react/no-will-update-set-state': 2,
        // Enforce ES5 or ES6 class for React Components
        'react/prefer-es6-class': 0,
        // Enforce stateless React Components to be written as a pure function
        'react/prefer-stateless-function': 0,
        // Enforce a defaultProps definition for every prop that is not a required prop
        'react/require-default-props': 0,
        // Enforce React components to have a shouldComponentUpdate method
        'react/require-optimization': 0,
        // Enforce ES5 or ES6 class for returning value in render function
        'react/require-render-return': 2,
        // Enforce component methods order (fixable)
        'react/sort-comp': 0,
        // Enforce propTypes declarations alphabetical sorting
        'react/sort-prop-types': 0,
        // Enforce style prop value being an object
        'react/style-prop-object': 2,
        // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
        'react/void-dom-elements-no-children': 2,

        // JSX-specific rules
        // Restrict file extensions that may contain JSX
        'react/jsx-filename-extension': 0,
        // Enforce event handler naming conventions in JSX
        'react/jsx-handler-names': 0,
        // Prevent usage of .bind() and arrow functions in JSX props
        'react/jsx-no-bind': 0,
        // Prevent comments from being inserted as text nodes
        'react/jsx-no-comment-textnodes': 2,
        // Prevent usage of unwrapped JSX strings
        'react/jsx-no-literals': 0,
        // Enforce props alphabetical sorting (fixable)
        'react/jsx-sort-props': [
            0,
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never',
            },
        ],
        // This rule enforces the consistent use of either double or single quotes in JSX attributes.
        'jsx-quotes': ['error', 'prefer-double'],
        // Enforce boolean attributes notation in JSX (fixable)
        'react/jsx-boolean-value': 0,
        // Creating JSX elements with duplicate props can cause unexpected behavior in your application.
        'react/jsx-no-duplicate-props': [
            2,
            {
                ignoreCase: true,
            },
        ],
        // Disallow undeclared variables in JSX
        'react/jsx-no-undef': 2,
        // Enforce PascalCase for user-defined JSX components
        'react/jsx-pascal-case': [
            2,
            {
                allowAllCaps: true,
                ignore: [],
            },
        ],
        // Prevent React to be incorrectly marked as unused
        'react/jsx-uses-react': 2,
        // Prevent variables used in JSX to be incorrectly marked as unused
        'react/jsx-uses-vars': 2,
        // Validate JSX has key prop when in array or iterator
        'react/jsx-key': 0,
        // Prevent usage of findDOMNode
        'react/no-find-dom-node': 1,
    },
};
