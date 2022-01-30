// compatible with stylelint-scss version 3.15.0
module.exports = {
    rules: {
        // @-each

        // This is a rule that checks for situations where users have done a loop using map-keys and grabbed the value for that key inside of the loop.
        'scss/at-each-key-value-single-line': null,

        // @-else

        // Require or disallow a newline after the closing brace of @else statements (Autofixable).
        'scss/at-else-closing-brace-newline-after': null,
        // Require a single space or disallow whitespace after the closing brace of @else statements (Autofixable).
        'scss/at-else-closing-brace-space-after': null,
        // Require an empty line or disallow empty lines before @-else (Autofixable).
        'scss/at-else-empty-line-before': null,
        // Require or disallow a space before @else if parentheses (Autofixable).
        'scss/at-else-if-parentheses-space-before': 'always',

        // @-extend

        // Disallow at-extends (@extend) with missing placeholders.
        'scss/at-extend-no-missing-placeholder': null,

        // @-function

        // Require named parameters in SCSS function call rule.
        'scss/at-function-named-arguments': null,
        // Require or disallow a space before @function parentheses (Autofixable).
        'scss/at-function-parentheses-space-before': 'always',
        // Specify a pattern for Sass/SCSS-like function names.
        'scss/at-function-pattern': null,

        // @-if

        // Require or disallow a newline after the closing brace of @if statements (Autofixable).
        'scss/at-if-closing-brace-newline-after': null,
        // Require a single space or disallow whitespace after the closing brace of @if statements (Autofixable).
        'scss/at-if-closing-brace-space-after': null,
        // Disallow null in @if statements.
        'scss/at-if-no-null': null,

        // @-import

        // Disallow leading underscore in partial names in @import.
        'scss/at-import-no-partial-leading-underscore': null,
        // Require or disallow extension in @import commands.
        'scss/at-import-partial-extension': null,
        // Specify blacklist of disallowed file extensions for partial names in @import commands.
        'scss/at-import-partial-extension-blacklist': null,
        // Specify whitelist of allowed file extensions for partial names in @import commands.
        'scss/at-import-partial-extension-whitelist': null,

        // @-mixin

        // Require or disallow parentheses in argumentless @mixin calls (Autofixable).
        'scss/at-mixin-argumentless-call-parentheses': 'always',
        // Require named parameters in at-mixin call rule.
        'scss/at-mixin-named-arguments': null,
        // Require or disallow a space before @mixin parentheses (Autofixable).
        'scss/at-mixin-parentheses-space-before': 'never',
        // Specify a pattern for Sass/SCSS-like mixin names.
        'scss/at-mixin-pattern': [
            'apply-.+',
            {
                severity: 'warning',
            },
        ],

        // @-rule

        // Disallow parentheses in conditional @ rules (if, elsif, while).
        'scss/at-rule-conditional-no-parentheses': null,
        // Disallow unknown at-rules. Should be used instead of stylelint's at-rule-no-unknown.
        'scss/at-rule-no-unknown': true,

        // $-variable

        // Require a newline after the colon in $-variable declarations (Autofixable).
        'scss/dollar-variable-colon-newline-after': 'always-multi-line',
        // Require or disallow whitespace after the colon in $-variable declarations (Autofixable).
        'scss/dollar-variable-colon-space-after': 'at-least-one-space',
        // Require a single space or disallow whitespace before the colon in $-variable declarations (Autofixable).
        'scss/dollar-variable-colon-space-before': 'never',
        // Require !default flag for $-variable declarations.
        'scss/dollar-variable-default': null,
        // Require a single empty line or disallow empty lines before $-variable declarations (Autofixable).
        'scss/dollar-variable-empty-line-before': null,
        // Disallow Sass variables that are used without interpolation with CSS features that use custom identifiers.
        'scss/dollar-variable-no-missing-interpolation': null,
        // Specify a pattern for Sass-like variables.
        'scss/dollar-variable-pattern': null,

        // %-placeholder

        // Specify a pattern for %-placeholders.
        'scss/percent-placeholder-pattern': null,

        // //-comment

        // Require or disallow an empty line before //-comments (Autofixable).
        'scss/double-slash-comment-empty-line-before': null,
        // Require or disallow //-comments to be inline comments.
        'scss/double-slash-comment-inline': null,
        // Require or disallow whitespace after the // in //-comments
        'scss/double-slash-comment-whitespace-inside': null,

        // Comment

        // Disallow /*-comments.
        'scss/comment-no-loud': null,

        // Declaration

        // Require or disallow properties with - in their names to be in a form of a nested group.
        'scss/declaration-nested-properties': 'never',
        // Disallow nested properties of the same "namespace" be divided into multiple groups.
        'scss/declaration-nested-properties-no-divided-groups': null,

        // Dimension

        // Disallow non-numeric values when interpolating a value with a unit.
        'scss/dimension-no-non-numeric-values': null,

        // Function

        // Encourage the use of the scale-color function over regular color functions.
        'scss/function-color-relative': null,
        // Disallow quoted strings inside the quote function (Autofixable).
        'scss/function-quote-no-quoted-strings-inside': null,
        // Disallow unquoted strings inside the unquote function (Autofixable).
        'scss/function-unquote-no-unquoted-strings-inside': null,

        // Map

        // Require quoted keys in Sass maps.
        'scss/map-keys-quotes': null,

        // Media feature

        // Require a media feature value be a $-variable or disallow $-variables in media feature values.
        'scss/media-feature-value-dollar-variable': null,

        // Operator

        // Disallow linebreaks after Sass operators.
        'scss/operator-no-newline-after': true,
        // Disallow linebreaks before Sass operators.
        'scss/operator-no-newline-before': true,
        // Disallow unspaced operators in Sass operations.
        'scss/operator-no-unspaced': true,

        // Partial

        // Disallow non-CSS @imports in partial files.
        'scss/partial-no-import': null,

        // Selector

        // Require or disallow nesting of combinators in selectors.
        'scss/selector-nest-combinators': null,
        // Disallow redundant nesting selectors (&).
        'scss/selector-no-redundant-nesting-selector': null,
        // Disallow union class names with the parent selector (&).
        'scss/selector-no-union-class-name': null,

        // General / Sheet

        // Disallow dollar variables within a stylesheet.
        'scss/no-dollar-variables': null,
        // Disallow duplicate dollar variables within a stylesheet.
        'scss/no-duplicate-dollar-variables': null,
        // Disallow duplicate mixins within a stylesheet.
        'scss/no-duplicate-mixins': null,
    },
};
